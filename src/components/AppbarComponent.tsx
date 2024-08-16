import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthData } from "../redux/tableStateGenForm/master/masterReducer";
import { RootState } from "../redux/tableStateGenForm/store";

interface Props {
  guest?: boolean;
  isAuthenticatedUser: boolean;
  onLoginModalOpen: (title: string) => void;
  onLogout?: (state: boolean) => void;
  pages: string[];
}

const ResponsiveAppBar: React.FC<Props> = (props) => {
  const [time, setTime] = React.useState<string>("");
  const [loginModalState, setLoginModalState] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  let pages: string[];

  if (props.guest === true) {
    pages = ["Home"];
  } else {
    pages = useSelector((state: RootState) =>
      state.master.AUTH_DATA.ROUTES.label
        ? state.master.AUTH_DATA.ROUTES.label[0]
        : ["Home"]
    );
  }

  const buttonTitle = props.isAuthenticatedUser ? "Logout" : "Login";

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  React.useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleString()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const userName = useSelector((state: RootState) =>
    state.master.AUTH_DATA.userData
      ? state.master.AUTH_DATA.userData.userName
      : ""
  );

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenModalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onLoginModalOpen(buttonTitle);
    if (buttonTitle === "Logout") {
      // props.onLogout(false);
    }
  };

  return (
    <AppBar sx={{ backgroundColor: "#2a5fa6" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              {APP_NAME}
            </Link>
          </Typography>
          <Box
        
            sx={{
              border: 1,
              color: "#d7d9da",
              marginTop: "1.6rem",
              marginBottom: "1.6rem",
              marginRight: "0.4rem",
              width: "0.05%",
              height: "",
            }}
          >
            <span style={{ color: "#2a5fa6" }}>!</span>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              {APP_NAME}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "#d7d9da" }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, px: "10rem", color: "#d7d9da" }}>{time}</Box>
          <Box sx={{ flexGrow: 0, color: "#d7d9da" }}>{userName}</Box>
          <Button onClick={handleOpenModalClick} color="inherit">
            {buttonTitle}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
