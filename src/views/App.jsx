import React from 'react'
import { BrowserRouter } from  'react-router-dom'
import Navbar from '../components/Navbar'
import Content from '../components/Content'


export default props => {
    return (
    <div>
        <BrowserRouter>
            <Navbar></Navbar>
            <Content></Content>
        </BrowserRouter>
    </div>
    )
    
}