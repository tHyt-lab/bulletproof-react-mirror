import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";

export interface PartialRouteObject {
  caseSensitive?: boolean;
  children?: PartialRouteObject[];
  element?: React.ReactNode;
  path?: string;
}

export const AppRoutes = () => {
  const element = useRoutes([...publicRoutes]);
  return <>{element}</>;
};
