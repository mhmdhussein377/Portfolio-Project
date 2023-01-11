import Image from 'next/image'
import React from 'react'
import PropertyImg from "./../public/assets/projects/property.jpg"
import CryptoImg from "./../public/assets/projects/crypto.jpg"
import NetflixImg from "./../public/assets/projects/netflix.jpg"
import TwitchImg from "./../public/assets/projects/twitch.jpg"
import Link from "next/link"
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div className="w-full" id="projects">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        backgroundImage={PropertyImg}
                        title="Property Finder"
                        Tech="React JS"
                        projectUrl="/property"/>
                    <ProjectItem
                        backgroundImage={CryptoImg}
                        title="Crypto App"
                        Tech="React JS"
                        projectUrl="/crypto"/>
                    <ProjectItem
                        backgroundImage={NetflixImg}
                        title="Netflix UI"
                        Tech="React JS"
                        projectUrl="/netflix"/>
                    <ProjectItem
                        backgroundImage={TwitchImg}
                        title="Twitch UI"
                        Tech="React JS"
                        projectUrl="/twitch"/>
                </div>
            </div>
        </div>
    );
}

{/* <img src="/assets/projects/netflix.jpg" alt="/" className='rounded-xl' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[#5451e5] flex flex-col items-center justify-center text-white hidden rl'>
                        <h3 className='text-3xl'>Property Finder</h3>
                        <p className='py-4 text-xl'>React JS</p>
                        <button className='py-2 px-7 text-black bg-gradient-to-r from-white to-white rounded-lg'>More Info</button>
                    </div> */
}

export default Projects