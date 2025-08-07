import React from "react";
import { Typography, Box, IconButton, Button, useMediaQuery } from "@mui/material";
import { GitHub, LinkedIn, Email, ArrowUpward } from "@mui/icons-material";
import "../vars.css";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact">
      <Box
        sx={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          marginTop: "4rem",
        }}
      >
        {/* Main Contact Section */}
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { xs: "4rem 1rem", md: "6rem 2rem" },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: 2,
                letterSpacing: "-0.025em",
              }}
            >
              Let's Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "var(--color-text-secondary)",
                maxWidth: "600px",
                margin: "0 auto 3rem",
                lineHeight: 1.6,
              }}
            >
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss a project or just say hello!
            </Typography>

            <Button
              component="a"
              href="mailto:jack.wang@example.com"
              sx={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "var(--radius-lg)",
                fontWeight: 600,
                fontSize: "1.1rem",
                textTransform: "none",
                marginBottom: 4,
                transition: "var(--transition-normal)",
                "&:hover": {
                  backgroundColor: "var(--color-primary-hover)",
                  transform: "translateY(-2px)",
                  boxShadow: "var(--shadow-lg)",
                },
              }}
            >
              Get In Touch
            </Button>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginBottom: 4,
            }}
          >
            {[
              {
                icon: <GitHub />,
                href: "https://github.com/j-j0",
                label: "GitHub",
                color: "var(--color-text-secondary)",
              },
              {
                icon: <LinkedIn />,
                href: "https://www.linkedin.com/in/jack-wang-2177871a4/",
                label: "LinkedIn",
                color: "#0077B5",
              },
              {
                icon: <Email />,
                href: "mailto:jack.wang@example.com",
                label: "Email",
                color: "var(--color-accent)",
              },
            ].map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-border)",
                  color: social.color,
                  transition: "var(--transition-normal)",
                  "&:hover": {
                    backgroundColor: social.color,
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "var(--shadow-md)",
                  },
                }}
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            borderTop: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg)",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: { xs: "2rem 1rem", md: "2rem 2rem" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "var(--color-text-muted)",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              © 2025 Jack Wang. Built with React and Material-UI.
            </Typography>

            <Button
              onClick={scrollToTop}
              startIcon={<ArrowUpward />}
              sx={{
                color: "var(--color-text-secondary)",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": {
                  color: "var(--color-text)",
                  backgroundColor: "var(--color-surface-elevated)",
                },
              }}
            >
              Back to top
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
