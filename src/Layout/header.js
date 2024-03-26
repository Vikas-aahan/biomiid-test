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
import logo from "../Images/logo_white.png";
import Style from "../Css/common.module.css";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { HashLink } from "react-router-hash-link";
import TopNav from "./top-nav";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import en from "../lang/en";
import rf from "../lang/rf";
import Popover from "@mui/material/Popover";
import { Link } from "react-router-dom";
import { CssBaseline, Select } from "@mui/material";

function ResponsiveAppBar({page}) {
  console.log("page==>",page);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [lang, setLang] = React.useState("");

  React.useEffect(() => {
    const lan = localStorage.getItem("language");
    setLang(lan);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  React.useEffect(() => {
    handleCloseNavMenu();
  }, []);

  const handleLanguageChange = (e) => {
    localStorage.setItem("language", e.target.value);
    window.location.reload();
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ backgroundColor: "#000066" }}
      >
        <TopNav />
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginLeft: "2rem",
                padding: "12px",
                width: "25%",
              }}
            >
              {page !== "Home"? <Link
              to="/"
           >
             <img style={{ width: "57%" }} src={logo} onClick={goToTop} />
           </Link>: <HashLink
           
              >
                <img style={{ width: "57%" }} src={logo} onClick={goToTop} />
              </HashLink>}
             
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleClick}>
                  {lang === "en" ? en.section1_title10 : rf.section1_title10}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <HashLink
                    to="/#organization"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography textAlign="center">
                      {lang === "en"
                        ? en.header_menu_organizations
                        : rf.header_menu_organizations}
                    </Typography>
                  </HashLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <HashLink
                    to="/#individuals"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {lang === "en"
                      ? en.header_menu_individuals
                      : rf.header_menu_individuals}
                  </HashLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <HashLink
                    to="/#about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {lang === "en"
                      ? en.header_menu_about
                      : rf.header_menu_about}
                  </HashLink>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
              }}
            >
              <img style={{ width: "40%" }} src={logo} />

              <FormControl sx={{ marginTop: "0rem" }}>
                <NativeSelect
                  sx={{ padding: "5px", color: "white", fontWeight: "600" }}
                  onChange={handleLanguageChange}
                  value={localStorage.getItem("language")}
                >
                  <option
                    style={{ fontSize: "20px", color: "black" }}
                    value={"en"}
                  >
                    EN
                  </option>
                  <option
                    style={{ fontSize: "20px", color: "black" }}
                    value={"fr"}
                  >
                    FR
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
            {/* <Box sx={{ display: { xs: "flex", md: "none" } }}> */}

            {/* </Box> */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                columnGap: "20px",
                marginLeft: "0rem",
              }}
            >
              <HashLink
                to="/#our-solution"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  onClick={handleClick}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#7F00FF", // Change this to your desired hover color
                    },
                  }}
                >
                  {lang === "en" ? en.section1_title10 : rf.section1_title10}
                </Button>
              </HashLink>
              <div style={{ borderRadius: "20px" }}>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <HashLink
                    to="/#eId-verification"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "#000066",
                        fontWeight: "600",
                        lineHeight: "38px",
                        paddingLeft:"20px",
                        "&:hover": {
                          backgroundColor: "#7F00FF", // Change this to your desired hover color
                          color:"white"
                        },
                      }}
                      onClick={handleClose}
                    >
                       {lang === "en" ? en.section2_title : rf.section2_title}
                    </Typography>
                  </HashLink>
                  <HashLink
                    to="/#identity-verification"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "#000066",
                        fontWeight: "600",
                        lineHeight: "38px",
                        paddingLeft:"20px",
                        "&:hover": {
                          backgroundColor: "#7F00FF", // Change this to your desired hover color
                          color:"white"
                        },
                      }}
                      onClick={handleClose}
                    >
                     {lang === "en" ? en.section4_title : rf.section4_title}
                    </Typography>
                  </HashLink>
                  <HashLink
                    to="/#biometric-authentication"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "#000066",
                        fontWeight: "600",
                        lineHeight: "38px",
                        paddingLeft:"20px",
                        "&:hover": {
                          backgroundColor: "#7F00FF", // Change this to your desired hover color
                          color:"white"
                        },
                      }}
                      onClick={handleClose}
                    >
                      {lang === "en" ? en.section3_title : rf.section3_title}
                    </Typography>
                  </HashLink>
                  <HashLink
                    to="/#digital-identity-network"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "#000066",
                        fontWeight: "600",
                        lineHeight: "38px",
                        paddingLeft:"20px",
                        "&:hover": {
                          backgroundColor: "#7F00FF", // Change this to your desired hover color
                          color:"white"
                        },
                      }}
                      onClick={handleClose}
                    >
                       {lang === "en" ? en.section5_title : rf.section5_title}
                    </Typography>
                  </HashLink>
                  <Typography
                    sx={{
                      color: "#000066",
                      fontWeight: "600",
                      lineHeight: "0px",
                    }}
                  >
                    ________________________________________
                  </Typography>
                  <HashLink
                    to="/#industries"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "#000066",
                        fontWeight: "600",
                        lineHeight: "50px",
                        marginTop:"10px",
                        paddingLeft:"20px",
                        "&:hover": {
                          backgroundColor: "#7F00FF", // Change this to your desired hover color
                          color:"white"
                        },
                      }}
                      onClick={handleClose}
                    >
                      {lang === "en" ? en.section6_title : rf.section6_title}
                    </Typography>
                  </HashLink>
                </Popover>
              </div>
              <HashLink
                to="/#organization"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#7F00FF", // Change this to your desired hover color
                    },
                  }}
                >
                  {lang === "en"
                    ? en.header_menu_organizations
                    : rf.header_menu_organizations}
                </Button>
              </HashLink>
              <HashLink
                to="/#individuals"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#7F00FF", // Change this to your desired hover color
                    },
                  }}
                >
                  {lang === "en"
                    ? en.header_menu_individuals
                    : rf.header_menu_individuals}
                </Button>
              </HashLink>
              <HashLink
                to="/#about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#7F00FF", // Change this to your desired hover color
                    },
                  }}
                >
                  {lang === "en" ? en.header_menu_about : rf.header_menu_about}
                </Button>
              </HashLink>

              <Button className={Style.header_contact_button}>
                <HashLink
                  to="/#contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {lang === "en"
                    ? en.header_menu_contactus
                    : rf.header_menu_contactus}
                </HashLink>
              </Button>

              <FormControl sx={{ marginTop: "1.5rem" }} >
                <select
                  className={Style.lan_change_hover_select}
                  onChange={handleLanguageChange}
                  value={localStorage.getItem("language")}
                 
                >
                  <option className={Style.lan_change_hover}  value="en">
                    EN
                  </option>
                  <option className={Style.lan_change_hover} value="fr">
                    FR
                  </option>
                </select>
              </FormControl>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
