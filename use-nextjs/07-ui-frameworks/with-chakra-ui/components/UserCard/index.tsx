import Link from "next/link";
import {
  Box,
  Text,
  Avatar,
  Center,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "@/types/types";

const UserCard: React.FC<User> = ({
  username,
  avatar,
  first_name,
  last_name,
  job_title,
}) => {
  return (
    <Link href={`/user/${username}`} passHref>
      <>
        <VStack
          spacing="4"
          borderRadius="md"
          boxShadow="xl"
          padding="5"
          backgroundColor={useColorModeValue("gray.50", "gray.700")}
        >
          <Center>
            <Avatar size="lg" src={avatar} />
          </Center>
          <Center>
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="xl">
                {first_name} {last_name}
              </Text>
              <Text fontSize="xs"> {job_title}</Text>
            </Box>
          </Center>
        </VStack>
      </>
    </Link>
  );
};

export default UserCard;
