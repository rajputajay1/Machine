import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './Aboutus/AboutUs'
import Contect from './Contect/Contect'
import Turnkkey from './Turnkey/Turnkkey'
import Home from './Home/Home'
import ChemicalMachine from './MachineTypes/ChemicalMachine'
import CapsuleMachine from './MachineTypes/CapsuleMachine'
import LiquidMachine from './MachineTypes/LiquidMachine'
import Pharma from './MachineTypes/Pharma'
const Index = () => {
    return (
        <>
            <Header />
            <Routes>
             
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contect" element={<Contect />} />
                    <Route path="/turnkey-projects" element={<Turnkkey />} />
                    <Route path="/capsule-machine" element={<CapsuleMachine />} />
                    <Route path="/liquid-machine" element={<LiquidMachine />} />
                    <Route path="/chemical-machine" element={<ChemicalMachine />} />
                    <Route path="/pharma-machine" element={<Pharma />} />
                
            </Routes>

            <Footer />
            
            
        </>
  )
}

export default Index