import Image from 'next/image'

const ImageComonent = () => {
  return (
    <div>
      {/* <Image src={"/images/hero-image.png"} style={{position:"static"}} width={1700} height={500}  alt='image' /> */}
      <Image src={"/logoicon/imageone.svg"} style={{position:"static"}} width={1600} height={500}  alt='image' />
    </div>
  )
} 
const ImageComonentTwo = () => {
  return (
    <div>
      <Image src={"/logoicon/frametwo.svg"} style={{position:"static"}} width={1700} height={500}  alt='image' />
    </div>
  )
} 

export default async function Home() {

  return (
    <main >
      <div className="grid">
		<ImageComonent />  
    {/* <ImageComonentTwo /> */}
      </div>
    </main>
  )
}
