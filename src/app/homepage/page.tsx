import React from 'react';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl text-gray-800 font-extrabold font-serif leading-tight">
                        Hi, I’m Jash.
                        <br />A Creative Developer.
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-600 font-normal">
                        JASHABANTA DAS
                    </p>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-8">
                        <div className="nav-item">About</div>
                        <div className="nav-item">Skills</div>
                        <div className="nav-item">Game</div>
                    </div>
                </div>
                <div className="relative w-full h-96 bg-gradient-to-r from-blue-700 to-pink-500 rounded-lg overflow-hidden">
                    <div className="w-24 h-24 bg-gradient-to-r from-slate-400 to-pink-200 rounded-full absolute top-1/4 right-1/4" />
                    <div className="w-32 h-32 bg-gradient-to-l from-blue-700 to-sky-200 rounded-full absolute top-1/12 right-1/12 opacity-20 transform rotate-45" />
                    <div className="w-20 h-20 bg-gradient-to-l from-blue-700 to-sky-200 rounded-full absolute bottom-1/4 left-1/4 opacity-20 transform rotate-45" />
                </div>
            </div>
        </div>
    );
}
