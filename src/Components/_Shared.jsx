import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { myLightGray } from "../colors";
import { useNavigate } from "react-router-dom";

function GridContent({ title, subtitle }) {
  return (
    <Center>
      <Flex gap={2} direction="column" alignItems="start">
        <Heading
          color={"white"}
          alignSelf={{ base: "center", md: "flex-start" }}
        >
          {title}
        </Heading>
        <Text
          fontSize="20px"
          fontWeight={"thin"}
          style={{ whiteSpace: "pre-line" }}
          color={myLightGray}
        >
          {subtitle}
        </Text>
      </Flex>
    </Center>
  );
}

function GridImage({ isLeft, imageUrl }) {
  return (
    <Box
      h={{ base: "250px", md: "500px" }}
      bg="#DDDDDD"
      background="black"
      backgroundImage={imageUrl}
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
      borderRadius={{
        base: "0px 0px 00px 0px",
        md: isLeft ? "0px 30px 30px 0px" : "30px 0px 0px 30px",
      }}
      backgroundAttachment="scroll"
    />
  );
}

function ServiceGridContainer({ to, buttonName, title, subtitle }) {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/services/${to}`);
  };
  return (
    <Flex direction={"column"} p={{ base: "10px", md: "100px" }} gap={3}>
      <GridContent title={title} subtitle={subtitle} />
      <Button
        borderRadius={"8px"}
        alignSelf={{ base: "center", md: "flex-start" }}
        bgColor={myLightGray}
        onClick={handleNavigation}
      >
        {buttonName}
      </Button>
    </Flex>
  );
}
function ReportCell({ title, data }) {
  return (
    <Flex gap={2}>
      <Text fontSize={20}>{title} </Text>
      <Text fontSize={20} fontWeight={18}>
        {data}
      </Text>
    </Flex>
  );
}
function ReportQuestionCells({ title, data }) {
  return (
    <Flex gap={2} direction={"column"}>
      <Text fontSize={20}>{title} </Text>
      <Text fontSize={20} fontWeight={18}>
        {data}
      </Text>
    </Flex>
  );
}

export { GridContent, GridImage, ServiceGridContainer, ReportCell, ReportQuestionCells };
