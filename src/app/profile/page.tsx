'use client'
import axios from "axios";
import Logout from "../(componenets)/Logout";
import { useEffect, useState } from "react";

const getUserData = async (): Promise<{}> => {
    let responseData: any;
    try {
        const response = await axios.get("http://localhost:3000/api/users/id");
        // console.log("data received from the server", response.data);
        responseData = response.data;
    } catch (err: any) {
        // console.log("loading failed", err.message);
    } finally {
        // console.log("loading completed");
        return responseData;
    }
}

function UserProfilePage(): React.ReactElement {
    const [value, setValue] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData();
            setValue(data);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1 className="m-4 text-2xl md:text-6xl text-gray-800 font-extrabold font-serif leading-tight">ProfilePage</h1>
            <Logout />
            {/* <button onClick={getUserData} className="m-4 p-2 bg-red-300 outline outline-offset-2 outline-1 rounded-md">Get User Data</button> */}
            <div>
                <div>
                    <h1 className="m-4 text-2xl md:text-4xl text-gray-800 font-extrabold font-serif leading-tight">Name : { value?.data?.username } </h1>
                    <h1 className="m-4 text-2xl md:text-4xl text-gray-800 font-extrabold font-serif leading-tight">Email : { value?.data?.email} </h1>
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;