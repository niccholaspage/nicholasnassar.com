const pageHeadings = new Map<string, Set<string>>();

export function addPageHeading(page: string, heading: string) {
  let headings = pageHeadings.get(page);

  if (typeof headings === "undefined") {
    headings = new Set();
    pageHeadings.set(page, headings);
  }

  headings.add(heading);
}

export function getPageHeadings(page: string) {
  return pageHeadings.get(page) ?? new Set();
}
