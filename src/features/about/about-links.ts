/** Where the portfolio edition’s maintainer can be found. Labels live in the `common` catalogue (`about.links.<id>`). */
export const AUTHOR_LINKS = [
  { id: "github", href: "https://github.com/Ace-Alch" },
] as const;

/** Where readers report a mistake or propose a lab. */
export const ISSUES_URL = "https://github.com/Ace-Alch/esp32-labs/issues/new/choose";

/** A click on a modal dialog's backdrop targets the dialog itself, outside its box. */
export function isOutside(
  box: Pick<DOMRectReadOnly, "left" | "right" | "top" | "bottom">,
   x: number, y: number): boolean {
  return x < box.left || x > box.right || y < box.top || y > box.bottom;
}

/** Everyone who has contributed to the guide, on GitHub. */
export const CONTRIBUTORS_URL = "https://github.com/Ace-Alch/esp32-labs/graphs/contributors";
