"use client";
import { useState } from "react";
import axios from "axios";

const fetcher = (url: string="http://localhost:3000", data:{}) => axios.put(url, {...data}).then(res => res.data).catch(err => console.log(err));

interface T {
  [key: string]: string | number | boolean;
}

function UserIntput({ dataT }: { dataT: T }) {
    // console.log("given data =", data);
    const [state, setState] = useState<T>({ ...dataT });
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [e.target.name]: e.target.value });
    }


    const handlSubmit = async (): Promise<void> => {
      console.log("data sent to the server",state);
      const response = await fetcher(`/api/users/${state.id}`, state);
      console.log("data received from the server",response);
    } 
    return (
      <div>
        <h3>UserIntput</h3>
        <div>
          <div >
            <input name="name"
            className="m-4 p-2 bg-red-300 outline outline-offset-2 outline-1 rounded-md" 
              value={state.name as string}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div >
            <input 
            name="age"
            className="m-4 p-2 bg-red-300 outline outline-offset-2 outline-1 rounded-md" 
              value={String(state.age) as string}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div >
            <input 
            name="email"
            className="m-4 p-2 bg-red-300 outline outline-offset-2 outline-1 rounded-md" 
              type="email"
              value={state.email as string}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div>
          <button
              className='m-4 p-2 bg-blue-300 outline outline-offset-2 outline-1 rounded-md'
          onClick={() => handlSubmit()}>Submit</button>
        </div>
      </div>
    );
  }
 
  export default UserIntput;
 