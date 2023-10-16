import React, { useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom"; // Import React Router
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;
const navItems = ["DASHBOARD", "CREATE ADS"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, color: "black", fontWeight: "bolder" }}
      >
        APP LOGO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
                {" "}
                {/* Use Link for routing */}
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ bgcolor: "#FAFAFA" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ bgcolor: "#FFFFFF" }}>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Stack direction="row" alignItems="center">
                <IconButton
                  color="black"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "black",
                    fontWeight: "bolder",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  APP LOGO
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dashboard
                  </Link>
                </Button>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  <Link
                    to="/create-ads"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Create Ads
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box sx={{ mt: 11 }}></Box>
      </Box>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
