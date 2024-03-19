import React, { useEffect } from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/logo192.png";
import axios from "axios";
import { useState } from "react";


const Header = () => {
    const [userdata, setUserdata] = useState({});
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true,
    }
    const getUserData = async () => {
        try{
            const response = await axios.get("http://localhost:8000/login/sucess", { withCredentials: true, headers: headers });
            console.log("response data user", response);
            setUserdata(response.data.user);
        } catch(err){
            console.log("error", err);
        }
    }

    // logoout
    const logout = ()=>{
        window.open("http://localhost:8000/logout","_self")
    }

    useEffect(() => {
        getUserData()},
        []
    );
    return (
        <div id="header" className="flex bg-purple-300 font-serif font-semibold text-gray-100">
            <nav className="flex flex-row justify-start w-full p-4">
                <div id="header-left" className="flex flex-row justify-start w-full p-4">
                    <h1 className="text-4xl  font-serif">KaayaClique</h1>
                </div>
                <div id="header-right" className="flex flex-row justify-evenly w-full p-4">
                    <ul className="flex flex-wrap">
                        <li>
                            <NavLink to="/" className="m-4">Home</NavLink>
                        </li>
                        {
                            Object?.keys(userdata)?.length > 0 ? (
                                <>
                                
                                <li>
                                     <NavLink to="/dashboard" className="m-4">Dashboard</NavLink>
                                </li>
                                
                                <li>
                                    <h1 className=" text-yellow-200 font-bold inline-block">{userdata?.displayName}</h1>
                                </li>                                
                                <li>
                                    <img src={userdata?.image} alt="logo" className="w-8 h-8 m-2 justify-center rounded-full"/>
                                </li>
                                <li onClick={logout}>
                                    Logout
                                </li> 
                             </>
                            ) : <li>
                                    <NavLink to="/login" className="m-4">Login</NavLink>
                                </li>
                        }
                        
                        
                       
                            
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Header;