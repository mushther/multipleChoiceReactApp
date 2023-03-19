import { Box, Button, ButtonGroup, Container, Divider, Heading, Image, Radio, RadioGroup, Skeleton, Spacer, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const McqPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false)
    const [header, setHeader] = React.useState('Header')
    const [id, setId] = React.useState(0)
    const [data, setData] = React.useState([]);
    const [canswer, setCanswer] = React.useState('');
    const [user_answer, setUser_answer] = React.useState('');
    const [result, setResult] = React.useState(0);
    const [flag, setFlag] = React.useState(true);


    const [topic] = useState(localStorage.getItem("topic"));
    const [difficulty] = useState(localStorage.getItem("difficulty"));
    const [limite] = useState(localStorage.getItem("limite"));

    const getData = () => {
        setLoading(true);
        axios.get(`https://the-trivia-api.com/api/questions?categories=${topic}&limit=${limite}&difficulty=${difficulty}`).then((res) => {
            setHeader(res.data[1].category);
            setData(res.data)
            setLoading(false);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const handleChange = (value) => {
        setUser_answer(value);
        setCanswer(data[id].correctAnswer);
        setFlag(false)
    }
    // console.log(canswer + "/" + user_answer);
    //console.log(result)
    const handleScore = () => {
        if (id <= data.length - 1) {
            setId(id + 1);
        }
        if (canswer === user_answer) {
            setResult(result + 1);
            setUser_answer('');
        }
        setFlag(true)

    }
    const handelReset = () => {
        setResult(0);
        navigate("/")
    }

    return (

        <Container mt={'73px'} bg={'#d1d5d630'} maxW='container.lg' p='50px'>
            <Heading>{header}</Heading>
            <Image m='auto' w='40%' src='https://linkpicture.com/q/b96629ed45604c42f44011f6704f2c3c-removebg-preview.png' />
            {id === data.length ?
                <Box>
                    <Heading mt={'50px'}>Total Score: {result}/{data.length}</Heading>
                    <Button mt={'50px'} _hover={{ border: "2px solid black", fontWeight: 'bold' }} onClick={handelReset}>Start Again</Button>
                </Box>
                : <Box>
                    {loading ?
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='15px' />
                            <Skeleton height='15px' />
                            <Skeleton height='15px' />
                            <Skeleton height='15px' />
                        </Stack> :

                        <Box>
                            <Text mt='20px' textAlign={'end'}>{id + 1}/{data.length}</Text>
                            {data.map((el, i) => (
                                <Box key={el.id}>
                                    {i === id ? <Box>
                                        <Heading size='md' textAlign={'start'}>Q. No {i + 1}. {el.question}?</Heading>
                                        <RadioGroup>

                                            <Stack w='95%' m='auto' mt={'20px'} mb='20px'>
                                                <Radio onChange={(e) => { handleChange(e.target.name) }} name={el.incorrectAnswers[0]} value='1'>{el.incorrectAnswers[0]}</Radio>
                                                <Radio onChange={(e) => { handleChange(e.target.name) }} name={el.incorrectAnswers[1]} value='2'>{el.incorrectAnswers[1]}</Radio>
                                                <Radio onChange={(e) => { handleChange(e.target.name) }} name={el.incorrectAnswers[2]} value='3'>{el.incorrectAnswers[2]}</Radio>
                                                <Radio onChange={(e) => { handleChange(e.target.name) }} name={el.correctAnswer} value='4'>{el.correctAnswer}</Radio>
                                            </Stack>
                                        </RadioGroup>

                                    </Box> : null}
                                </Box>))}
                        </Box>}
                </Box>}
            <Spacer />
            <br />
            <Divider />
            <Spacer />
            <ButtonGroup mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                <Button _hover={{ border: "2px solid black", fontWeight: 'bold' }} isDisabled={id <= 0 || id === data.length ? true : false} onClick={() => { setId(id - 1) }}>Prev</Button>
                <Button _hover={{ border: "2px solid black", fontWeight: 'bold' }} isDisabled={id === data.length ? true : false || flag} onClick={handleScore}>Next</Button>
            </ButtonGroup>
        </Container>
    )
}

export default McqPage