import React from 'react';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Box
      as="header"
      width="100%"
      bg="blue.600"
      color="white"
      p={4}
      boxShadow="md"
    >
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="lg">
          {title}
        </Heading>
        <Spacer />
        <Flex>
          <Link href="/" p={2} color="white" _hover={{ textDecoration: 'underline' }}>
            Home
          </Link>
          <Link href="/file-manager" p={2} color="white" _hover={{ textDecoration: 'underline' }}>
            File Manager
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;