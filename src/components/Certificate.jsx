import React, { useState } from "react";
import {
  Modal,
  IconButton,
  Box,
  Backdrop,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CertificatesData from "../data/CertificatesData";

const Certificate = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {CertificatesData.map((cert) => (
          <Box
            key={cert.id}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              width: "300px",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
                "& .overlay": { opacity: 1 },
              },
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(cert.image)}
            />

            {/* Hover overlay */}
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                transition: "all 0.3s ease",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(cert.image)}
            >
              <FullscreenIcon sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h6">View Certificate</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            margin: "auto",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={selectedImage}
            alt="Certificate Full View"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              margin: "0 auto",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;
