import React from "react";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const projects = [
    {
      title: "Project 1",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/project1",
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/project2",
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/project3",
    },
  ];

  return (
    <section>
      <Box
        className="Projects"
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
          Projects
        </Typography>
        <Box
          className="projects-main"
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? 5 : 3}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              display="flex"
              className="project-box"
              flexGrow="1"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              width={isMobile ? "100%" : "30%"}
              gap={2}
              padding={2}
              sx={{
                borderRadius: "10px",
                borderStyle: "solid",
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "250px",
                  borderRadius: "10px",
                }}
              />
              <Typography
                variant="h6"
                className="project-title"
                fontWeight={500}
                component="div"
                sx={{
                  color: "var(--color-text)",
                  marginTop: 2,
                }}
              >
                {project.title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GitHubIcon />}
                href={project.github}
                target="_blank"
                sx={{
                  marginTop: 2,
                }}
              >
                View on GitHub
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
