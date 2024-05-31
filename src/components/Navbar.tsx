import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

const pages = [
  "general",
  "business",
  "entertainment",
  "health",
  "sports",
  "science",
  "technology",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "var(--primary)" }} position="fixed">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "center" },
            }}
            disableGutters
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AdbIcon
                sx={{
                  mr: { xs: 1, sm: 1.5, md: 2.5 },
                  scale: { xs: "1", sm: "1.5", md: "2.5" },
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  // mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                POGONEWS
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                // justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                // aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Button
                      href={page}
                      onClick={handleCloseNavMenu}
                      sx={{ color: "text.primary" }}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            bgcolor: "text.primary",
            paddingY: "8px",
          }}
        >
          {pages.map((page) => (
            <Button
              href={page}
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </AppBar>
      {/* <AppBar position="static" sx={{ bgcolor: "text.primary" }}>
       
      </AppBar> */}
    </>
  );
}
export default ResponsiveAppBar;
