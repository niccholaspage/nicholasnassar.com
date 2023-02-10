const pageHeadings = new Map<string, Set<string>>();

export function addPageHeading(page: string, id: string, title: string) {
  let headings = pageHeadings.get(page);

  if (typeof headings === "undefined") {
    headings = new Set();
    pageHeadings.set(page, headings);
  }

  headings.add(
    JSON.stringify({
      id,
      title,
    })
  );
}

export function getPageHeadings(page: string) {
  return pageHeadings.get(page) ?? new Set();
}

export interface PageHeading {
  id: string;
  title: string;
}
