import React from "react";
import {useNavigate} from "react-router-dom";
import useInput from "../../hooks/use-input";
import "./ForgotPassord.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import userIcon from "./usericon.png"
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

let invalidLogin = false;

const regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const simpleChangeHandler = (event) => {
  return event.target.value;
};

const ForgotPassword = (props) => {
  const history = useNavigate();

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => regexPassword.test(value) === true, simpleChangeHandler); // Not using trim here as passwords may contain spaces in the beginning or end

  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput((value) => value.trim() === enteredPassword, simpleChangeHandler);

  let formIsValid = false;

  if (enteredConfirmPasswordIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formRegisterClickHandler = async () => {
    history("/login");
  };

  return (
      <div className="bg-image-login">
        <NavBar/>
        <Col className="card-border">
          <Card>
            <CardHeader>
              <div className="text-center">
                <Button
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                <span className="btn-inner--icon">
                  <img
                      alt="..."
                      src={userIcon}
                      width={100} height={100}
                  />
                </span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center">
                <b>CHANGE PASSWORD</b>
              </div>
            <label/>
              <Form role="form">
                <label className="display-label"><b>Password</b></label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      🔒
                    </InputGroupText>
                    <Input
                        placeholder="Your password"
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                        className="form-control"
                    />
                  </InputGroup>
                </FormGroup>

                <label className="display-label"><b>Confirm Password</b></label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      🔒
                    </InputGroupText>
                    <Input
                        placeholder="Enter your password again"
                        id="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        onChange={confirmPasswordChangeHandler}
                        onBlur={confirmPasswordBlurHandler}
                        value={enteredConfirmPassword}
                        className="form-control"
                    />
                  </InputGroup>
                </FormGroup>
                <label/>

                <div className="text-center">
                  <Button onClick={formRegisterClickHandler} color="primary"
                          type="button" disabled={!formIsValid}>
                    Change Password
                  </Button>
                </div>
                <label/>
                {confirmPasswordInputHasError && (
                    <p className="text-danger">* Must contain alpha-numeric, special and minimum 8 characters.</p>
                )}
                {passwordInputHasError && (
                    <p className="text-danger">* Must contain alpha-numeric, special and minimum 8 characters.</p>
                )}
                {invalidLogin && (
                    <p className="text-danger">* Passwords doesn't match, please enter again.</p>
                )}

              </Form>
            </CardBody>
          </Card>
        </Col>
        <Footer/>
      </div>
  );
};

export default ForgotPassword;