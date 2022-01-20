import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "MEBOOK | Home";
  }, []);

  return <div></div>;
}
