/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { EncodeObject } from "@cosmjs/proto-signing";
import { AminoMsgGrant } from "./cosmos/authz";

export interface AminoConverter {
  readonly aminoType: string;
  readonly toAmino: (value: any) => any;
  readonly fromAmino: (value: any) => any;
}

/** A map from protobuf type URL to the AminoConverter implementation if supported on chain */
export type AminoConverters = Record<
  string,
  AminoConverter | "not_supported_by_chain"
>;

function isAminoConverter(
  converter: [string, AminoConverter | "not_supported_by_chain"]
): converter is [string, AminoConverter] {
  return typeof converter[1] !== "string";
}

/**
 * A map from Stargate message types as used in the messages's `Any` type
 * to Amino types.
 */
export class AminoTypes {
  // The map type here ensures uniqueness of the protobuf type URL in the key.
  // There is no uniqueness guarantee of the Amino type identifier in the type
  // system or constructor. Instead it's the user's responsibility to ensure
  // there is no overlap when fromAmino is called.
  private readonly register: Record<
    string,
    AminoConverter | "not_supported_by_chain"
  >;

  public constructor(types: AminoConverters) {
    this.register = types;
  }

  public toAmino({ typeUrl, value }: EncodeObject): AminoMsg | AminoMsgGrant {
    const converter = this.register[typeUrl];
    if (converter === "not_supported_by_chain") {
      throw new Error(
        `The message type '${typeUrl}' cannot be signed using the Amino JSON sign mode because this is not supported by chain.`
      );
    }
    if (!converter) {
      throw new Error(
        `Type URL '${typeUrl}' does not exist in the Amino message type register. ` +
          "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
          "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
      );
    }
    const aminoValue = converter.toAmino(value);
    console.log({
      toAmino:
        "granter" in aminoValue
          ? aminoValue
          : {
              type: converter.aminoType,
              value: aminoValue,
            },
    });

    if ("granter" in aminoValue) return aminoValue;
    return {
      type: converter.aminoType,
      value: aminoValue,
    };
  }

  public fromAmino(input: AminoMsg | AminoMsgGrant): EncodeObject {
    const { type, value } =
      "granter" in input
        ? { type: "cosmos.authz.v1beta1.Grant", value: input }
        : input;

    const matches = Object.entries(this.register)
      .filter(isAminoConverter)
      .filter(([_typeUrl, { aminoType }]) => aminoType === type);

    switch (matches.length) {
      case 0: {
        throw new Error(
          `Amino type identifier '${type}' does not exist in the Amino message type register. ` +
            "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
            "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
        );
      }
      case 1: {
        const [typeUrl, converter] = matches[0];
        console.log({
          fromAmino: {
            typeUrl: typeUrl,
            value: converter.fromAmino(value),
          },
        });

        return {
          typeUrl: typeUrl,
          value: converter.fromAmino(value),
        };
      }
      default:
        throw new Error(
          `Multiple types are registered with Amino type identifier '${type}': '` +
            matches
              .map(([key, _value]) => key)
              .sort()
              .join("', '") +
            "'. Thus fromAmino cannot be performed."
        );
    }
  }
}
