import React, { Component } from "react";
import withRouter from "./withRouter";
import { withStyles } from "@mui/styles";

import { Box, Container, Button, Link } from "@mui/material";

import { logoImg, loginImage } from "./Assets";

type Props = {
  history: any;
  classes: any;
};

class Header extends Component<Props> {
  render() {
    const { history, classes } = this.props;
    // const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("token") || "{}");
    return (
      <>
        <Container
          className={classes.headerMainContainer}
          data-testid="header-container"
        >
          <Box className={classes.mainHeader}>
            <img
              data-testid="header-logo-image"
              src={logoImg}
              alt="Logo Img"
              height={60}
              width={120}
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            />
            <Box className={classes.rightNav}>
              {user.token ? (
                <img src={loginImage} height={48} width={48} alt="user" />
              ) : (
                <>
                  <Link
                    className={classes.loginTextStyle}
                    onClick={() => this.props.history("/mobile-login")}
                    style={{}}
                  >
                    Login
                  </Link>
                  <Button
                    className={classes.customButton}
                    data-testid="register-button"
                    onClick={() => this.props.history("/mobile-registration")}
                  >
                    Register
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Container>
        <Box className={classes.hr} />
      </>
    );
  }
}

const NavbarStyle = {
  headerMainContainer: {
    maxWidth: "100% !important",
    backgroundColor: "#FFFFFF",
    margin: "0 !important",
    padding: "0 !important",
  },
  mainHeader: {
    padding: "14px 158px",
    display: "flex",
    maxWidth: "100%",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    "@media(max-width: 1024px)": {
      padding: "14px 98px",
    },
    "@media(max-width: 768px)": {
      padding: "14px 76px",
    },
    "@media(max-width: 425px)": {
      padding: "14px 44px",
    },
    "@media(max-width: 320px)": {
      padding: "14px 22px",
    },
  },
  hr: {
    borderTop: "2px solid #E0E0E0",
  },
  rightNav: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    "& .MuiTypography-root": {
      padding: "0 15px",
      color: "#353535",
      opacity: "0.79",
      fontFamily: " sans-serif",
      fontWeight: "400",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  fonts: {
    fontFamily: " sans-serif",
    fontWeight: "400",
  },
  customButton: {
    border: "1px solid #00BC4A !important",
    borderRadius: "4 !important",
    textTransform: "none !important",
    color: "#00BC4A !important",
    fontWeight: "400 !important",
    marginLeft: "41 !important",
    width: "68 !important",
    height: "40 !important",
    "&:hover": {
      backgroundColor: "#00BC4A !important",
      color: "#fff !important",
    },
    "& .MuiButton-label": {
      fontSize: "14 !important",
      fontFamily: "sans-serif !important",
    },
  },
  loginTextStyle: {
    fontWeight: "400 !important",
    fontSize: "16  !important",
    color: "#353535  !important",
    cursor: "pointer  !important",
    fontFamily: "sans-serif  !important",
    textDecoration: "none !important",
  },
};
//@ts-ignore
export default withStyles(NavbarStyle)(withRouter(Header));
