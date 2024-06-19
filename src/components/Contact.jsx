import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../vars.css";

const Contact = () => {
  return (
    <section id="contact">
      <Box
        className="contact"
        sx={{
          backgroundColor: "var(--color-secondary)",
          padding: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "120px",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          className="contact-title"
          fontWeight={400}
          component="div"
          sx={{
            color: "var(--color-text)",
          }}
        >
          Contact Me
        </Typography>
        <Box
          className="social-media"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          gap={1}
        >
          <IconButton
            component="a"
            href="https://github.com/j-j0"
            target="_blank"
            sx={{ color: "var(--color-text)" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/jack-wang-2177871a4/"
            target="_blank"
            sx={{ color: "var(--color-text)" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:your-email@example.com"
            sx={{ color: "var(--color-text)" }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
