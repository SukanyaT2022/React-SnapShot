import React, { useState } from 'react';
import { Box, Button, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
//  above search icon from react -import

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // eslint-disable-next-line
  const [value,setValue] = useState(1);

  return (
    //this box control the whole box
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={50}
    >
      {/* // big component- snapshot component */}
      <Box  padding={10}>
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

          <Button size="md" height="40px" width="60px" backgroundColor="black">
            {/* searchIcon put in < /> put inside from copied */}
            <FaSearch color="white" />
          </Button>
        </Box>

        {/* 4 button */}

        <Box my="30px" display="flex" justifyContent="space-between">
          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="black"
          >
            Mountains
          </Button>

          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="black"
          >
            Beaches
          </Button>

          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="black"
          >
            Birds
          </Button>
          <Button
            size="md"
            height="40px"
            width="100px"
            border="2px"
            borderColor="black"
          >
            Food
          </Button>
        </Box>
      </Box>

      {/* sectionbelow component below-pictures*/}
      <Box  marginTop="20px">
        <h2 fontWeight="bold" fontSize="20px">Mountain Pictures</h2>
      </Box>
      {/* this is first box for mountain */}
      {
        // eslint-disable-next-line
     (value = 1)?
      <Box
        display="grid"
        justifyItems="center"
        height="500px"
        width="80%"
        marginTop="20px"
      >
        <Box>Hello</Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={3} placeItems="center">
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="150"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>

          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="50%">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
        </Grid>
      </Box>

    :
      <Box
        display="grid"
        justifyItems="center"
        height="500px"
        width="80%"
        marginTop="20px"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={3} placeItems="center">
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="150"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
           
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
           
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
           
              h="45px"
              w="45px"
            />
          </GridItem>

          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="50%">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
          <GridItem w="100%" h="150">
         
            <img
              style={{ height: '200px', width: '200px' }}
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="mountain"
              h="45px"
              w="45px"
            />
          </GridItem>
        </Grid>
      </Box>
      }
    </Box>

  );
};

export default App;
