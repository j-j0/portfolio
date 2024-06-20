import React from "react";
import "./Hero.scss";
import { Typography, Box, Button, Avatar, useMediaQuery } from "@mui/material";
import "../vars.css";

function Hero() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <section style={{ backgroundColor: "var(--color-bg)" }}>
      <Box
        className="hero"
        sx={{
          backgroundColor: "var(--color-bg)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          textAlign: isMobile ? "center" : "left",
          zIndex: "1",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "43px",

          padding: 2,
        }}
      >
        <Box
          className="main-content"
          display="flex"
          flexDirection="column"
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={isMobile ? "center" : "flex-start"}
          gap={isMobile ? 2 : 0}
          zIndex="1"
          mb={isMobile ? 2 : 0}
          mr={2}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(100,120,195,0.19), rgba(255,25,0,0.1))",
              zIndex: -1,
              display: isMobile ? "flex" : "none",
            }}
          />
          <Box
            className="topBlur"
            sx={{
              position: "absolute",
              width: "50vw",
              height: "60vw",
              minWidth: "200px",
              top: "-189px",
              left: "100px",
              border: "920px",
              background: "rgba(25, 55, 105, 0.3)",
              filter: "blur(100px)",
              zIndex: -1,
            }}
          />
          <Box
            className="bottomBlur"
            sx={{
              position: "absolute",
            }}
          />
          <Typography
            variant="h1"
            className="hero-title"
            fontWeight={600}
            component="div"
            sx={{
              color: "var(--color-text)",
            }}
          >
            Hi, I'm Jack
          </Typography>
          <Typography
            variant="h5"
            className="hero-subtitle"
            sx={{ color: "var(--color-text)" }}
          >
            I'm a recent graduate software engineer with 2 years of experience!
            Reach out if you'd like to learn more!
          </Typography>
          <Button
            component="a"
            href="https://www.linkedin.com/in/jack-wang-2177871a4/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              marginTop: "20px",
              height: "30px",
              width: "200px",
              color: "var(--color-text)",
              backgroundColor: "var(--color-primary)",
              "&:hover": {
                backgroundColor: "var(--color-secondary)",
              },
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            Contact me!
          </Button>
        </Box>
        <Avatar
          alt="John Doe"
          src={require("../pictures/dp.webp")}
          className="avatar"
          sx={{
            width: 300,
            height: 300,
            margin: isMobile ? "30px auto 0" : "20 auto",
          }}
        />
      </Box>
    </section>
  );
}

export default Hero;
