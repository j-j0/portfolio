import React from "react";
import "./Hero.scss";
import { Typography, Box, Button, Avatar, useMediaQuery, Chip } from "@mui/material";
import { ArrowOutward, LocationOn } from "@mui/icons-material";
import "../vars.css";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="hero">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          paddingTop: "70px", // Account for fixed navbar
        }}
      >
        {/* Background gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
            `,
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: { xs: "2rem 1rem", md: "4rem 2rem" },
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Chip
                icon={<LocationOn sx={{ fontSize: "1rem" }} />}
                label="Available for work"
                variant="outlined"
                sx={{
                  color: "var(--color-success)",
                  borderColor: "var(--color-success)",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  marginBottom: 3,
                }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 800,
                color: "var(--color-text)",
                lineHeight: 1.1,
                marginBottom: 2,
                letterSpacing: "-0.02em",
              }}
            >
              Hi, I'm{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Jack
              </Box>
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 600,
                color: "var(--color-text-secondary)",
                marginBottom: 3,
                lineHeight: 1.4,
              }}
            >
              Test Engineer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "var(--color-text-muted)",
                marginBottom: 4,
                lineHeight: 1.6,
                maxWidth: "500px",
                margin: { xs: "0 auto 2rem", md: "0 0 2rem 0" },
              }}
            >
              Passionate Engineer.
              Passionate about creating exceptional user experiences with clean, efficient code.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Button
                component="a"
                href="https://www.linkedin.com/in/jack-wang-2177871a4/"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowOutward />}
                sx={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "var(--radius-lg)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: "var(--transition-normal)",
                  "&:hover": {
                    backgroundColor: "var(--color-primary-hover)",
                    transform: "translateY(-2px)",
                    boxShadow: "var(--shadow-lg)",
                  },
                }}
              >
                Get in touch
              </Button>

              <Button
                component="a"
                href="#projects"
                sx={{
                  color: "var(--color-text-secondary)",
                  padding: "12px 24px",
                  borderRadius: "var(--radius-lg)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  border: "1px solid var(--color-border)",
                  transition: "var(--transition-normal)",
                  "&:hover": {
                    color: "var(--color-text)",
                    borderColor: "var(--color-border-light)",
                    backgroundColor: "var(--color-surface-elevated)",
                  },
                }}
              >
                View my work
              </Button>
            </Box>
          </Box>

          {/* Avatar */}
          <Box
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Jack Wang"
              src={require("../pictures/dp.webp")}
              className="avatar"
              sx={{
                width: { xs: 200, sm: 250, md: 300 },
                height: { xs: 200, sm: 250, md: 300 },
                border: "4px solid var(--color-border)",
                boxShadow: "var(--shadow-xl)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Hero;
