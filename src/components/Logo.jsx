import React from 'react'
import Imagem from '../assets/LogoITAJR.png'
import './Logo.css'

export default props => {
    return (
        <div className="img">
            <img src={Imagem} alt="Logo" />

        </div>
    )
}