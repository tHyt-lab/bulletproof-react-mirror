import type { ButtonProps as MButtonProps } from "@mantine/core";
import { Button as MButton } from "@mantine/core";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <MButton ref={ref} {...props}>
        {props.children}
      </MButton>
    );
  }
);
