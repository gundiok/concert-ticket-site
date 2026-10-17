import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const IntroOverlay = () => {
  const [open, setOpen] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(
    sessionStorage.getItem("introSeen") ? true : false,
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 400);
    const animationTimeout = setTimeout(() => {
      setAnimationFinished(true);
    }, 1300);
    sessionStorage.setItem("introSeen", "true");

    return () => {
      (clearTimeout(timeout), clearTimeout(animationTimeout));
    };
  }, []);

  if (animationFinished) return null;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          bgcolor: "background.default",
          zIndex: 2000,
          left: 0,
          width: "50%",
          transform: open ? "translateX(-100%)" : "none",
          transition: "transform 0.8s ease-in-out",
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          bgcolor: "background.default",
          zIndex: 2000,
          right: 0,
          width: "50%",
          transform: open ? "translateX(100%)" : "none",
          transition: "transform 0.8s ease-in-out",
        }}
      ></Box>
    </>
  );
};

export default IntroOverlay;
