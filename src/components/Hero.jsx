import React from "react";
import "./Hero.scss";
import { Typography, Box, Button, Avatar, useMediaQuery } from "@mui/material";
import "../vars.css";
import zIndex from "@mui/material/styles/zIndex";

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
        >
          <Typography
            variant="h1"
            className="hero-title"
            fontWeight={200}
            component="div"
            sx={{ color: "var(--color-text)" }}
          >
            Hi, I'm John Doe
          </Typography>
          <Typography
            variant="h5"
            className="hero-subtitle"
            sx={{ color: "var(--color-text)" }}
          >
            I'm a graduate software engineer with 2 years of experience! Reach
            out if you'd like to earn more!
          </Typography>
          <Button
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
            }}
          >
            Contact me!
          </Button>
        </Box>
        <Avatar
          alt="John Doe"
          src={require("../pictures/dp.webp")}
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
