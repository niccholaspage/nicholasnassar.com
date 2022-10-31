import type { Component } from "solid-js";
import { isMobileMenuOpen } from "./MobileMenuState";

interface MobileMenuProps {
  children: any;
}

export const MobileMenu: Component<MobileMenuProps> = (props) => {
  const classes = () => (isMobileMenuOpen() ? "sm:hidden" : "hidden");
  return (
    <div class={classes()} id="mobile-menu">
      {props.children}
    </div>
  );
};
