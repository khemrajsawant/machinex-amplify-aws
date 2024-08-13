import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Master from "../pages/Master";


export default function RoutesAllComponent() {
  return (
    <Routes>
    {/* Main_Routes          */}

    <Route path="/" element={<Home />} />
    <Route path="/master" element={<Master  />} />


    {/* Company */}

 
    {/* Generic */}
    <Route path="*" element={<Home isMaster={true} />} />
  </Routes>
  )
}
