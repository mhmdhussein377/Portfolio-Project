import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

const ProjectItem = ({backgroundImage, title, projectUrl, Tech}) => {
    return (
        <div
            className="ease-in duration-500 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image src={backgroundImage} alt="/" className="rounded-xl group-hover:opacity-20"/>
            <div className="absolute text-center text-white hidden group-hover:block ease-in duration-1000">
                <h3 className="text-3xl tracking-widest">{title}</h3>
                <p className="pb-4 pt-2 text-xl">{Tech}</p>
                <Link href={projectUrl}>
                    <p
                        className="py-3 w-2/3 mx-auto rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default ProjectItem