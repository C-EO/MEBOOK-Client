import React, { useEffect } from "react";

export default function Account() {
  useEffect(() => {
    document.title = `MEBOOK | Account`;
  }, []);

  return <div>Account</div>;
}
