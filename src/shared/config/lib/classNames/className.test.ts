import { describe, expect, test } from "vitest";
import { classNames } from "./classNames";
describe("classNames", () => {
  test("1 argument", () => {
    expect(classNames("class1")).toBe("class1");
  });

  test("conditional Class", () => {
    expect(classNames("class1", { class2: true })).toBe("class1 class2");
    expect(classNames("class1", { class2: false })).toBe("class1");
  });

  test("conditional Class", () => {
    expect(classNames("class1", undefined, null, "class2")).toBe(
      "class1 class2"
    );
  });
});

// import { describe, expect, test } from "vitest";
// import { classNames } from "./classNames";

// describe("classNames", () => {
//   // CORRECT: The individual test case should be directly inside the 'describe' block
//   test("handles a single string argument correctly", () => {
//     expect(classNames("class1")).toBe("class1");
//   });

//   // You would add other test cases here:
//   // test("handles null and undefined", () => { ... });
//   // test("handles an object with booleans", () => { ... });
// });
