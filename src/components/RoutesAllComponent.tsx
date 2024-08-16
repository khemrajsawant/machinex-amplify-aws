import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Master from "../pages/Master";
import Transactions from "../pages/Transactions";
import Reports from "../pages/Reports";



export default function RoutesAllComponent() {
  return (
    <Routes>
    {/* Main_Routes          */}

    <Route path="/" element={<Home />} />
    <Route path="/master" element={<Master  />} />
    <Route path="/transactions" element={<Transactions  />} />
    <Route path="/reports" element={<Reports  />} />


    {/* Company */}

 
    {/* Generic */}
    <Route path="*" element={<Home />} />
  </Routes>
  )
}
