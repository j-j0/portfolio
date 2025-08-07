import React from "react";
import { Typography, Box, Avatar, Card, CardContent, Chip } from "@mui/material";
import { Work, CheckCircle } from "@mui/icons-material";
import "../vars.css";

const Experience = () => {

  const frontendSkills = [
    { name: "HTML", logo: require("../pictures/html.png") },
    { name: "CSS", logo: require("../pictures/css.png") },
    { name: "JavaScript", logo: require("../pictures/javascript.svg") },
    { name: "React", logo: require("../pictures/react.png") },
    { name: "Material-UI", logo: require("../pictures/material-ui.svg") },
    { name: "SASS", logo: require("../pictures/sass.svg") }
  ];

  const backendSkills = [
    { name: "Java", logo: require("../pictures/java.png") },
    { name: "SQL", logo: require("../pictures/sql.svg") },
    { name: "Express.js", logo: require("../pictures/express.svg") },
    { name: "Node.js", logo: require("../pictures/node.png") },
    { name: "Rust", logo: require("../pictures/rust.png") },
    { name: "MongoDB", logo: require("../pictures/mongodb.png") }
  ];

  return (
    <section id="experience">
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
            Experience & Skills
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
            My professional journey and technical expertise in modern web development.
          </Typography>
        </Box>

        {/* Work Experience */}
        <Card
          sx={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            marginBottom: 6,
            overflow: "visible",
          }}
        >
          <CardContent sx={{ padding: { xs: "2rem", md: "3rem" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-start" },
                gap: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Avatar
                src={require("../pictures/quicksite_guru_logo.jpeg")}
                alt="QuickSite Guru"
                sx={{
                  width: { xs: 80, md: 100 },
                  height: { xs: 80, md: 100 },
                  border: "3px solid var(--color-border)",
                  boxShadow: "var(--shadow-md)",
                }}
              />

              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 1,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Work sx={{ color: "var(--color-primary)", fontSize: "1.25rem" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "var(--color-text)",
                      fontWeight: 600,
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    Web Development Intern
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--color-primary)",
                    fontWeight: 500,
                    marginBottom: 1,
                  }}
                >
                  QuickSite Guru
                </Typography>

                <Chip
                  label="May 2024 - Present"
                  variant="outlined"
                  sx={{
                    color: "var(--color-text-secondary)",
                    borderColor: "var(--color-border-light)",
                    marginBottom: 3,
                  }}
                />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {[
                    "Developed responsive web applications using React, JavaScript, HTML, and CSS",
                    "Collaborated with senior developers to implement best practices and coding standards",
                    "Assisted in website deployment and hosting processes"
                  ].map((achievement, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          color: "var(--color-success)",
                          fontSize: "1.25rem",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {achievement}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* Frontend Skills */}
          <Card
            sx={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              transition: "var(--transition-normal)",
              "&:hover": {
                borderColor: "var(--color-primary)",
                boxShadow: "var(--shadow-md)",
              },
            }}
          >
            <CardContent sx={{ padding: "2rem" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "var(--color-text)",
                  fontWeight: 600,
                  marginBottom: 3,
                  textAlign: "center",
                }}
              >
                Frontend Development
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                }}
              >
                {frontendSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    icon={skill.logo ? (
                      <Box
                        component="img"
                        src={skill.logo}
                        alt={skill.name}
                        sx={{
                          width: 20,
                          height: 20,
                          objectFit: "contain",
                        }}
                      />
                    ) : undefined}
                    label={skill.name}
                    sx={{
                      backgroundColor: "var(--color-surface-elevated)",
                      color: "var(--color-text)",
                      border: "1px solid var(--color-border-light)",
                      padding: skill.logo ? "0.5rem 1rem" : "0.5rem 1rem",
                      "& .MuiChip-icon": {
                        marginLeft: "8px",
                        marginRight: "-4px",
                      },
                      "&:hover": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "var(--shadow-sm)",
                      },
                      transition: "var(--transition-normal)",
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card
            sx={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              transition: "var(--transition-normal)",
              "&:hover": {
                borderColor: "var(--color-accent)",
                boxShadow: "var(--shadow-md)",
              },
            }}
          >
            <CardContent sx={{ padding: "2rem" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "var(--color-text)",
                  fontWeight: 600,
                  marginBottom: 3,
                  textAlign: "center",
                }}
              >
                Backend Development
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                }}
              >
                {backendSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    icon={skill.logo ? (
                      <Box
                        component="img"
                        src={skill.logo}
                        alt={skill.name}
                        sx={{
                          width: 20,
                          height: 20,
                          objectFit: "contain",
                        }}
                      />
                    ) : undefined}
                    label={skill.name}
                    sx={{
                      backgroundColor: "var(--color-surface-elevated)",
                      color: "var(--color-text)",
                      border: "1px solid var(--color-border-light)",
                      padding: skill.logo ? "0.5rem 1rem" : "0.5rem 1rem",
                      "& .MuiChip-icon": {
                        marginLeft: "8px",
                        marginRight: "-4px",
                      },
                      "&:hover": {
                        backgroundColor: "var(--color-accent)",
                        color: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "var(--shadow-sm)",
                      },
                      transition: "var(--transition-normal)",
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </section>
  );
};

export default Experience;
