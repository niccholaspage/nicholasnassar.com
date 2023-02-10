import { ChevronRight } from "../icons/ChevronRight";
import { RoundedButtonDiv } from "../button/RoundedButton";
import { For, type Component } from "solid-js";
import { getPageHeadings } from "../../util/page-headings";

// TODO: Don't hardcode this
const pageHeadings = getPageHeadings("/");

const listItems = [...pageHeadings];

export const TableOfContents: Component = () => {
  return (
    <nav
      id="table-of-contents"
      class="bg-zinc-200 dark:bg-zinc-900 fixed top-16 w-full -mx-4 px-4 border-b-2 border-b-zinc-100 dark:border-b-zinc-800"
    >
      <details class="w-full py-2 flex items-center">
        <summary class="flex items-center gap-4 marker:hidden list-none">
          <RoundedButtonDiv size={"sm"}>
            On this page
            <ChevronRight />
          </RoundedButtonDiv>
          <span id="current-section"></span>
        </summary>
        <ul>
          <For each={listItems}>{(item) => <li>{item}</li>}</For>
        </ul>
      </details>
    </nav>
  );
};
