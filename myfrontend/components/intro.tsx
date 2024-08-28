import React from "react"
import Image from "next/image"
export default function Intro() {
    return(
        <section>
            <div
                className="flex items-center justify-center"
            >
                <div>
                    <Image src="https://cosmos45.github.io/portfolio/images/icons/omkar.jpeg" alt="Omkar Zende"
                           width="192"
                           height="192"
                           quality="95"
                           priority={true}
                           className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                    />

                </div>

            </div>

        </section>
    )
}