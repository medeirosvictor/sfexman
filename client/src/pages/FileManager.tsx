import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { FixedSizeList as List } from 'react-window';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FileManager = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileContent } = location.state || {};
  const [exportType, setExportType] = useState('Catalog Export');

  useEffect(() => {
    if (!fileContent) {
      navigate('/', { state: { error: 'No file content found. Please upload a file first.' } });
    }
  }, [fileContent, navigate]);

  if (!fileContent) {
    return null;
  }

  const lines = fileContent.split('\n');

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={{ ...style, whiteSpace: 'pre-wrap' }}>
      <SyntaxHighlighter language="xml" style={solarizedlight} PreTag="div">
        {lines[index]}
      </SyntaxHighlighter>
    </div>
  );

  const handleCleanEmptyTags = () => {
    // Implement logic to clean empty tags
    console.log('Clean Empty Tags clicked');
  };

  const handleAddPrefixToProductIds = () => {
    // Implement logic to add prefix to product IDs
    console.log('Add Prefix to Product Ids clicked');
  };

  const handleStandardizeImagePaths = () => {
    // Implement logic to standardize image paths
    console.log('Standardize Image Paths clicked');
  };

  const handleKeepOnlyProductTags = () => {
    // Implement logic to keep only product tags
    console.log('Keep Only Product Tags clicked');
  };

  const handleKeepOnlyListOfProducts = () => {
    // Implement logic to keep only list of products
    console.log('Keep Only List of Products clicked');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.100"
      fontFamily="Arial, sans-serif"
    >
      <Text fontSize="2xl" color="gray.700" mb={4}>
        File Manager
      </Text>
      <Box
        width="80%"
        height="60%"
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        overflow="auto"
      >
        <List
          height={500}
          itemCount={lines.length}
          itemSize={40}
          width="100%"
        >
          {Row}
        </List>
      </Box>
      <Text fontSize="lg" color="gray.700" mt={4}>
        Type of XML Export: {exportType}
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mt={4}>
        <Button colorScheme="blue" onClick={handleCleanEmptyTags}>
          Clean Empty Tags
        </Button>
        <Button colorScheme="blue" onClick={handleAddPrefixToProductIds}>
          Add Prefix to Product Ids
        </Button>
        <Button colorScheme="blue" onClick={handleStandardizeImagePaths}>
          Standardize Image Paths
        </Button>
        <Button colorScheme="blue" onClick={handleKeepOnlyProductTags}>
          Keep Only Product Tags
        </Button>
        <Button colorScheme="blue" onClick={handleKeepOnlyListOfProducts}>
          Keep Only List of Products
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default FileManager;