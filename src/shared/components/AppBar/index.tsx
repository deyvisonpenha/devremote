import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  LogoComponent: () => JSX.Element;
  ListMenu: JSX.Element;
}

const drawerWidth = 240;
const navItems = ["Products", "Prices", "Contact"];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#292929",
    },
  },
});

export function ResponsiveAppBar(props: Props) {
  const { window, LogoComponent, ListMenu } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <LogoComponent />
      <Divider />
      {navItems.map((item) => (
        <>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          {/* <Box sx={{ mx: 2 }} key={item}>
          <Link href={`/${item.toLowerCase()}`}>{item}</Link>
        </Box> */}
        </>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav" color="primary" enableColorOnDark>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <LogoComponent />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <Box sx={{ mx: 2 }} key={item}>
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
    </Box>
  );
}
