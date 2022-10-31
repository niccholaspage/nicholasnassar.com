import type { Component } from "solid-js";

interface MobileMenuButtonProps {
  children: any;
}

function test() {
  console.log("Hi");
}

export const MobileMenuButton: Component<MobileMenuButtonProps> = (props) => {
  return (
    <button
      onClick={test}
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      {props.children}
    </button>
  );
};
