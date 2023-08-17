import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { myGray , myLightGray } from "../colors";
import { GridContent } from "../Components/_Shared";
import NavBar from "../Components/Navbar";

export default function Homepage() {
  const { t } = useTranslation();
  return (
    <Box bgColor={myGray}>
      <Flex direction={{ base: "column", md: "column" }} gap={10}>
        <Box
          width="100%"
          height={{ base: "400px", md: "630px" }}
          background="black"
          backgroundImage={"/img/main3.webp"}
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          backgroundAttachment="scroll"
        >
          <NavBar />
          <Flex
            direction={"column"}
            justifyContent="flex-end"
            alignItems="flex-start"
            height="100%"
            padding={{ base: "10", md: "20" }}
          >
            <Text
              color={{ base: "white", md: "white" }}
              fontSize={{ base: "40px", md: "70px" }}
              fontWeight={"semibold"}
            >
              {t("homepage.title")}
            </Text>
            <Text
              color={myLightGray}
              fontSize={{ base: "16px", md: "22px" }}
              fontWeight={"light"}
            >
              {t("homepage.subtitle")}
            </Text>
          </Flex>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <Box
              h={{ base: "250px", md: "500px" }}
              bg="#DDDDDD"
              background="black"
              backgroundImage={"/img/homepage.jpg"}
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              borderRadius={{
                base: "0px 0px 00px 0px",
                md: "0px 30px 30px 0px",
              }}
              backgroundAttachment="scroll"
            />
          </GridItem>

          <GridItem colSpan={1} rowSpan={1}>
            <Flex
              direction={"column"}
              p={{ base: "10px", md: "100px" }}
              gap={3}
            >
              <GridContent
                title={t("homepage.companyProfile")}
                subtitle={t("homepage.companyProfileSubtitle")}
              />
              <Button
                borderRadius={"10px"}
                alignSelf={{ base: "center", md: "flex-start" }}
                bgColor={myLightGray}
              >
                {t("homepage.viewMore")}
              </Button>
            </Flex>
          </GridItem>

          <GridItem
            colSpan={1}
            rowSpan={{ base: 2, md: 1 }}
            p={{ base: "10px", md: "100px" }}
          >
            <Flex direction={"column"} gap={5}>
              <Heading color={"white"}>{t("homepage.ourServices")}</Heading>

              <ServiceWidget
                title={t("homepage.logoDesign")}
                description={t("homepage.logoDesignDescription")}
                number="01"
              />
              <ServiceWidget
                title={t("homepage.videoEditing")}
                description={t("homepage.videoEditingDescription")}
                number="02"
              />
              <ServiceWidget
                title={t("homepage.websiteDesign")}
                description={t("homepage.websiteDesignDescription")}
                number="03"
              />
            </Flex>
          </GridItem>

          <GridItem colSpan={1} rowSpan={{ base: 1, md: 2 }} pt="30px">
            <Box
              h={{ base: "250px", md: "500px" }}
              background="black"
              backgroundImage={"/img/meeting2.jpg"}
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              borderRadius={{
                base: "00px 00px 0px 0px",
                md: "30px 0px 0px 30px",
              }}
              backgroundAttachment="scroll"
            />
          </GridItem>
        </Grid>
        <Box bgColor={"white"} p={{ base: "30px", md: "100px" }}>
          <Flex direction={"column"} gap={3}>
            <Heading color={"black"}>{t("homepage.ourClientRoster")}</Heading>
            <Text fontSize={{ base: "14px", md: "16px" }} color={myGray}>
              {t("homepage.ourClientRosterSubtitle")}
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              justify={"space-between"}
              alignItems={{ base: "center" }}
            >
              <ClientRosterWidget
                image={"/img/meeting1.jpg"}
                title={t("homepage.client1")}
              />
              <ClientRosterWidget
                image={"/img/meeting1.jpg"}
                title={t("homepage.client2")}
              />
              <ClientRosterWidget
                image={"/img/meeting1.jpg"}
                title={t("homepage.client3")}
              />
              <ClientRosterWidget
                image={"/img/meeting1.jpg"}
                title={t("homepage.client4")}
              />
            </Flex>
          </Flex>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "auto", md: "auto" }}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <Box
              h={{ base: "250px", md: "500px" }}
              bg="#DDDDDD"
              background="black"
              backgroundImage={"/img/hand_shake.jpg"}
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              borderRadius={{
                base: "0px 0px 00px 00px",
                md: "0px 30px 30px 0px",
              }}
              backgroundAttachment="scroll"
            />
          </GridItem>

          <GridItem
            colSpan={1}
            rowSpan={1}
            color={"white"}
            p={{ base: "10px", md: "100px" }}
          >
            <Flex direction="column" gap={6}>
              <Heading>{t("homepage.letsWorkTogether")}</Heading>
              <ContactWidget
                title={t("homepage.mailingAddress")}
                subTitle="somewhere"
              />
              <ContactWidget
                title={t("homepage.phoneNumber")}
                subTitle="+123 123 123 123 123"
              />
              <ContactWidget
                title={t("homepage.emailAddress")}
                subTitle="somewhere"
              />
            </Flex>
          </GridItem>
        </Grid>

        <Box bgColor="white" p={{ base: "30px", md: "100px" }}>
          <Center>
            <Flex direction="column" gap={1} align="center">
              <Text
                color={"black"}
                fontSize={{ base: "28px", md: "50px" }}
                textAlign={"center"}
              >
                {t("homepage.ceoQuote")}
              </Text>
              <Text
                color={myGray}
                fontSize={{ base: "20px", md: "40px" }}
                textAlign={"center"}
              >
                {t("homepage.ceoName")}
              </Text>
            </Flex>
          </Center>
        </Box>
      </Flex>
    </Box>
  );

  function ClientRosterWidget({ title, image }) {
    return (
      <Card maxW="300px">
        <CardBody>
          <Image src={image} boxSize={"300px"} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    );
  }
  function ServiceWidget({ number, title, description }) {
    return (
      <Flex gap={3}>
        <Text color={myLightGray} fontSize={"40px"}>
          {number}
        </Text>
        <Flex direction="column">
          <Text fontSize={"40px"} color={"white"}>
            {title}
          </Text>
          <Text color={myLightGray}>{description}</Text>
        </Flex>
      </Flex>
    );
  }

  function ContactWidget({ title, subTitle }) {
    return (
      <Flex direction={"column"}>
        <Text fontSize={"25px"}>{title}</Text>
        <Text fontSize={"22px"}>{subTitle}</Text>
      </Flex>
    );
  }
}
