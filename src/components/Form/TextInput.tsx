import type { TextInputProps as MTextInputProps } from "@mantine/core";
import { TextInput as MTextInput } from "@mantine/core";
import { UseFormRegisterReturn } from "react-hook-form";

export type TextInputProps = MTextInputProps & {
  registration: Partial<UseFormRegisterReturn>;
};

export const TextInput = ({ registration, ...props }: TextInputProps) => {
  return <MTextInput {...props} {...registration} />;
};
