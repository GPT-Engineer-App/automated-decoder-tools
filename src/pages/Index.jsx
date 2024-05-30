import { useState } from "react";
import { Container, Text, VStack, Input, Button, Textarea, Box, Heading, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { FaLock, FaUnlock, FaImage, FaSearch } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTextChange = (e) => setInputText(e.target.value);

  const handleDecodeSteganography = () => {
    window.open("https://colab.research.google.com/drive/1lzJdYhmjusQxJKZQTnoGU9WUqsaEvxIC", "_blank");
  };

  const handleCipherAnalysis = () => {
    // Placeholder for cipher analysis logic
    setOutputText("Cipher analysis result: [Placeholder]");
  };

  const handleImageSearch = () => {
    // Placeholder for image search logic
    setImageUrl("https://images.unsplash.com/photo-1650177043873-ca284558be52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGVnYW5vZ3JhcGh5JTIwZXhhbXBsZXxlbnwwfHx8fDE3MTcwOTM5Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Advanced Decoding Tools
        </Heading>
        <Text fontSize="lg">Automated image steganography decoder, cryptography cipher analysis tools, and more.</Text>

        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>
            Steganography Decoder
          </Heading>
          <HStack>
            <Input placeholder="Enter image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            <IconButton aria-label="Search Image" icon={<FaSearch />} onClick={handleImageSearch} />
          </HStack>
          {imageUrl && <Image src={imageUrl} alt="Steganography Image" mt={4} />}
          <Button leftIcon={<FaImage />} colorScheme="teal" mt={4} onClick={handleDecodeSteganography}>
            Decode Steganography
          </Button>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>
            Cipher Analysis
          </Heading>
          <Textarea placeholder="Enter text for cipher analysis" value={inputText} onChange={handleTextChange} />
          <Button leftIcon={<FaLock />} colorScheme="teal" mt={4} onClick={handleCipherAnalysis}>
            Analyze Cipher
          </Button>
        </Box>

        {outputText && (
          <Box width="100%" mt={4} p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="sm">
              Output
            </Heading>
            <Text mt={2}>{outputText}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
