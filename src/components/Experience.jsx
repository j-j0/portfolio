import React from "react";
import { Typography, Box, useMediaQuery, Avatar } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkIcon from "@mui/icons-material/Work";
import "../vars.css";

const Experience = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <section id="experience">
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
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          justifyContent="flex-start"
          mt={2}
          mb={4}
          sx={{
            padding: 2,
            borderRadius: "15px",
            background: "#19376d",
            background:
              "linear-gradient(90deg, #19376d 0%, rgba(25, 55, 109, 0) 100%)",
            borderRadius: "10px",
          }}
        >
          <Avatar
            alt="Quick-site Guru"
            src={require("../pictures/quicksite_guru_logo.jpeg")}
            className="quicksite"
            sx={{
              width: isMobile ? 150 : 100,
              height: isMobile ? 150 : 100,
              margin: isMobile ? "30px auto 0" : "30",
              marginRight: "30px",
            }}
          />
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "var(--color-text)",
                fontWeight: 500,
              }}
            >
              Web Development Intern at QuickSite Guru
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                color: "grey",
                fontWeight: 300,
                marginBottom: 1,
              }}
            >
              May 2024 to Present
            </Typography>
            <ul>
              <li>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  Developed web pages using React, JavaScript, HTML, and CSS.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  Learned from a mentor to improve coding skills and best
                  practices.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "var(--color-text)",
                  }}
                >
                  Assisted in hosting and deploying websites.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          className="experience-main"
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
              fontWeight={500}
              component="div"
              sx={{
                color: "lightgrey",
                paddingLeft: isMobile ? 4 : 0,
                pt: isMobile ? 3 : 2,
              }}
            >
              Frontend development
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              pl={isMobile ? 2 : 0}
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
              fontWeight={500}
              component="div"
              sx={{
                color: "lightgrey",
                paddingLeft: isMobile ? 5 : 0,
                pt: isMobile ? 3 : 2,
              }}
            >
              Backend development
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              flexWrap="wrap"
              pl={isMobile ? 2 : 0}
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
