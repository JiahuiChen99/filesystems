"use client";
import React from "react";
import { useLootie } from "../hooks/useLootie";

export function StorageLottie() {
  const { attachAnime } = useLootie();

  return <div className="w-auto h-auto" ref={attachAnime} />;
}
