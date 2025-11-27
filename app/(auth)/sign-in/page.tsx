"use client"; // <--- Add this at the very top
//import node modules libraries
import { useState } from "react";
import { Fragment } from "react";
import Feedback from "react-bootstrap/Feedback";
import {
  Row,
  Col,
  Image,
  Card,
  CardBody,
  Form,
  FormLabel,
  FormControl,
  FormCheck,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {

  IconEyeOff,
} from "@tabler/icons-react";

//import custom components
import Flex from "components/common/Flex";
import { getAssetPath } from "helper/assetPath";




const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    setError(""); // reset error
    console.log(JSON.stringify({
          username: email, // or "username" if your API expects that
          password: password,
        }))
    try {
      const response = await fetch("http://127.0.0.1:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email, // or "username" if your API expects that
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Sign in failed");
        console.error("Server error:", response.status, response.statusText);
        const text = await response.text(); // read text for debugging
        console.log("Response body:", text);
        setError("Sign in failed: " + response.status);
        return;
      }

      // Save token to localStorage or cookies
      localStorage.setItem("user", JSON.stringify({
                  id: data.id,
                  username: data.username,
                  email: data.email,
                  accesstoken: data.accessToken
                }));

      console.log("Login successful!", data);
      // redirect user to dashboard or protected route
      router.push("/");
      // e.g., router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };
    
  return (
    <Fragment>
      <Row className="mb-8">
        <Col xl={{ span: 4, offset: 4 }} md={12}>
          <div className="text-center">
            <Link
              href="/"
              className="fs-2 fw-bold d-flex align-items-center gap-2 justify-content-center mb-6"
            >
              <Image src={getAssetPath("/images/brand/logo/logo-icon.svg")} alt="Dasher" />
              <span>Impact Metrics</span>
            </Link>
            <h1 className="mb-1">Welcome Back</h1>
            {/* <p className="mb-0">
              Don’t have an account yet?
              <Link href="#" className="text-primary ms-1">
                Register here
              </Link>
            </p> */}
          </div>
        </Col>
      </Row>

      {/* Form Start */}
      <Row className="justify-content-center">
        <Col xl={5} lg={6} md={8}>
          <Card className="card-lg mb-6">
            <CardBody className="p-6">
              <Form className="mb-6">
                <div className="mb-3">
                  <FormLabel htmlFor="signinEmailInput">
                    Username <span className="text-danger">*</span>
                  </FormLabel>
                  <FormControl type="text" id="signinEmailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                  <Feedback type="invalid">Please enter username.</Feedback>
                </div>
                <div className="mb-3">
                  <FormLabel htmlFor="formSignUpPassword">Password</FormLabel>
                  <div className="password-field position-relative">
                    <FormControl
                      type="password"
                      id="formSignUpPassword"
                      className="fakePassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>
                      <IconEyeOff className="passwordToggler" size={16} />
                    </span>
                  </div>
                  {error && <div className="text-danger mb-3">{error}</div>}
                  <Feedback type="invalid">Please enter password.</Feedback>
                </div>
                <Flex
                  className="mb-4"
                  alignItems="center"
                  justifyContent="between"
                >
                  <FormCheck label="Remember me" type="checkbox" />
                  <div>
                    <Link href="" className="text-primary">
                      Forgot Password
                    </Link>
                  </div>
                </Flex>
                <div className="d-grid">
                  <Button variant="primary" type="button" onClick={handleSignIn}>
                    Sign In
                  </Button>
                </div>
              </Form>

              {/* <span>Sign in with your social network.</span>
              <Flex justifyContent="between" className="mt-3 d-flex gap-2">
                <Button href="#" variant="google" className="w-100">
                  <span className="me-3">
                    <IconBrandGoogleFilled size={18} />
                  </span>
                  Continue with Google
                </Button>
                <Button href="#" variant="facebook" className="w-100">
                  <span className="me-3">
                    <IconBrandFacebookFilled size={18} />
                  </span>
                  Continue with Facebook
                </Button>
              </Flex> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignIn;
