import Image from 'next/image'
import PickupLinesDisplayer from './cmps/PickupLinesDisplayer'
import PicupLine from './models/pickupLine'
import Link from 'next/link'


const getPicupLines = async () => {
  try{
    const res = await fetch('http://localhost:3000/api/pickup-line/')
    if(!res.ok){
      throw new Error('faild to! load picuplines')
    }
    return res.json()
    
  }catch(err){
    console.log(err,'faild to load picuplines');
  }
}

const getImages = async () => {
  try{
    const res = await fetch(`https://api.unsplash.com/search/photos?page=5&per_page=30&query=girls&client_id=15mtyMgdr5wQ4UkJrz17VIF5R42qQbPKQhxpfx2DZ_g`)
    if(!res.ok){
      throw new Error('faild to! load images')
    }
    const images =await res.json() 
    return images.results
    
  }catch(err){
      console.log(err,'faild to load images');

    }
  } 
  
  export default async function Home() {
    
    
    const picupLinesData = await getPicupLines()
    
    const imagesData = await getImages()
    
    const [pickupLine, imgs] = await Promise.all([picupLinesData, imagesData])
    console.log('imgs : ' ,imgs.length);
    // const  {pickupLine} = res
   function getRandomInt(max: number) {
     return Math.floor(Math.random() * max);
   }
  
  return (
    <main className='gc2'>
      <section className='hero-container flex-ac flex-col '>
        <section className='pickup-line-container flex-ac flex-col'>
       
          <Link href={'/add-line'}>Add</Link>
        {pickupLine?<PickupLinesDisplayer  pickupLines={pickupLine} imgs={imgs}/>:''}  
        {/* { <p>{pickuplines[0]?.line}</p> } */}
        </section>
      </section>
    </main>
  )
  }
