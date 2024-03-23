// @ts-nocheck
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalidCreds, setInvalidCreds] = React.useState(false);

  const handleLogin = () => {
    if (userName === "myhome@proj.com" && password === "teamof3") {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      setInvalidCreds(true);
    }
  };

  return (
    <>
      <div className="flex justify-center align-middle items-center h-[100vh]">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h4" color="white">
              Sign In to Smart Homes
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setUserName(e.target.value)}
              label="Email"
              size="lg"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            {invalidCreds && (
              <Typography
                variant="small"
                color="red"
                className="flex mt-0 justify-center"
              >
                Invalid credentials
              </Typography>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleLogin} variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
