import { ChevronRight } from "../icons/ChevronRight";
import { RoundedButtonDiv } from "../button/RoundedButton";
import { createSignal, For, type JSX, type Component, onMount, onCleanup } from "solid-js";

// TODO: Don't hardcode this
const pageHeadings = [
  {
    id: "",
    title: "Intro",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "latest-posts",
    title: "Latest Posts",
  },
];

export const TableOfContents: Component = () => {
  const [open, setOpen] = createSignal(false);
  const onToggle: JSX.EventHandler<HTMLDetailsElement, Event> = (event) => setOpen(event.currentTarget.open);
  const onLinkClick = () => setOpen(false);

  let navRef: HTMLElement;

  onMount(() => {
    const header = document.querySelector("[data-header]") as HTMLElement;

    const sections = [...document.querySelectorAll("[data-section]")];

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `${(header.offsetHeight + navRef.offsetHeight) * -1}px`,
      threshold: 0.1,
    };

    const currentSection = document.getElementById("current-section")!;

    const callback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const target = entry.target;
          currentSection.textContent = target.getAttribute("data-title");
          break;
        }
      }
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    onCleanup(() => {
      observer.disconnect();
    });
  });
  return (
    <nav
      ref={navRef!}
      id="table-of-contents"
      class="bg-zinc-200 dark:bg-zinc-900 fixed top-16 w-full px-4 border-b-2 border-b-zinc-100 dark:border-b-zinc-800"
    >
      <details open={open()} ontoggle={onToggle} class="w-full py-2 flex items-center group">
        <summary class="flex items-center gap-4 marker:hidden list-none">
          <RoundedButtonDiv size={"sm"}>
            On this page
            <ChevronRight class="group-open:rotate-90 ease-in duration-150" />
          </RoundedButtonDiv>
          <span id="current-section"></span>
        </summary>
        <ul class="pl-2">
          <For each={pageHeadings}>
            {(item) => (
              <li>
                <a onClick={onLinkClick} class="inline-flex w-full py-2" href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            )}
          </For>
        </ul>
      </details>
    </nav>
  );
};
