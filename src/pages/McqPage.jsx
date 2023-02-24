import { Box, Button, ButtonGroup, Container, Divider, Heading, Image, Radio, RadioGroup, Spacer, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const McqPage = () => {
    const [value, setValue] = React.useState('1')
    const [header, setHeader] = React.useState('Header')
    const [id, setId] = React.useState(0)
    const [data, setData] = React.useState([]);


    const [topic] = useState(localStorage.getItem("topic"));
    console.log(data);
    const getData = () => {
        axios.get(`https://the-trivia-api.com/api/questions?categories=${topic}}&limit=10&region=IN&difficulty=medium`).then((res) => {
            setHeader(res.data[1].category);
            setData(res.data)
        })
    }

    useEffect(() => {
        getData();
    }, [])


    return (

        <Container mt={'73px'} bg={'#d1d5d630'} maxW='container.lg' p='50px'>
            <Heading>{header}</Heading>
            <Image m='auto' w='40%' src='https://linkpicture.com/q/b96629ed45604c42f44011f6704f2c3c-removebg-preview.png' />
            <Text mt='20px' textAlign={'end'}>{id + 1}/10</Text>
            {data.map((el, i) => (
                <Box>
                    <Heading size='md' textAlign={'start'}>Q. No {i + 1}. {el.question}?</Heading>
                    <RadioGroup mt='20px' onChange={setValue} value={value}>
                        <Stack w='95%' m='auto' mt={'20px'} mb='20px'>
                            <Radio value='1'>{el.incorrectAnswers[0]}</Radio>
                            <Radio value='2'>{el.incorrectAnswers[1]}</Radio>
                            <Radio value='3'>{el.incorrectAnswers[2]}</Radio>
                            <Radio value='4'>{el.correctAnswer}</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>))}
            <Spacer />
            <br />
            <Divider />
            <Spacer />
            <ButtonGroup mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                <Button isDisabled={id <= 0 ? true : false} onClick={() => { setId(id - 1) }}>Prev</Button>
                <Button isDisabled={id == 9 ? true : false} onClick={() => { setId(id + 1) }}>Next</Button>
            </ButtonGroup>
        </Container>
    )
}

export default McqPage