import Image from "next/image";
import HeroComp from "./(componenets)/(home)/HeroComp";
import { Suspense } from "react";

export default async function Home() {
	return (
		// <html></html>
		<main>
			<div className='grid'>
				{/* <ImageComonentTwo /> */}
				<Suspense fallback={<div>Loading...</div>}>
					<HeroComp />
				</Suspense>
			</div>
			{/* <body></body> */}
		</main>
	);
}

