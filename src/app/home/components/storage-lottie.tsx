"use client";
import Lottie from "lottie-web";
import React from "react";
import storageAnime from "../storageAnime.json";

export function StorageLottie() {
  const attachAnime = React.useCallback((canvasNode: HTMLDivElement) => {
    Lottie.loadAnimation({
      container: canvasNode,
      animationData: storageAnime,
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "storage animation",
    });
  }, []);

  return <div ref={attachAnime} />;
}
