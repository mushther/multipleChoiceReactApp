
import { Container, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
const countryData = {
    data: [
        {
            country: "India",
            state: ["Bihar", "Delhi", "Punjab"]
        },
        {
            country: "Pakistan",
            state: ["Punjab", "Sindh", "Karachi"]
        },
        {
            country: "America",
            state: ["Wasington", "Newyourk", "Columbia"]
        }
    ]
}

const SelectFun = () => {
    const [data] = useState(countryData.data);
    const [index, setIndex] = useState(0);

    const handleChange = (i) => {
        setIndex(i);
    }
    return (
        <Container mt={'73px'} bg={'#7F807F'} maxW='container.sm' p='50px'>
            <Select placeholder='Select Country' onChange={(e) => { handleChange(e.target.value) }}>
                {data.map((el, i) => (
                    <option value={i}>{el.country}</option>
                ))}
            </Select>
            <br />
            <br />
            <Select placeholder='Select State'>
                {data[index].state.map((el) => (
                    <option>{el}</option>
                ))}
            </Select>
        </Container>
    )
}

export default SelectFun