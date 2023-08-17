import { Button, Text, Spacer, Box, Flex } from "@chakra-ui/react";
import { myGray, myLightGray, white } from "../colors";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../Logic/slices/auth_slice/auth_actions";

export default function NavBar() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(user_logout(token));
    navigate('/login', { replace: true });
  }

  return (
    <Box bgColor={{ base: myGray, md: "#00000000" }}>
      <Flex
        px={{ base: "15px", md: "20px" }}
        alignItems={{ base: "center", md: "center" }}
        justifyContent={{ base: "space-evenly", md: "space-evenly" }}
      >
        <Text fontWeight="bold" fontSize={{ base: 35, md: 35 }} color={white}>
          EH
        </Text>
        <Spacer />
        <Flex
          gap={{ base: 2, md: 6 }}
          fontSize={{ base: "sm", md: 25}}
          color={white}
        >
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/services">
            <Text>Services</Text>
          </Link>
          <Link to="/profile">
            <Text>Profile</Text>
          </Link>
        </Flex>
        <Spacer />
        {!isAuth ?
          <Flex gap={4} fontSize={{ base: 12, md: 22 }}>
            <Link to={"/login"}>
              <Button
                borderColor={myLightGray}
                bgColor={white}
                color="black"
                borderRadius={{ base: "10px", md: "10px" }}
                size={{ base: "sm", md: "md" }}
              >
                login
              </Button>
            </Link>
            <Link to={"/singUp"}>
              <Button
                borderColor={myLightGray}
                bgColor={white}
                color="black"
                colorScheme="blackAlpha"
                borderRadius={{ base: "8px", md: "10px" }}
                size={{ base: "sm", md: "md" }}
              >
                sign-up
              </Button>
            </Link>
          </Flex> :
          <Button
            borderColor={myLightGray}
            bgColor={white}
            color="black"
            onClick={handleLogout}
            colorScheme="blackAlpha"
            borderRadius={{ base: "8px", md: "10px" }}
            size={{ base: "xs", md: "md" }}
          >
            logout
          </Button>}
      </Flex>
    </Box>
  );
}
