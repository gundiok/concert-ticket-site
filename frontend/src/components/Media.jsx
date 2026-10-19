import { videos, images } from "../data/band";
import { Box, Container, Grid, Typography } from "@mui/material";

const Media = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{m: 5, mx:"auto"}}>
        Videos
      </Typography>
      <Grid container spacing={8} sx={{ mb: 10 }}>
        {videos.map((video) => (
          <Grid size={{ xs: 12, md: 6 }} key={video.id}>
            <Box component="figure" sx={{ m: 0 }}>
              <Box
                component="iframe"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allowFullScreen
                sx={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "16/9",
                  border: 0,
                  borderRadius: 3,
                }}
              ></Box>
              <Typography
                variant="h4"
                component="figcaption"
                sx={{ mt: 1, color: "primary.main" }}
              >
                {video.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" component="h2" gutterBottom>
        Photos
      </Typography>

      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid size={{ xs: 12, md: 6 }} key={image.id}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 3,
                aspectRatio: "4/3",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Media;
