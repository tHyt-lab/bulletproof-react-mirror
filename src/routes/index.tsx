import { Landing } from "@/features/misc";
import { RouteObject, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";

export interface PartialRouteObject {
  caseSensitive?: boolean;
  children?: PartialRouteObject[];
  element?: React.ReactNode;
  path?: string;
}

export const AppRoutes = () => {
  const commonRoutes: RouteObject[] = [{ path: "/", element: <Landing /> }];
  const element = useRoutes([...publicRoutes, ...commonRoutes]);
  return <>{element}</>;
};
