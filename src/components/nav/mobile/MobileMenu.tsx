import { type Component, onCleanup, onMount } from "solid-js";
import { isMobileMenuOpen, setMobileMenuOpen } from "./MobileMenuState";

interface MobileMenuProps {
  children: any;
}

export const MobileMenu: Component<MobileMenuProps> = (props) => {
  let menuDiv: HTMLDivElement | undefined;

  // We need to close the menu when the user
  // clicks on one of the items in the menu.
  const handleItemClick = () => {
    setMobileMenuOpen(false);
  };

  onMount(() => {
    menuDiv?.addEventListener("click", handleItemClick);
  });

  onCleanup(() => {
    menuDiv?.removeEventListener("click", handleItemClick);
  });

  const classes = () => (isMobileMenuOpen() ? "sm:hidden" : "hidden");
  return (
    <div ref={menuDiv} class={classes()} id="mobile-menu">
      {props.children}
    </div>
  );
};
