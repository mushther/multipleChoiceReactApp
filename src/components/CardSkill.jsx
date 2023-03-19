import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const CardSkill = ({ title, topic }) => {
    const navigate = useNavigate();

    const handleTopic = (topic) => {
        localStorage.setItem("topic", topic);
        localStorage.setItem("difficulty", "medium");
        localStorage.setItem("limite", 10);
        navigate("/mcqpage")
    }
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems='center'
            gap='15px'
            w='30%'
            mt='15px'
            borderTop={'10px solid teal'}
            p='10px'
            bg={'white'}
            boxShadow={' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}
            borderRadius={'10px'}>
            <Box>
                <Heading size={'md'} mb='10px'>{title}</Heading>
                <Button
                    w='100%'
                    position='none'
                    color='white'
                    fontWeight='bold'
                    borderRadius='md'
                    gap='10px'
                    bgGradient='linear(to-r, teal.500, green.500)'
                    _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                    }}
                    onClick={() => { handleTopic(topic) }}
                >Start Quiz</Button>
            </Box>
            <Text fontSize={'5xl'}><FaArrowCircleUp /></Text>

        </Box>
    )

}

export default CardSkill