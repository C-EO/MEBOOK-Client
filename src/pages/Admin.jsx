import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `MEBOOK | Admin`;
    navigate("/admin/dashboard");
  }, [navigate]);

  return <></>;
}
