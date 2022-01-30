import React, { useEffect } from "react";
import LoadWrapper from "../components/LoadWrapper";
import HomeHeroSlider from "../components/HomeHeroSlider";

export default function Home() {
  useEffect(() => {
    document.title = "MEBOOK | Home";
  }, []);
  return <HomeHeroSlider></HomeHeroSlider>;
}
