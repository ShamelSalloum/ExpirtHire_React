import { Box } from "@chakra-ui/react";
import React from "react";
import { myGray } from "../colors";

import NavBar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchQuestions } from "../Logic/slices/api_slice/apiActions";

export default function FormLayout({ imgUrl, children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  window.scrollTo(0, 0);
  return (
    <Box>
      <NavBar />
      <Box
        width="full"
        minH='100vh'
        mt={{ base: "0px", md: "-60px" }}
        backgroundImage={imgUrl}
        bgColor={myGray}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        p={{ base: "10px", md: "100px" }}
      >
        <Box bgColor="#FFFFFFF1" w="100%" p="30px" borderRadius={"16px"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
