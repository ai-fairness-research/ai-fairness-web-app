import React from "react";
import { Alert, AlertColor, Slide, SlideProps, Snackbar } from "@mui/material";

interface CommonSnackbarComponentProps {
  open: boolean;
  handleClose: () => void;
  helperText?: string;
  severity?: AlertColor;
}

const CommonSnackbar: React.FC<CommonSnackbarComponentProps> = ({
  open,
  handleClose,
  helperText = "Please fill in all the fields !",
  severity = "error",
}) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {helperText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CommonSnackbar;

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="down" />;
};
