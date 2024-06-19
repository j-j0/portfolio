import React from "react";
import { Typography, Box, Avatar, useMediaQuery } from "@mui/material";
import "../vars.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Experience = () => {
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
          Experience
        </Typography>
        <Box
          className="experience-main"
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? 5 : 3}
        >
          <Box
            display="flex"
            className="exp-box"
            flexGrow="1"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width={isMobile ? "100%" : "50%"}
            gap={isMobile ? "25px" : "40px"}
            paddingRight={isMobile ? 0 : 1}
            sx={{
              borderRadius: "10px",
              borderStyle: "solid",
            }}
          >
            <Typography
              variant="h4"
              className="Front-end-title"
              fontWeight={300}
              component="div"
              sx={{
                color: "lightgrey",
              }}
            >
              Frontend development
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              flexWrap="wrap"
            >
              {[
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Material-UI",
                "SASS",
              ].map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  sx={{ width: isMobile ? "100%" : "45%" }}
                  mb={2}
                >
                  <CheckCircleOutlineIcon />
                  <Typography
                    variant="h6"
                    className="hero-subtitle"
                    sx={{ color: "var(--color-text)", padding: "10px" }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            display="flex"
            className="exp-box"
            flexGrow="1"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={isMobile ? "25px" : "40px"}
            width={isMobile ? "100%" : "50%"}
            paddingRight={isMobile ? 0 : 1}
            sx={{
              borderStyle: "solid",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h4"
              className="Front-end-title"
              fontWeight={300}
              component="div"
              sx={{
                color: "lightgrey",
              }}
            >
              Backend development
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              flexWrap="wrap"
            >
              {["Java", "SQL", "Express Js", "Node Js", "Rust", "MongoDb"].map(
                (item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    sx={{ width: isMobile ? "100%" : "45%" }}
                    mb={2}
                  >
                    <CheckCircleOutlineIcon />
                    <Typography
                      variant="h6"
                      className="hero-subtitle"
                      sx={{ color: "var(--color-text)", padding: "10px" }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Experience;
