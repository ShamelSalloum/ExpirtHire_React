import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,

  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";

import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { myGray } from "../colors";

import { FormCell, PhoneNumberCell } from "../Pages/Forms/Components";

import { user_signUp } from "../Logic/slices/auth_slice/auth_actions";

import { toast } from "react-toastify";

export default function Signup() {
  const [, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    formData.phone = `${formData.phoneCode}${formData.phone}`;
    if (formData.password !== formData.confirm_password) {
      toast.error("passwords is not matched");
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Please Enter A Valid Email Address");
      return;
    }
    console.log(formData);
    dispatch(user_signUp(formData, navigate));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSignUp} method="post">
      <Box>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          templateRows={{ base: "1fr", md: "1fr" }}
          gap={{ base: 0, md: 6 }}
        >
          <GridItem>
            <SignUpImageBox />
          </GridItem>

          <GridItem
            px={{ base: "10px", md: "100px" }}
            py={{ base: "10px", md: "50px" }}
          >
            <Box p={4} bg="white" w="100%">
              <Flex direction={"column"} align="center" gap={6}>
                <Text fontWeight="semibold" fontSize="25px">
                  Welcome To Expert Hire
                </Text>

                <VStack w="100%" align="stretch" spacing={4} px="50px">
                  <Flex justify="space-between" w="100%" gap={2}>
                    <FormCell
                      input_name={"first_name"}
                      isRequired={true}
                      title={"First Name"}
                      type={"text"}
                      placeholder={"Your First Name"}
                    />
                    <FormCell
                      input_name={"last_name"}
                      isRequired={true}
                      title={"Last Name"}
                      type={"text"}
                      placeholder={"Your Last Name"}
                    />
                  </Flex>
                  <Flex gap={2}>
                    <FormCell
                      input_name={"username"}
                      isRequired={true}
                      title={"username"}
                      type={"text"}
                      placeholder={"Username"}
                    />
                    <Flex direction="column" gap={1} w="full">
                      <Text fontSize="16px" color={myGray}>
                        {'Sex'}
                      </Text>
                      <Select name="sex" borderRadius="12px"
                        border={"1px"}
                        borderColor={myGray}
                        focusBorderColor="black">
                        <option>Female</option>
                        <option>Male</option>
                      </Select>
                    </Flex>
                  </Flex>

                  <FormCell
                    input_name={"email"}
                    isRequired={true}
                    title={"Email"}
                    type={"email"}
                    placeholder={"Your Email"}
                  />
                  <PhoneNumberCell />
                  <FormCell
                    input_name={"password"}
                    isRequired={true}
                    title={"Password"}
                    type={"password"}
                    placeholder={"password"}
                  />
                  <Text>Confirm Password :</Text>
                  <Input
                    name="confirm_password"
                    placeholder="Confirm Password"
                    type="password"
                    borderRadius="12"
                    borderColor={myGray}
                    focusBorderColor="black"
                    w="100%"
                    required
                    onChange={() => setPasswordError(false)}
                  />
                  <Text>Birthdate</Text>
                  <Input
                    name="date"
                    type="date"
                    borderRadius="12"
                    borderColor={myGray}
                    focusBorderColor="black"
                    w="100%"
                  />
                  <Button
                    type="submit"
                    backgroundColor={myGray}
                    color={"white"}
                    h="35px"
                    fontWeight="light"
                    borderRadius="12"
                    borderColor={myGray}
                    focusBorderColor="black"
                    width="100%"
                  >
                    Signup
                  </Button>
                </VStack>

                <Text>
                  Already in Jobly? <Link to="/login">Login</Link>
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </form>
  );
}

function SignUpImageBox() {
  return (
    <Box
      bgImage="url('img/signUp.jpg')"
      bgSize="cover"
      bgPosition="center"
      minH="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={0}
      bottom={0}
      zIndex={-1}
      w="50%"
    >
      {/* <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Text fontSize="50px" fontWeight="semibold" color="white">
          Expert Hire
        </Text>
        <Flex flexDirection="column" alignItems="start" py="200px">
          <Text fontSize="30px" fontWeight="semibold" color="white">
            lorem
          </Text>
          <Flex alignItems="center" gap="15px">
            <Icon as={CheckCircleIcon} color="white" />
            <Text fontSize="20px" fontWeight="normal" color="white">
              lorem
            </Text>
          </Flex>
          <Flex alignItems="center" gap="15px">
            <Icon as={CheckCircleIcon} color="white" />
            <Text fontSize="20px" fontWeight="normal" color="white">
              lorem
            </Text>
          </Flex>
          <Flex alignItems="center" gap="15px">
            <Icon as={CheckCircleIcon} color="white" />
            <Text fontSize="20px" fontWeight="normal" color="white">
              lorem
            </Text>
          </Flex>
        </Flex>
      </Flex> */}
    </Box>
  );
}
