/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { article } from "./mock";
import ArticleCard from "..";
import { cutTextToLength } from "@/utils";

describe("ArticleCard", () => {
  test("Generated link should be in the correct format", () => {
    const component = render(<ArticleCard {...article} />);
    const link = component.getByRole("link").getAttribute("href");
    expect(link).toBe("/articles/healthy-summer-meloncarrot-soup-u12w3o0d");
  });

  test("Generated summary should not exceed 100 characters", async () => {
    render(<ArticleCard {...article} />);
    const summary = screen.getByText(cutTextToLength(article.body, 100));

    expect(summary).toBeDefined();
  });

  test("Generated credits should contain author name", async () => {
    render(<ArticleCard {...article} />);
    const credits = screen.getByText(/John Doe/m);

    expect(credits.textContent).toBe("Written by John Doe");
  });
});
