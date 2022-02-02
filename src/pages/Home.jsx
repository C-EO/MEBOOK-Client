import React, { useLayoutEffect } from "react";
import LoadWrapper from "../components/LoadWrapper";
import HomeHeroSlider from "../components/HomeHeroSlider";

export default function Home() {
  useLayoutEffect(() => {
    document.title = "MEBOOK | Home";
  }, []);
  return <HomeHeroSlider></HomeHeroSlider>;
}
