import React from 'react'

function UserId({ params }: { params: { userid: string } }) {
  return (
    <div>

    <div>
        <h1 className="m-4 text-2xl md:text-6xl text-gray-800 font-extrabold font-serif leading-tight">
        UserId
        </h1>
        </div>
    <div className="p-4 space-x-8 bg-gray-300">{params.userid}</div>
    </div>
  )
}

export default UserId