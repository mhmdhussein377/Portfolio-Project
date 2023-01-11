import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillPersonLinesFill} from "react-icons/bs";
import {useRouter} from "next/router"
import navLogo from "./../public/assets/navLogo.png"

const Navbar = () => {

    let [nav,
        setNav] = useState(false);
    let [shadow,
        setShadow] = useState(false);
    let [navBg,
        setNavBg] = useState("#ecf0f3");
    let [linkColor,
        setLinkColor] = useState("#1f2937");
    let [iconBg, setIconBg] = useState("black");
    let router = useRouter();

    let handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        let handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, []);

    useEffect(() => {
        if (router.asPath === "/property" || router.asPath === "/netflix" || router.asPath === "/crypto" || router.asPath === "/twitch") {
            setNavBg("transparent");
            setLinkColor("#ecf0f3");
            setIconBg("white");
        } else {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
            setIconBg("black");
        }
    }, [router])

    return (
        <div
            className={shadow
            ? "fixed w-full h-20 shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"}
            style={{
            background: `${navBg}`
        }}>
            <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src="/assets/navLogo.png" alt="logo" width="100" height="50"/>
                </Link>

                <div>
                    <ul
                        className="hidden md:flex"
                        style={{
                        color: `${linkColor}`
                    }}>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase">Contact</li>
                        </Link>
                    </ul>

                    <div className="md:hidden" onClick={handleNav}>
                        <AiOutlineMenu size={25} color={iconBg}/>
                    </div>
                </div>
            </div>

            <div
                className={nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""}>
                {/* Side Drawer Menu */}
                <div
                    className={nav
                    ? " fixed left-0 top-0 w-[90%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 eas" +
                        "e-in duration-500"
                    : "fixed left-[-150%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                
                                    <Image src={navLogo} width="87" height="35" alt="/"/>
                                
                            </Link>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/resume">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Resume
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-20">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <Link
                                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn/>
                                    </div>
                                </Link>
                                <Link href="https://github.com/fireclint" target="_blank" rel="noreferrer">
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub/>
                                    </div>
                                </Link>
                                <Link href="/#contact">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail/>
                                    </div>
                                </Link>
                                <Link href="/resume">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div
                className={nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""}>

                <div
                    className={nav
                    ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 eas" +
                        "e-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                    <Image src="/assets/navLogo.png" width="87" height="35" alt="/"/>
                            </Link>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/resume">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Resume
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn/>
                                    </div>
                                </a>
                                <a href="https://github.com/fireclint" target="_blank" rel="noreferrer">
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub/>
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail/>
                                    </div>
                                </Link>
                                <Link href="/resume">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Navbar