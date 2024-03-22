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
import { Link } from "react-router-dom";


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [lang, setLang] = React.useState("");
  
     React.useEffect(()=>{
      const lan = localStorage.getItem("language");
      setLang(lan);

     },[])

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
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#000066" }}>
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
              <HashLink
                    to="/#banner"
                  
                  ><img style={{ width: "57%" }} src={logo} /></HashLink>
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
                  <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                      <div>
                        <Typography
                          textAlign="center"
                          {...bindToggle(popupState)}
                        >
                          Solutions
                        </Typography>

                        <Popper
                          {...bindPopper(popupState)}
                          transition
                          sx={{ zIndex: 9999 }}
                        >
                          {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                              <Paper
                                sx={{
                                  padding: "10px",
                                  width: "18rem",
                                  borderRadius: "20px",
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
                                      marginLeft: "20px",
                                    }}
                                    {...bindToggle(popupState)}
                                  >
                                    eID Verification
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
                                      marginLeft: "20px",
                                    }}
                                    {...bindToggle(popupState)}
                                  >
                                    Identity Verification
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
                                      marginLeft: "20px",
                                    }}
                                    {...bindToggle(popupState)}
                                  >
                                    Biometric Authentification
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
                                      marginLeft: "20px",
                                    }}
                                    {...bindToggle(popupState)}
                                  >
                                    Digital Identity Network
                                  </Typography>
                                </HashLink>
                                <Typography
                                  sx={{
                                    color: "#000066",
                                    fontWeight: "600",
                                    lineHeight: "0px",
                                  }}
                                >
                                  ________________________________
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
                                      marginLeft: "20px",
                                    }}
                                    {...bindToggle(popupState)}
                                  >
                                    Industries
                                  </Typography>
                                </HashLink>
                              </Paper>
                            </Fade>
                          )}
                        </Popper>
                      </div>
                    )}
                  </PopupState>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <HashLink
                    to="/#organization"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography textAlign="center">{lang === "en"?en.header_menu_organizations:rf.header_menu_organizations}</Typography>
                  </HashLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <HashLink
                    to="/#individuals"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                     {lang === "en"?en.header_menu_individuals:rf.header_menu_individuals}
                  </HashLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <HashLink
                    to="/#about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                     {lang === "en"?en.header_menu_about:rf.header_menu_about}
                  </HashLink>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <img style={{ width: "40%" }} src={logo} />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                columnGap: "20px",
                marginLeft: "0rem",
              }}
            >
              <PopupState variant="popper" popupId="demo-popup-popper">
                {(popupState) => (
                  <div>
                    <Button
                      {...bindToggle(popupState)}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                     {lang === "en"?en.section1_title10:rf.section1_title10}
                    </Button>
                    <Popper
                      {...bindPopper(popupState)}
                      transition
                      sx={{ zIndex: 9999 }}
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper
                            sx={{
                              padding: "10px",
                              width: "18rem",
                              borderRadius: "20px",
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
                                  marginLeft: "20px",
                                }}
                                {...bindToggle(popupState)}
                              >
                                eID Verification
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
                                  marginLeft: "20px",
                                }}
                                {...bindToggle(popupState)}
                              >
                                Identity Verification
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
                                  marginLeft: "20px",
                                }}
                                {...bindToggle(popupState)}
                              >
                                Biometric Authentification
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
                                  marginLeft: "20px",
                                }}
                                {...bindToggle(popupState)}
                              >
                                Digital Identity Network
                              </Typography>
                            </HashLink>
                            <Typography
                              sx={{
                                color: "#000066",
                                fontWeight: "600",
                                lineHeight: "0px",
                              }}
                            >
                              ________________________________
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
                                  marginLeft: "20px",
                                }}
                                {...bindToggle(popupState)}
                              >
                                Industries
                              </Typography>
                            </HashLink>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </div>
                )}
              </PopupState>
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
                  }}
                >
                  {lang === "en"?en.header_menu_organizations:rf.header_menu_organizations}
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
                  }}
                >
                   {lang === "en"?en.header_menu_individuals:rf.header_menu_individuals}
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
                  }}
                >
                   {lang === "en"?en.header_menu_about:rf.header_menu_about}
                </Button>
              </HashLink>

              <Button className={Style.header_contact_button}>
                <HashLink
                  to="/#contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                   {lang === "en"?en.header_menu_contactus:rf.header_menu_contactus}
                </HashLink>
              </Button>

              <FormControl sx={{ marginTop: "1rem" }}>
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
