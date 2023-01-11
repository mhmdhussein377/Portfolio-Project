import React from 'react'
import Image from "next/image"

const Skills = () => {
    return (
        <div id='skills' className="w-full lg:h-screen p-4 py-16">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest text-[#5651e5] uppercase">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/html.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">HTML</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/css.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">CSS</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/javascript.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">Javascript</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/react.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">React</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/tailwind.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">Tailwind</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/nextjs.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">Nextjs</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/github1.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">Github</h3>
                        </div>
                    </div>
                    <div
                        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-between">
                        <div className="flex-1">
                            <Image
                                src="/assets/skills/firebase.png"
                                width="65"
                                height="65"
                                alt="/"
                                className="m-auto md:m-0"/>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="md:text-end">Firebase</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills