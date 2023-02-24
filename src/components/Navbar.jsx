
import { Box, Button, ButtonGroup, Flex, Heading, Input, Spacer } from '@chakra-ui/react'
import React from 'react'
import { GoDiffAdded } from "react-icons/go";
import { BsListUl } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex m={0} top={0} w={'100%'} position={'fixed'} minWidth='max-content' bg={'#e5d2d2a9'} alignItems='center' gap='2' p='10px'>
            <Box p='2'>
                <Link to='/'>
                    <Heading
                        size='md'
                        fontFamily={'4'}
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        fontSize='3xl'
                        fontWeight='extrabold'
                    >Online Quiz App</Heading>
                </Link>
            </Box>
            <Spacer />
            <Flex w='65%' alignItems={'center'}>
                <Input border={'1px solid grey'} placeholder='Search ' />
            </Flex>
            <ButtonGroup gap='2'>
                <Link to={'/classtopic'}>
                    <Button p={4}
                        color='white'
                        fontWeight='bold'
                        display={'flex'}
                        gap='10px'
                        alignItems={'center'}
                        borderRadius='md'
                        bgGradient='linear(to-r, teal.500, green.500)'
                        _hover={{
                            bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}><BsListUl /> Start Quiz Test</Button>
                </Link>
                <Button p={4}
                    color='white'
                    fontWeight='bold'
                    borderRadius='md'
                    bgGradient='linear(to-r, teal.500, green.500)'
                    _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                    }}><GoDiffAdded /></Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Navbar