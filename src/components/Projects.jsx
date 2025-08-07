import React from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { GitHub, Launch, Code } from "@mui/icons-material";

const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/j-j0",
      demo: "https://demo-link.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/j-j0",
      demo: "https://demo-link.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["JavaScript", "API Integration", "CSS"],
      github: "https://github.com/j-j0",
      demo: "https://demo-link.com",
      featured: false,
    },
  ];

  return (
    <section id="projects">
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
            Featured Projects
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
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr", 
              md: "repeat(auto-fit, minmax(350px, 1fr))" 
            },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                transition: "var(--transition-normal)",
                height: "fit-content",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "var(--shadow-xl)",
                  borderColor: "var(--color-border-light)",
                },
              }}
            >
              {project.featured && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 1,
                  }}
                >
                  <Chip
                    label="Featured"
                    size="small"
                    sx={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                </Box>
              )}

              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: "cover",
                  transition: "var(--transition-normal)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              <CardContent sx={{ padding: "2rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <Code sx={{ color: "var(--color-primary)", fontSize: "1.25rem" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "var(--color-text)",
                      fontWeight: 600,
                      fontSize: "1.25rem",
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: 3,
                  }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginBottom: 3,
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "var(--color-surface-elevated)",
                        color: "var(--color-text-secondary)",
                        border: "1px solid var(--color-border-light)",
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Button
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHub />}
                    sx={{
                      flex: 1,
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": {
                        color: "var(--color-text)",
                        borderColor: "var(--color-border-light)",
                        backgroundColor: "var(--color-surface-elevated)",
                      },
                    }}
                  >
                    Code
                  </Button>

                  <Button
                    component="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<Launch />}
                    sx={{
                      flex: 1,
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      borderRadius: "var(--radius-md)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "var(--color-primary-hover)",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", marginTop: 6 }}>
          <Button
            component="a"
            href="https://github.com/j-j0"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHub />}
            sx={{
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "12px 24px",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "1rem",
              "&:hover": {
                color: "var(--color-text)",
                borderColor: "var(--color-border-light)",
                backgroundColor: "var(--color-surface-elevated)",
              },
            }}
          >
            View All Projects on GitHub
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
