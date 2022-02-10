import React, { useState, useMemo, useEffect } from "react";
import { Select } from "@mui/material";
import countryList from "react-select-country-list";
export default function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  //   const changeHandler = (value) => {
  //     setValue(value);
  //   };
  //   useEffect(() => {
  //     console.log(options);
  //   }, []);

  return <Select />;
}
