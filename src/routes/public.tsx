import { lazyImport } from "@/utils/lazyImport";
import type { PartialRouteObject } from "./index";

const { AuthRoutes } = lazyImport(
  () => import("@/features/auth"),
  "AuthRoutes"
);

export const publicRoutes: PartialRouteObject[] = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
