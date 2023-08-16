import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { myGray, myLightGray } from "../colors";
import { useDispatch } from "react-redux";
import { user_login } from "../Logic/slices/auth_slice/auth_actions";
import { FormCell } from "./Forms/Components";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    const email = data.get("email").toString();
    const password = data.get("password").toString();
    await dispatch(user_login(email, password)).then(() => {
      navigate("/profile");
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <Box
        width="full"
        minHeight="100vh"
        backgroundImage={"/img/login.jpg"}
        bgColor={myGray}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={{ base: "10px", md: "100px" }}
      >
        <Box p={4} bg="white" borderRadius={16} justifyContent="center">
          <Flex direction={"column"} align="center">
            <Flex
              spacing={8}
              w={{ base: "100%", md: "500px" }}
              p={{ base: "10px", md: "30px" }}
              alignItems="stretch"
              direction={"column"}
              gap={5}
            >
              <Text fontWeight="normal" fontSize="20px" alignSelf="center">
                Welcome Back
              </Text>

              <Flex w="100%" direction={"column"} gap={5}>

                <FormCell
                  title={"Email"}
                  input_name={'email'}
                  isRequired={true}
                  placeholder={'Your Email'}
                  type={'email'}
                />
                <FormCell
                  title={"Password"}
                  input_name={'password'}
                  isRequired={true}
                  placeholder={'Your password'}
                  type={'password'}
                />

                <Button
                  bgColor={myGray}
                  color={"white"}
                  type="submit"
                  h="35px"
                  fontWeight="light"
                  borderRadius="16"
                >
                  Login
                </Button>
              </Flex>
            </Flex>

            <Flex direction="column" align="center">
              <Flex gap={1} color={myLightGray}>
                Already in Expert Hire?
                <Link to="/singUp">
                  <Text textColor={myGray}>Signup</Text>
                </Link>

              </Flex>
              <Link to="/forgot_password">
                <Text textColor={myGray}>forgot password</Text>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </form>
  );
}
