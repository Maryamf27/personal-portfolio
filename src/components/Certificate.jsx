import React, { useState } from "react";
import {
  Modal,
  IconButton,
  Box,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ image }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
          width: "300px",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
            "& .overlay": { opacity: 1 },
          },
        }}
        onClick={handleOpen}
      >
        <img
          src={image}
          alt="Certificate"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            backgroundColor: "#0b1220",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <FullscreenIcon sx={{ color: "white", fontSize: 40 }} />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "80%", lg: "70%" },
            maxWidth: "800px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 1,
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey.500",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={image}
            alt="Certificate Full"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Certificate;
