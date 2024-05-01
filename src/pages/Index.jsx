import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaTicketAlt, FaInfoCircle, FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Heading as="h1" size="2xl" mb={4}>
          The Rock Legends
        </Heading>
        <Text fontSize="xl" mb={6}>
          Join us on our world tour and experience the magic live!
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGxpdmUlMjBjb25jZXJ0fGVufDB8fHx8MTcxNDU5Mjc4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rock Legends Live" mb={4} />
        <VStack spacing={4} align="stretch">
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
            Buy Tickets
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="gray" variant="outline">
            Learn More
          </Button>
          <Button leftIcon={<FaMusic />} colorScheme="pink" variant="ghost">
            Listen Now
          </Button>
        </VStack>
        <Spacer />
        <HStack spacing={8} mt={10}>
          <Text>© 2023 The Rock Legends</Text>
          <Text>|</Text>
          <Text>Privacy Policy</Text>
          <Text>|</Text>
          <Text>Terms of Use</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
