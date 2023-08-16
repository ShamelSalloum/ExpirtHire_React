import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { myGray } from "../colors";
import { useDispatch } from "react-redux";
import { user_forgot_password } from "../Logic/slices/auth_slice/auth_actions";
import { FormCell } from "./Forms/Components";


export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    dispatch(user_forgot_password(formData.email,navigate));
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
              <Flex w="100%" direction={"column"} gap={5}>
                <FormCell
                  title={"Enter Your Email :"}
                  input_name={'email'}
                  isRequired={true}
                  placeholder={'Your Email'}
                  type={'email'}
                />
                <Button
                  bgColor={myGray}
                  color={"white"}
                  type="submit"
                  h="35px"
                  fontWeight="light"
                  borderRadius="16"
                >
                  Verify
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </form>
  );
}
