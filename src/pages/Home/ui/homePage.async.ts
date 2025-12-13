import { lazy } from "react";
export const homePageAsync = lazy
(
() =>
    new Promise((resolve) => {
        //@ts-expect-error Simulate delay
        setTimeout(() => resolve(import("./HomePage")), 1500);
    })
);