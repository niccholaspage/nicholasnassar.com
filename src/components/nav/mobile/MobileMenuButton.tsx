import type { Component } from "solid-js";
import { setMobileMenuOpen } from "./MobileMenuState";

interface MobileMenuButtonProps {
  children: any;
}

function toggleMenu() {
  setMobileMenuOpen((menuState) => !menuState);
}

export const MobileMenuButton: Component<MobileMenuButtonProps> = (props) => {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      {props.children}
    </button>
  );
};
