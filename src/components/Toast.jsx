import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Grow } from "@mui/material";
import { connect } from "react-redux";
import _ from "lodash";

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default connect((state) => state)(function Toast({ notification }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (!_.isEmpty(notification)) {
      handleClick();
    }
  }, [notification]);

  return (
    <Snackbar
      sx={{ zIndex: "13" }}
      TransitionComponent={GrowTransition}
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={4000}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Alert
        sx={{
          width: "360px",
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: "poppins",
          textTransform: "capitalize",
        }}
        variant="filled"
        severity={notification?.status}
      >
        {notification?.msg}
      </Alert>
    </Snackbar>
  );
});
