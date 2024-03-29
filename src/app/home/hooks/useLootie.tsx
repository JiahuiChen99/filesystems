import Lottie from "lottie-web";
import storageAnime from "../storageAnime.json";
import React from "react";

export const useLootie = () => {
  const attachAnime = React.useCallback((canvasNode: HTMLDivElement) => {
    Lottie.loadAnimation({
      container: canvasNode,
      animationData: storageAnime,
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "storage animation",
      rendererSettings: {
        
      }
    });
  }, []);

  return { attachAnime };
};
