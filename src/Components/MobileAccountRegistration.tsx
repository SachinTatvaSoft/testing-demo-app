import React from "react";
import { withStyles } from "@mui/styles";

import {
  Box,
  Container,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { editIcon } from "./Assets";
import Header from "./Header";
import Footer from "./Footer";
import withRouter from "./withRouter";

interface Props {
  history: any;
  classes: any;
}

interface S {
  countryCode: string;
  isOtpSent: boolean;
  allCountryCodes: Array<string>;
  mobileNumber: string;
  otpDigit1: string;
  otpDigit2: string;
  otpDigit3: string;
  otpDigit4: string;
  otpDigit5: string;
  otpDigit6: string;
  validMobileNumber: boolean;
  mobileAccountNotFoundError: boolean;
  validOtp: boolean;
  wrongOtp: boolean;
}

interface SS {}

class MobileAccountRegistration extends React.Component<Props, S, SS> {
  static MobileAccountRegistration: MobileAccountRegistration;

  constructor(props: any) {
    super(props);
    this.state = {
      countryCode: "+91",
      mobileNumber: "",
      isOtpSent: false,
      otpDigit1: "",
      otpDigit2: "",
      otpDigit3: "",
      otpDigit4: "",
      otpDigit5: "",
      otpDigit6: "",
      validOtp: false,
      wrongOtp: false,
      mobileAccountNotFoundError: false,
      validMobileNumber: false,
      allCountryCodes: ["+91"],
    };
  }

  handleCountryCodeChange = (code: string) => {
    this.setState({ countryCode: code });
  };

  handleMobileNumberChange = (number: string) => {
    this.setState({ mobileNumber: number });
  };

  handleOtpSentStatusChange = (status: boolean) => {
    this.setState({ isOtpSent: status });
  };

  otpInputFocusChange = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    last: string,
    next: string
  ) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const element = document.getElementById(last);
      if (element) {
        element.focus();
      }
    } else {
      const key = JSON.parse(e.key);
      if (typeof key === "number") {
        const element = document.getElementById(next);
        if (element) {
          element.focus();
        }
      }
    }
  };

  handleOtpChange = (otpKey: string, value: string) => {
    const newState = { otpKey: "" };
    // @ts-ignore
    newState[otpKey] = value;
    // @ts-ignore
    this.setState(newState);
  };

  renderMobilAccountNotFound() {
    return (
      <>
        {this.state.mobileAccountNotFoundError && (
          <span
            style={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 16,
              letterSpacing: 0.2909,
              color: "#FF3B30",
            }}
          >
            Account not found.
          </span>
        )}
      </>
    );
  }

  renderMobileNumberNotValidError() {
    return (
      <>
        {this.state.validMobileNumber && (
          <span
            style={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 16,
              letterSpacing: 0.2909,
              color: "#FF3B30",
            }}
          >
            Please enter valid mobile number.
          </span>
        )}
      </>
    );
  }

  renderEnterValidOtp() {
    return (
      <>
        {this.state.validOtp && (
          <span
            style={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 16,
              letterSpacing: 0.2909,
              color: "#FF3B30",
            }}
          >
            Please enter valid otp.
          </span>
        )}
      </>
    );
  }

  renderWrongOtp() {
    return (
      <>
        {this.state.wrongOtp && (
          <span
            style={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 16,
              letterSpacing: 0.2909,
              color: "#FF3B30",
            }}
          >
            Entered otp is wrong.
          </span>
        )}
      </>
    );
  }

  renderMobileSignupComponent() {
    const { allCountryCodes } = this.state;
    const { classes } = this.props;

    return (
      <>
        {!this.state.isOtpSent ? (
          <Box
            style={{
              width: 534,
              height: 169,
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              borderColor: "#474747",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 4,
              padding: 30,
              maxWidth: "100%",
            }}
          >
            <span className={classes.mobileNumberTextStyle}>Mobile Number</span>

            <Container
              style={{ display: "flex", flexDirection: "row", padding: 0 }}
            >
              <FormControl
                style={{
                  width: 94,
                  height: 56,
                  border: "1px solid #CDD8D8",
                  borderRadius: 4,
                  marginRight: 9,
                  padding: 0,
                }}
              >
                <Select
                  style={{ width: "100%", height: "100%", padding: 5 }}
                  value={this.state.countryCode}
                  onChange={(e: any) =>
                    this.handleCountryCodeChange(e.target.value as string)
                  }
                  // disableUnderline={true}
                >
                  {allCountryCodes.map((country: string) => {
                    return (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl
                style={{
                  width: 440,
                  height: 56,
                  padding: 0,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id=""
                  type="number"
                  inputMode="numeric"
                  value={this.state.mobileNumber}
                  style={{
                    border: this.state.validMobileNumber
                      ? "2px solid #FF3B30"
                      : "",
                  }}
                  placeholder="Mobile Number"
                  onChange={(e: any) => {
                    this.handleMobileNumberChange(e.target.value);
                  }}
                />
                {this.renderMobileNumberNotValidError()}
              </FormControl>
            </Container>
            <>
              <Box
                style={{
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00BC4A",
                  borderRadius: 4,
                  textTransform: "none",
                  fontFamily: "sans-serif",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#FFFFFF",
                  marginTop: 30,
                  cursor: "pointer",
                }}
                // onClick={() => this.sendOtpUsingMobileNumber(true)}
                // onClick={() => this.sendOtpButtonClick()}
              >
                Send OTP
              </Box>
            </>
          </Box>
        ) : (
          <Box
            style={{
              width: 534,
              height: 338,
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              borderColor: "#474747",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 4,
              padding: 30,
              maxWidth: "100%",
            }}
          >
            <span className={classes.mobileNumberTextStyle}>Mobile Number</span>

            <Container
              style={{ display: "flex", flexDirection: "row", padding: 0 }}
            >
              <FormControl
                style={{
                  width: 94,
                  height: 56,
                  border: "1px solid #CDD8D8",
                  borderRadius: 4,
                  marginRight: 9,
                  padding: 0,
                }}
              >
                <Select
                  style={{ width: "100%", height: "100%", padding: 5 }}
                  value={this.state.countryCode}
                  onChange={(e: any) =>
                    this.handleCountryCodeChange(e.target.value as string)
                  }
                  // disableUnderline={true}
                  disabled={true}
                >
                  {allCountryCodes.map((country: string) => {
                    return (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl
                style={{
                  width: 440,
                  height: 56,
                  padding: 0,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id=""
                  type="text"
                  inputMode="numeric"
                  value={this.state.mobileNumber}
                  disabled={true}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="edit mobile number"
                        onClick={() => this.handleOtpSentStatusChange(false)}
                        edge="end"
                        style={{ width: 28, height: 19 }}
                      >
                        <img src={editIcon} height={16} width={16} alt="edit" />
                        &nbsp;
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: 16,
                            color: "#939393",
                            marginRight: 68,
                          }}
                        >
                          Edit
                        </span>
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Container>

            <span className={classes.otpTextStyle}>OTP</span>

            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 0,
              }}
            >
              <FormControl
                style={{
                  width: 69.02,
                  height: 56,
                  padding: 0,
                  marginRight: 12,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  inputProps={{
                    maxLength: 1,
                    tabIndex: 1,
                    style: { textAlign: "center" },
                  }}
                  id="1st"
                  type="text"
                  inputMode="numeric"
                  onKeyUp={(e: any) => {
                    this.otpInputFocusChange(e, "1st", "2nd");
                  }}
                  style={{
                    border:
                      this.state.validOtp || this.state.wrongOtp
                        ? "2px solid #FF3B30"
                        : "",
                  }}
                  name="otpDigit1"
                  value={this.state.otpDigit1}
                  onChange={(e: any) =>
                    this.handleOtpChange(e.target.name, e.target.value)
                  }
                />
              </FormControl>
              <FormControl
                style={{
                  width: 69.02,
                  height: 56,
                  padding: 0,
                  marginRight: 12,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  inputProps={{
                    maxLength: 1,
                    tabIndex: 2,
                    style: { textAlign: "center" },
                  }}
                  id="2nd"
                  type="text"
                  inputMode="numeric"
                  onKeyUp={(e: any) => {
                    this.otpInputFocusChange(e, "1st", "3rd");
                  }}
                  style={{
                    border:
                      this.state.validOtp || this.state.wrongOtp
                        ? "2px solid #FF3B30"
                        : "",
                  }}
                  name="otpDigit2"
                  value={this.state.otpDigit2}
                  onChange={(e: any) =>
                    this.handleOtpChange(e.target.name, e.target.value)
                  }
                />
              </FormControl>
              <FormControl
                style={{
                  width: 69.02,
                  height: 56,
                  padding: 0,
                  marginRight: 12,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  inputProps={{
                    maxLength: 1,
                    tabIndex: 3,
                    style: { textAlign: "center" },
                  }}
                  id="3rd"
                  type="text"
                  inputMode="numeric"
                  onKeyUp={(e: any) => {
                    this.otpInputFocusChange(e, "2nd", "4th");
                  }}
                  style={{
                    border:
                      this.state.validOtp || this.state.wrongOtp
                        ? "2px solid #FF3B30"
                        : "",
                  }}
                  name="otpDigit3"
                  value={this.state.otpDigit3}
                  onChange={(e: any) =>
                    this.handleOtpChange(e.target.name, e.target.value)
                  }
                />
              </FormControl>
              <FormControl
                style={{
                  width: 69.02,
                  height: 56,
                  padding: 0,
                  marginRight: 12,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  inputProps={{
                    maxLength: 1,
                    tabIndex: 4,
                    style: { textAlign: "center" },
                  }}
                  id="4th"
                  type="text"
                  inputMode="numeric"
                  onKeyUp={(e: any) => {
                    this.otpInputFocusChange(e, "3rd", "5th");
                  }}
                  style={{
                    border:
                      this.state.validOtp || this.state.wrongOtp
                        ? "2px solid #FF3B30"
                        : "",
                  }}
                  name="otpDigit4"
                  value={this.state.otpDigit4}
                  onChange={(e: any) =>
                    this.handleOtpChange(e.target.name, e.target.value)
                  }
                />
              </FormControl>
              <FormControl
                style={{
                  width: 69.02,
                  height: 56,
                  padding: 0,
                  marginRight: 12,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  inputProps={{
                    maxLength: 1,
                    tabIndex: 5,
                    style: { textAlign: "center" },
                  }}
                  id="5th"
                  type="text"
                  inputMode="numeric"
                  onKeyUp={(e: any) => {
                    this.otpInputFocusChange(e, "4th", "6th");
                  }}
                  style={{
                    border:
                      this.state.validOtp || this.state.wrongOtp
                        ? "2px solid #FF3B30"
                        : "",
                  }}
                  name="otpDigit5"
                  value={this.state.otpDigit5}
                  onChange={(e: any) =>
                    this.handleOtpChange(e.target.name, e.target.value)
                  }
                />
              </FormControl>
              <FormControl
                style={{
                  width: 69.02,
                  height: 56,
                  padding: 0,
                }}
                variant="outlined"
              >
                <OutlinedInput
                  inputProps={{
                    maxLength: 1,
                    tabIndex: 6,
                    style: { textAlign: "center" },
                  }}
                  id="6th"
                  type="text"
                  inputMode="numeric"
                  onKeyUp={(e: any) => {
                    this.otpInputFocusChange(e, "5th", "confirm-otp-button");
                  }}
                  style={{
                    border:
                      this.state.validOtp || this.state.wrongOtp
                        ? "2px solid #FF3B30"
                        : "",
                  }}
                  name="otpDigit6"
                  value={this.state.otpDigit6}
                  onChange={(e: any) =>
                    this.handleOtpChange(e.target.name, e.target.value)
                  }
                />
              </FormControl>
            </Container>
            <Container
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: "sans-serif",
                    color: "#6C6C6C",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  Didn't OTP Recieved yet ?
                </span>

                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: 14,
                    color: "#00BC4A",
                    marginTop: 7,
                  }}
                >
                  Resend OTP
                </span>
              </div>
              <div>
                {this.renderEnterValidOtp()}
                {this.renderWrongOtp()}
              </div>
            </Container>

            <>
              <Box
                style={{
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00BC4A",
                  borderRadius: 4,
                  textTransform: "none",
                  fontFamily: "sans-serif",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#FFFFFF",
                  marginTop: 29,
                  cursor: "pointer",
                }}
                // onClick={() => this.confirmOtpButtonClick()}
                id="confirm-otp-button"
              >
                Confirm
              </Box>
            </>
          </Box>
        )}
      </>
    );
  }
  render() {
    const { classes } = this.props;

    return (
      <div
        className={
          !this.state.isOtpSent
            ? classes.sendOtpContainer
            : classes.confirmOtpContainer
        }
        data-testid="mobile-registration-container"
      >
        <Header />

        <Container
          style={{
            maxWidth: "100%",
            height: !this.state.isOtpSent ? 595 : 767,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#F5FBFB",
            margin: "0px",
          }}
        >
          <span className={classes.labelTitle}>Signup using mobile</span>
          {this.renderMobileSignupComponent()}
        </Container>

        <Footer />
      </div>
    );
  }
}

const styles = {
  sendOtpContainer: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FBFB",
    maxWidth: "100%",
    height: "966px",
    // top: 78,
  },
  confirmOtpContainer: {
    alignItems: "center",
    backgroundColor: "#F5FBFB",
    maxWidth: "100%",
    height: "1140px",
  },
  titleWhySignUp: {
    marginBottom: 32,
    marginVertical: 8,
    width: "700px",
    height: "56px",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#6D6D6D",
  },
  labelTitle: {
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    marginTop: 24,
    marginBottom: 32,
    marginVertical: 8,
    color: "#474747",
  },
  mobileNumberContainer: {
    width: 534,
    height: 228,
    background: "#FFFFFF",
    borderColor: "#474747",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 30,
  },
  mobileNumberTextStyle: {
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: "#414141",
    marginBottom: 9,
  },
  otpTextStyle: {
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: "#414141",
    marginBottom: 9,
    marginTop: 30,
  },
  sendOtpButtonStyle: {
    height: 56,
    backgroundColor: "#00BC4A",
    borderRadius: 4,
    textTransform: "none",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 14,
    color: "#FFFFFF",
  },
};
//@ts-ignore
export default withStyles(styles)(withRouter(MobileAccountRegistration));
