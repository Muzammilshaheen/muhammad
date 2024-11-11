
import Link from 'next/link';
import {Spotlight} from './ui/spotlight';
import {Button} from './ui/moving-border';


const Herosection = () => {
  return (
    <div className='h-auto md:h-{40rem} w-full bg-black rounded-full flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0'>
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

<div className='p-4 relative z-10 w-full text-center mt-44'>
     <h1 className='md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-white from-neutral-50 to-neutral-400'>Muzammil shaheen</h1> 
      <p className='mt-10 mb-44 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Muzammil Shaheen is known for his dedication and hard work in various fields,
       particularly in technology, education, or business depending on context.
        People who succeed through hard work often demonstrate perseverance,
        Muzammil Shaheen is known for his dedication and hard work in various fields,
       particularly in technology, education, or business depending on context.
        People who succeed through hard work often demonstrate perseverance,
        Muzammil Shaheen is known for his dedication and hard work in various fields
       particularly in technology, education, or business depending on context.
       </p>
       <div className='mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lag mx-auto'>
        <Link href='/About' className='mt-44'>
        <Button borderRadius="1.75rem" className=" bg-black text-white border-s-teal-950">
            Explore
        </Button>
        
        </Link>


       </div>
          
           </div>

    </div>
    
  )
}

export default Herosection;

