
import { Box, Container, Flex, Heading, Button, Grid, Image } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import CardClass from '../components/CardClass';
import CardSkill from '../components/CardSkill';


const Home = () => {
    const [category, setCategory] = useState([]);
    const getCategory = () => {
        axios.get(`https://the-trivia-api.com/api/categories`).then((res) => {
            setCategory(res.data)
        })
    }
    useEffect(() => {
        getCategory();
    }, [])

    return (
        <Container mt={'73px'} bg={'#d1d5d630'} maxW='container.lg' p='50px'>
            <Box display={'flex'} textAlign={'start'} w='100%' p='10px' bg={'white'} boxShadow={' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'} borderRadius={'10px'}>
                <Box display={'flex'} flexDirection='column' justifyContent={'center'}>
                    <Heading size={'xl'}>Test Your</Heading>
                    <Heading
                        p='0px 5px 15px 0px'
                        fontSize={'6xl'}
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        fontWeight='extrabold'
                    >Knowledge</Heading>
                    <Link to={'/classtopic'}>
                        <Button p={3}
                            position='none'
                            color='white'
                            fontWeight='bold'
                            fontSize={'md'}
                            borderRadius='md'
                            w='50%'
                            gap='10px'
                            bgGradient='linear(to-r, teal.500, green.500)'
                            _hover={{
                                bgGradient: 'linear(to-r, red.500, yellow.500)',
                            }}>Start Quiz<CiLocationArrow1 /></Button>
                    </Link>
                </Box>
                <Image display={'block'} m='auto' w={'50%'} alignItems={'end'} src='https://linkpicture.com/q/b83feaa4-7ca3-4b55-a7a0-95992022c42c-6a4271bb-removebg-preview.png' />
            </Box>
            <Flex mt={'50px'} justifyContent={'space-between'} >
                <CardSkill title={'General Knowledge'} topic={'general_knowledge'} />
                <CardSkill title={'Society & Culture'} topic={'society_and_culture'} />
                <CardSkill title={'Sport & Leisure'} topic={'sport_and_leisure'} />
            </Flex>
            <Heading mt='30px' mb='30px' fontWeight={'bold'} textAlign={'start'}>Topic Wise</Heading>
            <Grid gridTemplateColumns={'repeat(4,1fr)'} gap='15px'>
                {
                    Object.entries(category).map(([key, val]) =>
                        <CardClass title={key} topic={val} />
                    )
                }
            </Grid >

        </Container>
    )
}

export default Home