import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';

const HomePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'text/xml') {
        setFile(selectedFile);
        setError(null);
      } else {
        setError('Please upload a valid XML file.');
        setFile(null);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result as string;
        navigate('/file-manager', { state: { fileContent } });
      };
      reader.readAsText(file);
    } else {
      setError('No file selected or invalid file type.');
    }
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
        Upload XML File
      </Text>
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <Box
          position="relative"
          width="100%"
          maxWidth="400px"
          css={css`
            input[type='file'] {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
            }
          `}
        >
          <Input
            type="file"
            accept=".xml"
            onChange={handleFileChange}
            css={css`
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
              &:focus {
                outline: none;
                border-color: #63b3ed;
              }
            `}
          />
          <Box
            as="label"
            htmlFor="file-upload"
            display="block"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="4px"
            textAlign="center"
            backgroundColor="white"
            cursor="pointer"
            _hover={{ backgroundColor: '#f0f0f0' }}
            _focus={{ borderColor: '#63b3ed' }}
          >
            Choose File
          </Box>
        </Box>
        <Button
          type="submit"
          colorScheme="blue"
          css={css`
            padding: 10px 20px;
            border-radius: 4px;
          `}
          isDisabled={!file}
        >
          Upload
        </Button>
      </VStack>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      {file && (
        <Text color="gray.700" mt={4}>
          Selected file: {file.name}
        </Text>
      )}
    </Box>
  );
};

export default HomePage;