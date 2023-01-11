import React from 'react'
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Main = () => {
    return (
        <div className="w-full h-screen text-center" id='home'>
            <div
                className="max-w-[1240px] mx-auto w-full h-full p-2 flex items-center justify-center">
                <div>
                    <p className="text-sm tracking-widest text-gray-600">
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm
                        <span className="text-[#5651e5]"> Mohammad</span>
                    </h1>
                    <h1 className="pb-2 text-gray-700">A Front-End Web Developer</h1>
                    <p className="py-2 text-gray-600 sm:max-w-[70%] m-auto">
                        I'm a front-end web developer specializing in building (and occasionally
                        designing) exceptional digital experieces. Currently, I'm focused on building
                        responsive front-end web applications
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main