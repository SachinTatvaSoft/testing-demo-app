import React, { Component } from "react";
import withRouter from "./withRouter";
import { withStyles } from "@mui/styles";
import { Box, Container, Link } from "@mui/material";
import {
  logoImg,
  instagramIcon,
  twitterIcon,
  linkdinIcon,
  emailIcon,
  phoneIcon,
  locationIcon,
} from "./Assets";

type Props = {
  classes: any;
};

class Footer extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <Container
        className={classes.mainFooterContainer}
        data-testid="footer-container"
      >
        <Box className={classes.footerSection}>
          <Container
            fixed
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
            }}
          >
            <Container
              style={{
                width: 278,
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                padding: 0,
              }}
            >
              <div style={{ height: 61 }}>
                <img
                  src={logoImg}
                  height={60}
                  width={120}
                  alt="Logo Img"
                  data-testid="footer-logo-image"
                />
              </div>
              <div className={classes.footerIconsContainer}>
                <Box className={classes.socialIconsRow}>
                  <Link
                    href="https://www.instagram.com/tatvasecond"
                    target="_blank"
                  >
                    <img
                      src={instagramIcon}
                      data-testid="footer-icon-images"
                      className={classes.footerIcons}
                      alt="instagram Icon"
                    />
                  </Link>
                  <Link href="https://twitter.com/tatvasoft" target="_blank">
                    <img
                      src={twitterIcon}
                      data-testid="footer-icon-images"
                      className={classes.footerIcons}
                      alt="twitter Icon"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/tatvasoft"
                    target="_blank"
                  >
                    <img
                      src={linkdinIcon}
                      data-testid="footer-icon-images"
                      className={classes.footerIcons}
                      alt="linkdin Icon"
                    />
                  </Link>
                </Box>
              </div>
            </Container>
            <Container className={classes.footerDetailsContainer}>
              <div style={{ height: 61 }}>
                <p
                  className={classes.fonts + " " + classes.lead}
                  style={{ margin: 0 }}
                >
                  Are you owner of a startup looking to raise funds or an
                  individual looking to invest in top growing startups then you
                  are at the right place.
                </p>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: 100,
                }}
              >
                <div className={classes.contactDetailsContainer}>
                  <Box className={classes.emailBlock}>
                    <img
                      src={emailIcon}
                      data-testid="footer-icon-images"
                      className={classes.footerIcons}
                      alt="fb Icon"
                    />
                    <h6 className={classes.fonts + " " + classes.h6}>
                      hello@tatvasoft.com
                    </h6>
                  </Box>
                  <Box
                    className={classes.mobileBlock}
                    // style={{ width: "26%" }}
                  >
                    <img
                      src={phoneIcon}
                      data-testid="footer-icon-images"
                      className={classes.footerIcons}
                      alt="fb Icon"
                    />
                    <h6 className={classes.fonts + " " + classes.h6}>
                      +91-9601421472
                    </h6>
                  </Box>
                  <Box className={classes.addressBlock}>
                    <img
                      src={locationIcon}
                      data-testid="footer-icon-images"
                      className={classes.footerIcons}
                      alt="fb Icon"
                    />
                    <h6 className={classes.fonts + " " + classes.h6}>
                      TatvaSoft House, Sarkhej - Gandhinagar Highway, Rajpath
                      Rangoli Rd, Ahmedabad, Gujarat 380054
                    </h6>
                  </Box>
                </div>
              </div>
            </Container>
          </Container>
          {/* <Box className={classes.hr} /> */}
        </Box>
        <Box className={classes.footerCopyRight}>
          <p className={classes.fonts + " " + classes.lead}>
            Copyright. All rights reserved @tatvaSoft
          </p>
        </Box>
      </Container>
    );
  }
}
//FOOTER CSS
const FooterStyle = {
  mainFooterContainer: {
    height: "295px",
    padding: "0 !important",
    margin: "0 !important",
    background: "#ffffff",
    maxWidth: "100% !important",
  },
  addressBoxStyle: {
    maxWidth: "34%",
    flexBasis: "34%",
  },
  mobileNumberBoxStyle: {
    maxWidth: "32%",
    flexBasis: "32%",
  },
  hr: {
    borderTop: "1px solid #EFEFEF",
    width: "1441px",
    margin: "30px 0",
  },
  fonts: {
    fontFamily: "sans-serif",
    fontWeight: "400",
  },
  h2: {
    color: "#474747",
    fontSize: 30,
    margin: 0,
    "@media(max-width: 1024px)": {
      fontSize: 22,
    },
  },
  h3: {
    color: "#414141",
    fontSize: 20,
  },
  h5: {
    color: "#393939",
    fontSize: 24,

    margin: 0,
  },
  lead: {
    color: "#6D6D6D",
    fontSize: 18,
    "@media(max-width: 425px)": {},
    "@media(max-width: 320px)": {},
  },
  h6: {
    color: "#474747",
    fontSize: 18,
    margin: 0,
    paddingLeft: "10px",
  },
  footerSection: {
    borderTop: "1px solid rgba(151,151,151,0.44);",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    height: "245x",
    justifyContent: "center",
    padding: "55px 162px 37px 158px",
    "& p": {
      fontSize: 16,
    },
    "@media(max-width: 1024px)": {
      padding: "55px 86px 37px 98px",
    },
    "@media(max-width: 768px)": {
      padding: "49px 0px 37px 0px",
      "& p": {
        fontSize: 14,
      },
    },
    "@media(max-width: 425px)": {
      padding: "55px 10px 37px 10px",
      "& p": {
        fontSize: 11,
      },
    },
    "@media(max-width: 320px)": {
      "& p": {
        fontSize: 10,
      },
    },
  },
  footerIcons: {
    marginRight: 20,
    "@media(max-width: 768px)": {
      marginRight: 8,
    },
  },
  footerContactBlock: {
    display: "flex",
    alignItems: "center",
    "&:nth-child(3)": {
      alignItems: "flex-start",
    },
    "& h6": {
      paddingLeft: 0,
      fontSize: 16,
    },
    "@media(max-width: 1024px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 15,
      },
    },
    "@media(max-width: 768px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
  },
  footerLinkBlock: {
    "& p": {
      paddingLeft: 0,
      fontSize: 16,
      color: "#373737",
    },
  },
  footerLinksRow: {
    display: "flex",
    flexDirection: "column",
    "& a": {
      fontSize: 14,
      color: "#373737",
      fontFamily: "sans-serif",
      fontWeight: "400",
      marginBottom: "10px",
      "&:hover": {
        color: "#00BC4A",
        textDecoration: "none",
        fontWeight: "600",
      },
    },
  },
  footerCopyRight: {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #EFEFEF",
    width: "100%",
    padding: "9.5px 0px",
    "& p": {
      fontSize: 14,
      color: "#373737",
      margin: 0,
    },
  },
  footerIconsContainer: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media(max-width: 1024px)": {
      // padding: "55px 132px 37px 128px",
    },
  },
  footerDetailsContainer: {
    width: 842,
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    padding: 0,
  },
  contactDetailsContainer: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "row",
    "@media(max-width: 425px)": {
      flexDirection: "column",
    },
  },
  emailBlock: {
    display: "flex",
    alignItems: "center",
    width: "32%",
    "& h6": {
      paddingLeft: 0,
      fontSize: 16,
    },
    "@media(max-width: 1024px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 15,
      },
    },
    "@media(max-width: 768px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
    "@media(max-width: 425px)": {
      width: "100%",
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
  },
  mobileBlock: {
    display: "flex",
    alignItems: "center",
    width: "26%",
    "& h6": {
      paddingLeft: 0,
      fontSize: 16,
    },
    "@media(max-width: 1024px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 15,
      },
    },
    "@media(max-width: 768px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
    "@media(max-width: 425px)": {
      width: "100%",
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
  },
  addressBlock: {
    display: "flex",
    alignItems: "center",
    width: "48%",
    "& h6": {
      paddingLeft: 0,
      fontSize: 16,
    },
    "@media(max-width: 1024px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 15,
      },
    },
    "@media(max-width: 768px)": {
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
    "@media(max-width: 425px)": {
      width: "100%",
      "& h6": {
        paddingLeft: 0,
        fontSize: 12,
      },
    },
    "@media(max-width: 375px)": {
      width: "100%",
      "& h6": {
        paddingLeft: 0,
        fontSize: 11,
      },
    },
  },
};
//@ts-ignore
export default withStyles(FooterStyle)(withRouter(Footer));
