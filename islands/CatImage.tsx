/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { get } from "apis/cat.ts";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function CatImage() {
  const [isLoading, setIsLoading] = useState(false);

  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg",
  );

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const cat = await get();
      setCatImageUrl(cat.url);
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        onClick={handleClick}
      >
        きょうのにゃんこ🐱
      </Button>
      <div class={tw`mt-8`}>
        <img src={catImageUrl} class={tw`w-full`} />
      </div>
    </div>
  );
}
