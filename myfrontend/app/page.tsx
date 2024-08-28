"use client"

import  { useEffect, useState } from 'react';

import Intro from "@/components/intro";



export default function Home() {
    // const[message, setMessage] = useState('');
    //
    // useEffect(() => {
    //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/test`)
    //         .then((response) => response.json())
    //
    //         .then((data) =>
    //         {
    //             setMessage(data.message);
    //             console.log(data.message)
    //         })
    //         .catch((error) => console.error('Error fetching data:', error))
    // }, []);

    return(
        <div>
            {/*<h1>Welcome, Integrated Django and NextJs</h1>*/}
            {/*<p>{message ? `Message from Backend: ${message}`: 'Loading...'}</p>*/}
            {/*<Intro/>*/}
        </div>
    )
}
