import { Box, Button, Container, FormControl, FormLabel, Heading, Image, Select } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'


const ClassTopic = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState("");
    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState('');
    const [limite, setLimite] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value);
    }
    const handleChange1 = (e) => {
        const { value, name } = e.target;
        if (name === "limite") {
            setLimite(value);
        } else if (name === 'difficulty') {
            setDifficulty(value);
        }
    }

    const handleTopic = () => {
        localStorage.setItem("topic", formData);
        localStorage.setItem("difficulty", difficulty);
        localStorage.setItem("limite", limite);
        navigate("/mcqpage")
    }

    const getCategory = () => {
        axios.get(`https://the-trivia-api.com/api/categories`).then((res) => {
            setCategory(res.data)
        })
    }
    useEffect(() => {
        getCategory();
    }, [])
    /*for (let key in category) {
        console.log(key);
    }*/
    //console.log(formData);
    //console.log(category[`${formData}`]);
    return (
        <Container mt={'73px'} bg={'#d1d5d630'} maxW='container.lg' p='50px'>
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <Heading fontFamily={'cursive'}>Select Topic / Class</Heading>
                <Image w='50%' src='https://linkpicture.com/q/Rp-removebg-preview-1.png' />
            </Box>
            <Box mt={'50px'}>
                <FormControl >
                    <FormLabel>Chose Subject *</FormLabel>
                    <Select name='class' onChange={handleChange} placeholder='Select Your Subject'>
                        {
                            Object.entries(category).map(([key, val]) =>
                                <option name='class' key={key} value={val}>{key}</option>
                            )
                        }
                    </Select>
                    <FormLabel>Difficulty *</FormLabel>
                    <Select name='difficulty' onChange={handleChange1} placeholder='Select Your Difficulty'>
                        <option value={'easy'}>Easy</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'hard'}>Hard</option>
                    </Select>
                    <FormLabel>Limite *</FormLabel>
                    <Select name='limite' onChange={handleChange1} placeholder='Select Your Limite'>
                        <option value={"5"}>05</option>
                        <option value={'10'}>10</option>
                        <option value={'15'}>15</option>
                    </Select>
                    <Button p={3}
                        position='none'
                        color='white'
                        fontWeight='bold'
                        fontSize={'md'}
                        borderRadius='md'
                        mt='50px'
                        w='100%'
                        gap='10px'
                        bgGradient='linear(to-r, teal.500, green.500)'
                        _hover={{
                            bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                        onClick={handleTopic}
                    >Start Quiz<CiLocationArrow1 /></Button>
                </FormControl>
            </Box>
        </Container>
    )
}

export default ClassTopic