import { createSignal } from "solid-js";

const [isMobileMenuOpen, setMobileMenuOpen] = createSignal(false);

export { isMobileMenuOpen, setMobileMenuOpen };
