import type { ParentComponent } from "solid-js";

interface RoundedButtonProps {
  size: Size;
}

type Size = "sm" | "md" | "lg" | "xl" | "2xl";

type SizeClassMapping = {
  [key in Size]: string;
};

const SizeClasses: SizeClassMapping = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm leading-4",
  lg: "px-4 py-2 text-sm",
  xl: "px-5 py-2 text-base",
  "2xl": "px-6 py-3 text-base",
};

// export const RoundedButton: ParentComponent<RoundedButtonProps> = (props) => {
//   return (
//     <button
//       type="button"
//       class={`${
//         SizeClasses[props.size]
//       } inline-flex gap-1 items-center rounded-full border border-transparent bg-violet-600 font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2`}
//     >
//       {props.children}
//     </button>
//   );
// };

export const RoundedButtonDiv: ParentComponent<RoundedButtonProps> = (props) => {
  return (
    <div
      class={`${
        SizeClasses[props.size]
      } cursor-pointer inline-flex gap-1 items-center rounded-full border border-transparent bg-violet-600 font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2`}
    >
      {props.children}
    </div>
  );
};
