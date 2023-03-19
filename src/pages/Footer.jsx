import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaChartLine, FaBrain, FaMoneyCheck, FaPhone, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <Container bg={'black'} maxW='container.lg' p='50px' color={'white'}>
            <Flex justifyContent={'space-around'}>
                <Box textAlign={'start'}>
                    <Heading><FaChartLine /> </Heading>
                    <Heading size={'md'}>Improve Your Knowledge</Heading>
                    <Text>Esey Select Your Topic</Text>
                    <Text>Esey Read Your Topic</Text>
                </Box>
                <Box textAlign={'start'}>
                    <Heading><FaBrain /> </Heading>
                    <Heading size={'md'}>Chose Your Topic</Heading>
                    <Text>With limite </Text>
                    <Text>With Catogoery</Text>
                </Box>
                <Box textAlign={'start'}>
                    <Heading><FaMoneyCheck /> </Heading>
                    <Heading size={'md'}>Show Your Score</Heading>
                    <Text>Show your Score with out limite</Text>
                    <Text>add score easly</Text>
                </Box>
            </Flex>
            <Flex justifyContent={'center'} gap='5px' mt={'40px'} alignItems='center'>
                <Heading size={'md'}>Contact us: </Heading>
                <Text><FaPhone /></Text>
                <Text><FaTwitter /></Text>
                <Text><FaFacebook /></Text>
            </Flex>
            <Text>Last update :- 25/02/2023 </Text>
            <Text>Copyright 2023 </Text>
        </Container>
    )
}

export default Footer