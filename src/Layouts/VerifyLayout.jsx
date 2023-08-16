import React from "react";
import FormLayout from "./FormLayout";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function VerifyLayout({ imgUrl, title, answers }) {
  return (
    <FormLayout imgUrl={imgUrl}>
      <Flex direction={"column"} gap={3}>
        <Heading>{title}</Heading>

        <Flex fontSize={"18px"} gap={1}>
          <Text>{answers.first_name}</Text>
          <Text>{answers.last_name}</Text>
        </Flex>

        <Flex fontSize={"16px"}>
          <Text>
            {answers.email} | {answers.phone}
          </Text>
        </Flex>

        <Flex fontSize={"16px"}>
          <Text>
            {answers.country}/{answers.city}
          </Text>
        </Flex>
      </Flex>
    </FormLayout>
  );
}
