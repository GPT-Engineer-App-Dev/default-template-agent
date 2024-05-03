import { Container, Text, VStack, Icon } from "@chakra-ui/react";
import { FaSmile } from 'react-icons/fa';

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Text fontSize="lg">Welcome to your new site!</Text>
        <Icon as={FaSmile} w={10} h={10} color="brand.700" />
      </VStack>
    </Container>
  );
};

export default Index;