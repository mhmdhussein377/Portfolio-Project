import React from 'react'
import Link from "next/link"

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto fugiat
                        debitis perferendis odio ad totam illum voluptate? Voluptate esse itaque in
                        nostrum assumenda odit delectus nisi porro quod numquam aut et quasi voluptatem
                        aperiam labore, dicta asperiores fugit. Atque?
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt maxime
                        aliquam fuga dolor pariatur ut voluptate ipsum consectetur enim atque,
                        doloremque necessitatibus saepe dolorum nisi impedit beatae officia nulla magni
                        error. Ratione excepturi cumque, inventore praesentium provident illo explicabo.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div
                    className="w-full h-full shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img
                        src="/assets/about.jpg"
                        alt="/"
                        className="w-full h-full object-cover rounded-xl"/>
                </div>
            </div>
        </div>
    );
}

export default About