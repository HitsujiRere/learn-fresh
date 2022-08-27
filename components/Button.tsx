/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

import { LoadingIcon } from "../components/LoadingIcon.tsx";

interface ButtonProps {
  isLoading?: boolean;
}

export function Button(
  props: h.JSX.HTMLAttributes<HTMLButtonElement> & ButtonProps,
) {
  const { isLoading, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      disabled={!IS_BROWSER || buttonProps.disabled}
      class={tw`px-2 py-1 border(gray-100 2) hover:bg-gray-200 inline-flex items-center ${
        isLoading && "cursor-wait"
      } `}
    >
      {buttonProps.children}
      {isLoading && <LoadingIcon />}
    </button>
  );
}
