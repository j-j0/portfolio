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
import "../vars.css";
import { useMediaQuery } from "@mui/material";

require("react-dom");
window.React2 = require("react");
console.log("printing HERE:");
console.log(window.React1 === window.React2);

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "var(--color-bg)" }}>
          <Toolbar
            sx={{
              gap: 2,
              marginTop: "23px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 2,
            }}
          >
            <Typography
              className="title"
              variant="h4"
              fontWeight={600}
              component="div"
              sx={{ color: "var(--color-text)" }}
            >
              Portfolio
            </Typography>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box>
                <Button
                  className="about-me"
                  sx={{ color: "var(--color-text)" }}
                >
                  About me
                </Button>
                <Button
                  className="contact-me"
                  sx={{ color: "var(--color-text)" }}
                >
                  Contact me
                </Button>
                <Button
                  className="projects"
                  sx={{ color: "var(--color-text)" }}
                >
                  Projects
                </Button>
                <Button
                  className="experience"
                  sx={{ color: "var(--color-text)" }}
                >
                  Experience
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              backgroundColor: "rgb(25, 55, 109)",
            },
          }}
        >
          <List sx={{ width: 250, color: "var(--color-text)" }}>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="About me" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="Contact me" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="Experience" />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
