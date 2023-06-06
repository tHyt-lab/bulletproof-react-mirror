import type { PasswordInputProps as MPasswordInputProps } from "@mantine/core";
import { PasswordInput as MPasswordInput } from "@mantine/core";
import { UseFormRegisterReturn } from "react-hook-form";

export type PasswordInputProps = MPasswordInputProps & {
  registration: Partial<UseFormRegisterReturn>;
};

export const PasswordInput = ({
  registration,
  ...props
}: PasswordInputProps) => {
  return <MPasswordInput {...props} {...registration} />;
};
