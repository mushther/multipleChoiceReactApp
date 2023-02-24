
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassTopic from '../pages/ClassTopic'
import Home from '../pages/Home'
import McqPage from '../pages/McqPage'

const AllRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classtopic' element={<ClassTopic />} />
            <Route path='/mcqpage' element={<McqPage />} />
        </Routes>
    )
}

export default AllRouting