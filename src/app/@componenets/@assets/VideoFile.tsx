"use client"
import { useEffect, useState  } from 'react'
import { Suspense } from 'react'
import ReactPlayer from 'react-player'


function VideoFileComponents() {
	const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
	return (
		<div className="h-52 w-64" >
			{isClient &&
		<Suspense fallback={<h1>Loading...</h1>}>
			 <ReactPlayer className="h-52 w-64" playing={true} loop={true} light={true} url="https://youtu.be/QWd9jMvJfuM?list=PL4qpOopTabCeOp0FP1hmBQujUbJqFlh2l&t=2" config={{ youtube: { playerVars: { showinfo: 1 } } }} />
			
		</Suspense>
}
	</div>
	);
}

export default VideoFileComponents;
