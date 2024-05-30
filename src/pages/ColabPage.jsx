import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const ColabPage = () => {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Google Colab Steganography Decoder
      </Heading>
      <iframe src="https://colab.research.google.com/drive/1lzJdYhmjusQxJKZQTnoGU9WUqsaEvxIC" width="100%" height="600px" frameBorder="0" allowFullScreen title="Google Colab Steganography Decoder"></iframe>
    </Box>
  );
};

export default ColabPage;
