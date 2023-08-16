import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { myLightGray } from "../../colors"; 
import { Link } from "react-router-dom";


export default function RequestCard({ isAdmin, isLoading = true, type, status,requestNumber , request_id }) {

  return (
    isLoading ?
      <Card borderTop="8px" borderColor={myLightGray} bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Box>
              <Skeleton height="20px" width="120px" />
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Skeleton height="16px" width="80px" mb="2" />
          <Skeleton height="16px" width="60px" />
        </CardBody>
        <Divider borderColor="gray.200" />
        <CardFooter>
          <HStack>
            <Skeleton height="24px" width="60px" />
            {!isAdmin && <Skeleton height="24px" width="60px" />}
          </HStack>
        </CardFooter>
      </Card>
      :
      <Card borderTop="8px" borderColor={myLightGray} bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Box>
              <Heading as="h3" size="sm">
                {type} Request
              </Heading>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>N.of Request {requestNumber}</Text>
          <Text>{status}</Text>
        </CardBody>
        <Divider borderColor="gray.200" />
        <CardFooter>
          <HStack>
            <Link to={isAdmin ? `/admin/requests/${request_id}` : `request/${request_id}`}>
              <Button variant="ghost" leftIcon={<ViewIcon />}>
                View
              </Button>
            </Link>
            {/* {!isAdmin && <Button variant="ghost" leftIcon={<AiOutlineDelete />}>
              Delete
            </Button>} */}
          </HStack>
        </CardFooter>
      </Card>
  );
}
