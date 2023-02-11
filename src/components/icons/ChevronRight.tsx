import type { Component } from "solid-js";

interface ChevronRightProps {
  class?: string;
}

export const ChevronRight: Component<ChevronRightProps> = (props) => {
  return (
    <svg
      class={"w-4 h-4" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
};
