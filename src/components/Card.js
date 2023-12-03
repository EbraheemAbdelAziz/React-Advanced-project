import {Spacer , Link,Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <Box    bg='white' borderRadius='xl' overflow='hidden' p={4} >
    <VStack>
    <Image src={imageSrc} borderRadius='xl'/>
    <Heading color='black' >{title}</Heading>
    <Text color='black' p={4} >{description}</Text>
  </VStack>
    <HStack p={5}>
      <Link><Heading color="black" size="xs">See More</Heading></Link>
      <FontAwesomeIcon icon={faArrowRight} color="black" />
    </HStack>
  </Box>
};

export default Card;
