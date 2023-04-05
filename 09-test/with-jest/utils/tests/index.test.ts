import { cutTextToLength } from "..";

describe("cutTextToLength cuts a string when it's too long", () => {
  test("Should cut a string that exceeds 10 characters", () => {
    const initialString = "This is a 34 character long string";
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual("This is a ...");
  });

  test("Should not cut a string if it's shorter than 10 characters", () => {
    const initialString = "7 chars";
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual("7 chars");
  });
});
