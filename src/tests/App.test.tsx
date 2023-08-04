import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "@infra/App";

// FIXME : enable this test when adding router
describe.skip("Main App", () => {
  it("Should render welcome message in main-title", () => {
    const { getByTestId } = render(<App />);
    const mainTitle = getByTestId("main-title").textContent;

    expect(mainTitle).toStrictEqual("Hello World !");
  });
});
