"use client"
import axios from 'axios';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';


const Logout: FC = () => {
    
    // add a benvent handler to the logout button
    const [state, setState] = useState(false);
    const router = useRouter();
    const handleLogout = async () => {
        // console.log("data sent to the server");

        setState(true);
        try {
            const response = await axios.get("http://localhost:3000/api/users/logout");
            
            // console.log("data received from the server", response.data?.success);
            if(response.data?.success === true) {
                router.push("/");
            }
            setState(false);
        } catch (err: any) {
            setState(false);
            // console.log("loading failed", err.message);
        }
    }

  return (
    <button className=" max-w-sm m-4 p-2 bg-red-300 outline outline-offset-2 outline-1 rounded-md" onClick={handleLogout}>Logout {state ? "Processing..." : ""}</button>
  )
}

export default Logout