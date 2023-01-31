import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

const App = () => {
  return (
    // big component- snapshot component
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={50}
  
    >
      <Box border="2px solid black">
        <Box>
          <Text
            fontSize="5xl"
            fontWeight="800"
            fontFamily="sans-serif"
            textAlign="center"
          >
            SnapShot
          </Text>
        </Box>


        {/* searchbox */}
        <Box display="flex">
          <Input placeholder="Search..." width="400px" />

          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="green.500"
          >
            Click
          </Button>
        </Box>

        {/* 4 button */}

        <Box my="30px" display="flex" justifyContent="space-between">
          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="green.500"
          >
            Mountains
          </Button>

          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="green.500"
          >
            Beaches
          </Button>

          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="green.500"
          >
            Birds
          </Button>
          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="green.500"
          >
            Food
          </Button>
        </Box>
      </Box>

      <Box border="2px solid red">
        <h2>Hello</h2>
      </Box>
    </Box>
  );
};

export default App;
