import { useState } from 'react'
import ReactDOM from "react-dom/client";
import Loginpage from './pages/Loginpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatroompage from './pages/Chatroompage'
import Privateroute from './routes/Privateroute';
import { AuthProvider } from './context/Authcontext';
function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Loginpage/>} />
        <Route path="/chat" element={ <Privateroute><Chatroompage/></Privateroute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  )
}

export default App
