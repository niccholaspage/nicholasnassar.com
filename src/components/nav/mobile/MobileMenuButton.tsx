import type { Component } from "solid-js";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { setMobileMenuOpen } from "./MobileMenuState";

function toggleMenu() {
  setMobileMenuOpen((menuState) => !menuState);
}

export const MobileMenuButton: Component = () => {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2 text-violet-400 hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <MobileMenuIcon />
    </button>
  );
};
