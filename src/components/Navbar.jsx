import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import "../vars.css";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        backgroundColor: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: { xs: "0 1rem", md: "0 2rem" },
          height: "70px",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            color: "var(--color-text)",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            letterSpacing: "-0.025em",
          }}
        >
          Jack Wang
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{
              color: "var(--color-text)",
              "&:hover": {
                backgroundColor: "var(--color-surface-elevated)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: "var(--color-text-secondary)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    textTransform: "none",
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    transition: "var(--transition-normal)",
                    "&:hover": {
                      color: "var(--color-text)",
                      backgroundColor: "var(--color-surface-elevated)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              backgroundColor: "var(--color-surface)",
              borderLeft: "1px solid var(--color-border)",
              width: 280,
            },
          }}
        >
          <Box sx={{ padding: "2rem 0" }}>
            <Typography
              variant="h6"
              sx={{
                color: "var(--color-text)",
                fontWeight: 600,
                padding: "0 2rem 1rem",
                borderBottom: "1px solid var(--color-border)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </Typography>
            <List>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem 
                    button 
                    onClick={handleDrawerToggle}
                    sx={{
                      margin: "0 1rem",
                      borderRadius: "var(--radius-md)",
                      "&:hover": {
                        backgroundColor: "var(--color-surface-elevated)",
                      },
                    }}
                  >
                    <ListItemText 
                      primary={item.label}
                      sx={{
                        "& .MuiListItemText-primary": {
                          color: "var(--color-text-secondary)",
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
