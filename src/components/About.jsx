import React from "react";
import about1 from "../pictures/about1.jpg";
import MouseIcon from "@mui/icons-material/Mouse";
import StorageIcon from "@mui/icons-material/Storage";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import {
  Typography,
  Box,
  Button,
  Avatar,
  useMediaQuery,
  rgbToHex,
} from "@mui/material";

function About() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <section>
      <Box
        className="about"
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "43px",
          padding: 2,
          backgroundColor: "black",
          borderRadius: "34px",
        }}
      >
        <Typography
          variant="h3"
          className="hero-title"
          fontWeight={400}
          component="div"
          sx={{
            color: "var(--color-text)",
          }}
        >
          About
        </Typography>
        <Box
          className="about-main"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={isMobile ? "column" : "row"}
        >
          {/* AVATAR */}
          <Box
            component="img"
            alt="about-me-pic"
            src={about1}
            flexGrow="1"
            sx={{
              width: "200px",
              height: "300px",
              borderRadius: "400px",
              mt: isMobile ? 2 : 0,
              mb: isMobile ? 0 : 0,
              padding: 5,
              paddingRight: isMobile ? 4 : 2,
            }}
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            flexGrow="1"
            gap={isMobile ? 2 : 4}
            mb={isMobile ? 2 : 1}
          >
            <Box display="flex" flexDirection="row" alignItems="center" mr={1}>
              <MouseIcon
                fontSize="large"
                sx={{ color: "rgba(16, 167, 240)" }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h4"
                  className="test"
                  fontWeight={500}
                  component="div"
                  borderWidth="5px"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  Frontend developer
                </Typography>
                <Typography
                  variant="h5"
                  className="test"
                  fontWeight={300}
                  component="div"
                  borderWidth="5px"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  I'm a front end dev with experience in building responsive and
                  optimised sites using HTML/CSS, Javascript and React
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" sx={{}}>
              <StorageIcon
                fontSize="large"
                mr={1}
                sx={{ color: "rgba(16, 167, 240)" }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h4"
                  className="test"
                  fontWeight={500}
                  component="div"
                  borderWidth="5px"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  Backend developer
                </Typography>
                <Typography
                  variant="h5"
                  className="test"
                  fontWeight={300}
                  component="div"
                  borderWidth="5px"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  I have experience in building full scale optimised back end
                  systems using a variety of tools and programming languages
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              sx={{}}
              mr={1}
            >
              <ColorLensIcon
                fontSize="large"
                sx={{ color: "rgba(16, 167, 240)" }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h4"
                  className="test"
                  fontWeight={500}
                  component="div"
                  borderWidth="5px"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  UI designer
                </Typography>
                <Typography
                  variant="h5"
                  className="test"
                  fontWeight={300}
                  component="div"
                  borderWidth="5px"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  I have experience with designing multiple web-based landing
                  pages as well as app based UI
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
export default About;
