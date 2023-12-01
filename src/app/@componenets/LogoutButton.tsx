'use client';
import { FC } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const LogoutButton : FC = (props) => {
    const router = useRouter();    
    const handleLogout = async () => {
            console.log("logging out");

            try {
               const response = await axios.get("http://localhost:3000/api/users/logout");
               console.log(response.data);
               if(response.data.success){
                   router.push("/");
               }
               else{
                   alert("something went wrong");
               }
            } catch (err: any) {
                console.log(err.message);
            }
        }
        
    return (
        <div>
            <button onClick={handleLogout} className="m-4 p-2 bg-red-300 outline outline-offset-2 outline-1 rounded-md">Log out</button>
        </div>
    );
}
