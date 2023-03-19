import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineClass } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const CardClass = ({ title, topic }) => {
    const navigate = useNavigate();

    const handleTopic = (topic) => {
        localStorage.setItem("topic", topic);
        localStorage.setItem("difficulty", "medium");
        localStorage.setItem("limite", 10);
        navigate("/mcqpage")
    }
    return (
        <Box
            onClick={() => handleTopic(topic)}
            display={'flex'}
            flexDirection='column'
            alignItems='center'
            gap='15px'
            mt='15px'
            borderLeft={'10px solid teal'}
            p='10px' bg={'white'}
            boxShadow={' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}
            borderRadius={'10px'}
            _hover={{
                width: '101%',
                border: '1px solid red',
                borderLeft: '10px solid red'
            }}
        >
            <Text fontSize={'5xl'}><MdOutlineClass /></Text>
            <Heading size={'md'}>{title}</Heading>
        </Box>
    )
}

export default CardClass