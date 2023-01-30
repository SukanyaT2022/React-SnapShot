import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

const App = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box border="2px solid black">
        <Box>
          <Text fontSize="5xl" fontWeight="800" fontFamily="sans-serif">
            SnapShot
          </Text>
        </Box>

        <Box display="flex">
          <Input placeholder="Search..." />

          <Button
            size="md"
            height="48px"
            width="100px"
            border="2px"
            borderColor="green.500"
          >
            Button
          </Button>
        </Box>

        <Box>
          <h2>button</h2>
        </Box>
      </Box>

      <Box border="2px solid red">
        <h2>Hello</h2>
      </Box>
    </Box>
  );
};

export default App;
