import { lazy } from "react";

export const loginPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./LoginPage")), 1500);
    })
);
