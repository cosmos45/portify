"use client";
import React from "react"
import {motion} from "framer-motion"
import {links} from "@/lib/data"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="z-[40] relative">
              <div className="fixed top-7 left-6 p-2 hidden sm:block">
               
                 
                        <Image src="/omkar..png" alt="Logo"
                         width={150} height={150} 
                         />
                        {/* Adjust size as needed */}
                        
                  
            
            </div>



            <motion.div className="fixed top-0 left-1/2
              h-[4.5rem] 
              rounded-none border
               border-white
               border-opacity-70  w-full
                bg-neutral-950 bg-opacity-80 shadow-lg
                shadow-black backdrop-blur-[0.5rem]  
                sm:top-6 sm:h-[3.25rem]
                 sm:w-[36rem] 
                sm:rounded-full"

                        initial={{y: -100, x: "-50%", opacity: 0}}
                        animate={{y: 0, x: "-50%", opacity: 1}}
            >


            </motion.div>


            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
            py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 
            ">


                

                <ul className="flex w-[22rem] flex-wrap items-center justify-center
                gap-y-1 text-[0.9rem]
                 text-gray-300 font-semibold sm:w-[initial] sm:flex-nowrap sm:gap-5
                ">
                    

                    {
                        links.map((link) => (
                            <motion.li className="flex items-center justify-center"
                                       key={link.hash}
                                       initial={{y: -100, opacity: 0}}
                                       animate={{y: 0, opacity: 1}}
                            >

                                <Link className="flex w-full items-center justify-center
                                px-2 py-3 rounded-full  hover:bg-green-500 hover:text-gray-950 transition" href={link.hash}>
                                    {link.name}
                                </Link>

                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>

    );
}