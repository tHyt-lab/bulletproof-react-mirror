import type { LinkProps } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, ...props }: LinkProps) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};
