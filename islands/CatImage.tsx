/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import { getCat } from "apis/cat.ts";
import { likeCat } from "apis/likeCat.ts";
import { getLikedCats } from "apis/likedCats.ts";
import { Button } from "../components/Button.tsx";
import { LoadingIcon } from "../components/LoadingIcon.tsx";

export default function CatImage() {
  const [isLoading, setIsLoading] = useState(false);

  const [catImageUrl, setCatImageUrl] = useState("");
  const [likedCatsUrl, setLikedCatsUrl] = useState<string[]>([]);

  const updateCatImage = async () => {
    setIsLoading(true);
    const cat = await getCat();
    setCatImageUrl(cat.url);
    setIsLoading(false);
  };

  const updateLikedCatGallery = async () => {
    setLikedCatsUrl([]);
    const catsUrl = await getLikedCats();
    setLikedCatsUrl(catsUrl);
  };

  const likeCatImage = async () => {
    setIsLoading(true);
    await likeCat(catImageUrl);
    setLikedCatsUrl([...likedCatsUrl, catImageUrl]);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await updateCatImage();
      await updateLikedCatGallery();
      setIsLoading(false);
    })();
  }, []);

  return (
    <div class={tw`space-y-8`}>
      <div class={tw`space-y-4`}>
        <div class={tw`space-x-4`}>
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            onClick={updateCatImage}
          >
            きょうのにゃんこ🐱
          </Button>
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            onClick={likeCatImage}
          >
            好き！
          </Button>
        </div>
        {catImageUrl === ""
          ? <LoadingIcon />
          : <img src={catImageUrl} class={tw`w-full`} />}
      </div>

      <div class={tw`space-y-4`}>
        <p>お気に入りにゃんこ🐱</p>
        {likedCatsUrl.length === 0
          ? <LoadingIcon />
          : (
            <div class={tw`grid grid-cols-3 gap-4`}>
              {likedCatsUrl.map((url) => (
                <img
                  src={url}
                  class={tw`w-full`}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
