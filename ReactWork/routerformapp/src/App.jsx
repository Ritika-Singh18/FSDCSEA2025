import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";

function App() {


  const [logData,setlogData] = useState();

  return (
    <>
      
      {/* <h2>Welcome to React Routing</h2> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<MainLayout />}></Route>
          <Route path='/login' element={<Login loginData={logData}/>}></Route>
          <Route path='/register' element={<Registration regData={setlogData}/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
      <h5>{JSON.stringify(logData)}</h5>
    </>
  );
}


export default App;
