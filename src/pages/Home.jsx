import React, { useEffect } from "react";
import LoadWrapper from "../components/LoadWrapper";

export default function Home() {
  useEffect(() => {
    document.title = "MEBOOK | Home";
  }, []);
  return <LoadWrapper></LoadWrapper>;
}
