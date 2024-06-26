import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/colab" colorScheme="teal" variant="ghost">
          Colab Decoder
        </Button>
      </Flex>
    </Box>
  );
};

export default Navigation;
