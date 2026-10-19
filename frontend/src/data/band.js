import bioImage from "../assets/bioImage.jpeg";
import logoSmall from "../assets/katalyst-logo-white-400.webp";
import logoLarge from "../assets/katalyst-logo-white-1600.webp";
import heroImage from "../assets/heroImage.jpg";
import media1Image from "../assets/media/media1.jpg";
import media2Image from "../assets/media/media2.jpg";
import media3Image from "../assets/media/media3.jpg";
import media4Image from "../assets/media/media4.jpg";

const band = {
  name: "Kätälyst",
  tagline: "From Bangladesh to Finland",
  bio: "KATALYST brings their sound from Bangladesh to Finland this winter. Catch them live in Helsinki, Tampere and Turku. Grab your tickets before they're gone.",
  logo: logoLarge,
  logoSmall: logoSmall,
  heroImage: heroImage,
  bioImage: bioImage,
  bioText:
    "Formed in 2017, Kätälyst is a vibrant fusion of diverse musical tastes. We blend rock and pop with a unique twist, drawing on rich musical traditions. Our sound reflects something fresh and exciting, resonating with fans across cultures and genres.",
};

// TODO: replace placeholder URLs with KATALYST's real profiles
export const socials = [
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/" },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100063530833841",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@katalyst2156/",
  },
];
export const videos = [
  {
    id: "Sr3rzZYPHmQ",
    title: "Live in Espoo",
    detail: "Valentine's Day Concert, 17.2.2024",
  },
  {
    id: "KVGyMBZLs8s",
    title: "Hymn of Hope",
    detail: "feat. Elias, Mea and Samuli",
  },
];

// TODO: replace with original photos from the band, and describe each photo in its alt text
export const images = [
  { id: 1, src: media1Image, alt: "Kätälyst live photo 1" },
  { id: 2, src: media2Image, alt: "Kätälyst live photo 2" },
  { id: 3, src: media3Image, alt: "Kätälyst live photo 3" },
  { id: 4, src: media4Image, alt: "Kätälyst live photo 4" },
];

export default band;
