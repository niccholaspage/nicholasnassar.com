import { ClientOptions, loadSandpackClient, SandboxSetup } from "@codesandbox/sandpack-client";
import { Component, onCleanup, onMount } from "solid-js";

export const Sandpack: Component = () => {
  let iframeRef: HTMLIFrameElement;
  onMount(async () => {
    const content: SandboxSetup = {
      files: {
        "/package.json": {
          code: JSON.stringify({
            main: "index.js",
            dependencies: {},
          }),
        },
        "/index.js": {
          code: `console.log("This is an example...");`,
        },
      },
    };

    const options: ClientOptions = {};

    const client = await loadSandpackClient(iframeRef, content, options);

    onCleanup(() => {
      client.destroy();
    });
  });
  return (
    <div>
      <p>I'm a sandpack!</p>
      <iframe ref={iframeRef!} title="Playground Preview" />
    </div>
  );
};
