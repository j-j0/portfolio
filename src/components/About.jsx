import React from "react";
import about1 from "../pictures/about1.jpg";
import { Code, Storage, Palette } from "@mui/icons-material";
import { Typography, Box, Card, CardContent } from "@mui/material";

function About() {

  const skills = [
    {
      icon: <Code sx={{ fontSize: "2rem", color: "var(--color-primary)" }} />,
      title: "Frontend Development",
      description: "Building responsive and optimized web applications using modern frameworks like React, with expertise in HTML, CSS, and JavaScript."
    },
    {
      icon: <Storage sx={{ fontSize: "2rem", color: "var(--color-accent)" }} />,
      title: "Backend Development",
      description: "Developing scalable server-side applications and APIs using various technologies including Node.js, Java, and database management."
    },
    {
      icon: <Palette sx={{ fontSize: "2rem", color: "var(--color-success)" }} />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and experiences for web applications, focusing on usability and modern design principles."
    }
  ];

  return (
    <section id="about">
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: { xs: "4rem 1rem", md: "6rem 2rem" },
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: 6 }}>
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
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            I'm passionate about creating digital experiences that make a difference.
            Here's what I bring to the table.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* Profile Image */}
          <Box
            sx={{
              flex: { lg: "0 0 300px" },
              display: "flex",
              justifyContent: "center",
              order: { xs: 1, lg: 0 },
            }}
          >
            <Box
              component="img"
              src={about1}
              alt="About me"
              sx={{
                width: { xs: 250, md: 300 },
                height: { xs: 300, md: 360 },
                borderRadius: "var(--radius-xl)",
                objectFit: "cover",
                border: "3px solid var(--color-border)",
                boxShadow: "var(--shadow-lg)",
                transition: "var(--transition-normal)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "var(--shadow-xl)",
                },
              }}
            />
          </Box>

          {/* Skills Cards */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              order: { xs: 2, lg: 1 },
            }}
          >
            {skills.map((skill, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  transition: "var(--transition-normal)",
                  "&:hover": {
                    backgroundColor: "var(--color-surface-elevated)",
                    borderColor: "var(--color-border-light)",
                    transform: "translateY(-2px)",
                    boxShadow: "var(--shadow-md)",
                  },
                }}
              >
                <CardContent sx={{ padding: "2rem" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        padding: "0.75rem",
                        backgroundColor: "var(--color-surface-elevated)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "var(--color-text)",
                          fontWeight: 600,
                          marginBottom: 1,
                          fontSize: "1.125rem",
                        }}
                      >
                        {skill.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        {skill.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default About;
