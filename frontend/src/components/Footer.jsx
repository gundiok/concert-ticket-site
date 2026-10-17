import { Box, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import band, { socials } from "../data/band";

const ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: YouTube,
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 2,
        mt: 10,
        borderTop: 2,
        borderColor: "divider",
      }}
    >
      <Box>
        {socials.map((platform) => {
          const Icon = ICONS[platform.id];
          return (
            <IconButton
              key={platform.id}
              component="a"
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${band.name} on ${platform.label}`}
              size="large"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "text.primary",
                  filter: "drop-shadow(0 0 6px rgba(215,38,43,0.8))",
                },
                transition: "all 0.2s",
              }}
            >
              <Icon fontSize="large" />
            </IconButton>
          );
        })}
      </Box>

      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} {band.name}
      </Typography>
    </Box>
  );
};

export default Footer;
