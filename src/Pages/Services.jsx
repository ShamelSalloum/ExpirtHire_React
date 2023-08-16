import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { myGray } from "../colors";
import { GridImage, ServiceGridContainer } from "../Components/_Shared";
import NavBar from "../Components/Navbar";

export default function Services() {

  return (
    <Box bgColor={myGray}>
      <NavBar />
      <Flex direction={{ base: "column", md: "column" }} gap={10}>
        <Grid
          templateColumns={{ base: "repeat(1,fr)", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(2,fr)", md: "repeat(4, 1fr)" }}
          py={"20px"}
          gap={10}
        >
          <GridItem>
            <GridImage imageUrl={"/img/video_editing.jpg"} isLeft={true} />
          </GridItem>
          <GridItem>
            <ServiceGridContainer
              to={"video"}
              buttonName={"Create Request"}
              title={"Video Editing"}
              subtitle={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo voluptate ab laudantium illo quia atque, quibusdam ipsam soluta repellat, dicta perspiciatis animi aut magni velit non sequi. Sequi, debitis?"
              }
            />
          </GridItem>

          <GridItem>
            <ServiceGridContainer
              to={"logo"}
              buttonName={"Create Request"}
              title={"Logo Design"}
              subtitle={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo voluptate ab laudantium illo quia atque, quibusdam ipsam soluta repellat, dicta perspiciatis animi aut magni velit non sequi. Sequi, debitis?"
              }
            />
          </GridItem>

          <GridItem>
            <GridImage imageUrl={"/img/logo_design.jpeg"} isLeft={false} />
          </GridItem>

          <GridItem>
            <GridImage imageUrl={"/img/web1.jpg"} isLeft={true} />
          </GridItem>

          <GridItem>
            <ServiceGridContainer
              to={"web"}
              buttonName={"Create Request"}
              title={"web development"}
              subtitle={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo voluptate ab laudantium illo quia atque, quibusdam ipsam soluta repellat, dicta perspiciatis animi aut magni velit non sequi. Sequi, debitis?"
              }
            />
          </GridItem>

          <GridItem>
            <ServiceGridContainer
              to={"building"}
              buttonName={"Create Request"}
              title={"Building Design"}
              subtitle={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo voluptate ab laudantium illo quia atque, quibusdam ipsam soluta repellat, dicta perspiciatis animi aut magni velit non sequi. Sequi, debitis?"
              }
            />
          </GridItem>
          <GridItem>
            <GridImage imageUrl={"/img/building.jpg"} isLeft={false} />
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
