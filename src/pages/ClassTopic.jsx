import { Box, Button, Container, FormControl, FormLabel, Heading, Image, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const initialData = {
    class: "",
    subject: ""
}
const ClassTopic = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleTopic = () => {
        localStorage.setItem("topic", (formData.class + formData.subject));
        navigate("/mcqpage")
    }



    return (
        <Container mt={'73px'} bg={'#d1d5d630'} maxW='container.lg' p='50px'>
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <Heading fontFamily={'cursive'}>Select Topic / Class</Heading>
                <Image w='50%' src='https://linkpicture.com/q/Rp-removebg-preview-1.png' />
            </Box>
            <Box mt={'50px'}>
                <FormControl >
                    <FormLabel>Chose Class *</FormLabel>
                    <Select name='class' onChange={handleChange} placeholder='Select Your Class'>
                        <option name='class' value={'10th'}>Class 10th</option>
                        <option name='class' value={'9th'}>Class 9th</option>
                    </Select>
                    <FormLabel mt={'10px'}>Chose Subject *</FormLabel>
                    <Select name='subject' onChange={handleChange} placeholder='Select Your Subject'>
                        <option name='subject' value={'physics'}>Physics</option>
                        <option name='subject' value={'math'}>Math</option>
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