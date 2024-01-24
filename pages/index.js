import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/Nav'
import Script from 'next/script'
import { useEffect } from 'react'
import Footer from './components/Footer'
import RulesCard from './components/RulesCard'
import ShareCard from './components/ShareCard'

const Home = () => {

  return (
      
    <>
    <Nav />
    <section> 
    <section className="sticky ">

    <div
     className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-10 pb-6 mx-auto text-left md:max-w-none md:text-left"
    >
    <div className='text-left sm:px-64 pl-1 py-4'>
    <button class="bg-[#F9FAFB] border border-[#E2E8F0] hover:bg-neutral-200 text-xs font-normal text-neutral-800 py-1.5 px-4 rounded-full inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill='#00acee' width="10" height="10" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
    &nbsp; &nbsp;<span> v.0.1.23 We're Proudly Opensource → </span>
    </button>
    </div>


     <h1
       className="text-2xl font-semibold leading-10 tracking-normal text-left text-black sm:px-64 pl-2 pr-6 text-left sm:leading-none md:text-6xl text-3xl lg:text-4xl"
     >
       <span className="inline md:block">Your Nextjs Journey Starts With </span>
       <span
         className="relative mt-2 bg-clip-text text-black md:inline-block"
       > 100DaysOfNextjs</span>
     </h1>

     <div className='pt-4 sm:text-lg text-xs text-neutral-600 sm:px-64 pr-6 pl-2'>
          <p>Explore 100 Days of Next.js Discover videos, tutorials, source code (free/paid),<br/> from my work on Hacking with Next.js. Elevate your Next.js learning.</p>
      </div>

   </div>

    
    <div
     className="max-w-lg sm:px-64 pr-6 pl-2 mx-auto text-left md:max-w-none"
    >
    <div className='pb-6 px-4 space-x-4'>
    <button class="backdrop-blur-sm transition duration-500 ease-in-out bg-black text-white hover:bg-neutral-800 hover:text-white text-lg font-medium py-3 px-6 rounded-xl inline-flex items-center">
    <span> Get Started →</span>
    </button>
    <button class="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-black hover:bg-neutral-200 text-lg font-medium py-2.5 px-4 rounded-xl inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>

   &nbsp; &nbsp;<span>Jobs</span>
    </button>
    </div>
    </div>
    

    </section>
    </section>
    {/* SECTION */}

<div className='pt-4 sm:pt-16 px-3'>
<div className='bg-[#FFF] sm:mx-64 rounded-3xl border border-[#E4E7EB] border-8'>
<Image
  src={'/banads.png'}
  width={900}
  height={190}
  className='rounded-2xl'
/>
</div>
</div>
    




{/* SECTION */}
<section className="sm:px-36 px-4 border-b-4 border-dashed border-[#FFF] ">

<div className=" sm:pt-24 pt-10 text-left">
<h1 className="font-medium leading-10 sm:px-32 px-4 tracking-tight text-left text-black sm:leading-none md:text-5xl text-3xl lg:text-5xl">
<span className="inline sm:text-3xl text-2xl font-semibold md:block text-black">Guide For Nextjs</span>
<p className='pt-3 px-1 tracking-normal sm:text-lg text-xs text-neutral-600 font-normal tracking-normal'>Explore 100 Days of Next.js! Discovee code (free/paid),<br/> and more from my work on Hacking with Next.js. Elevate your Next.js learning.</p>
</h1> 

<div className='sm:px-32 px-4 mb-10 sm:mb-6 pt-4'>
<button class="backdrop-blur-sm px-1.5 transition duration-500 ease-in-out translate-y-1 text-neutral-900 hover:text-neutral-500 sm:text-lg text-sm font-medium items-left">
<span> See Docs →</span>
    </button>
    </div>

</div>
<div className="overflow-hidden sm:px-32">


<div className="grid sm:grid-cols-3 px-3 sm:pt-8 sm:pb-12 gap-y-8 sm:gap-x-6">  
<ShareCard Name="Nextjs13 Guide" pImage="13.png" Des="@salnetxyz"  Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." /> 
<ShareCard Name="Authentication" Des="@salnetxyz" pImage="nextauth.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." /> 
<ShareCard Name="Crud App" Des="@salnetxyz" pImage="crud.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." /> 
<ShareCard Name="Payment Integration" Des="@salnetxyz" pImage="payment.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." />  

{/* <ShareCard Name="Forms" Des="@salnetxyz" pImage="forms.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." />  */}
{/* <ShareCard Name="Production Apps" Des="@salnetxyz" pImage="production.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." />  */}
 <ShareCard Name="Nextjs + Tailwindcss"  Des="@salnetxyz" pImage="tailwindcss.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." /> 
<ShareCard Name="Deployment"  Des="@salnetxyz" pImage="cloud.png" Feedback="Hi this is Salnet. Check out my first nextjs project. I will add my projects github link soon." /> 

{/* This is something else */}
</div>



</div>

</section>

{/* SECTION */}
<div className=" sm:pt-24 pt-12 sm:px-36 px-4 text-left">
<h1 className="font-medium leading-10 sm:px-32 px-4 tracking-tight text-left text-black sm:leading-none md:text-5xl text-3xl lg:text-5xl">
<span className="inline sm:text-3xl text-2xl font-semibold md:block text-black">Proudly Opensource</span>
<p className='pt-3 px-1 tracking-normal sm:text-lg text-xs text-neutral-600 font-normal tracking-normal'>Explore 100 Days of Next.js! Discovee code (free/paid),<br/> and more from my work on Hacking with Next.js. Elevate your Next.js learning.</p>
</h1> 

<div className='sm:px-32 px-4 pt-4'>
<button class="backdrop-blur-sm transition duration-500 ease-in-out  bg-neutral-800 translate-y-1 text-neutral-100 hover:bg-neutral-200 text-sm font-medium py-2.5 px-6 rounded-xl inline-flex items-center">

    <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
   &nbsp; &nbsp;<span> Github</span>
    </button>
    </div>

</div>


<div className=' pt-12'>
<div className='bg-[#090E18] sm:mx-64 mx-2 sm:py-40 py-28 mb-24 rounded-3xl border border-[#E4E7EB] border-8' />
</div>



{/* <section className="p-8">
<div className=" py-8 text-left">
<h1 className="font-black leading-10 tracking-tight text-center text-black sm:leading-none md:text-5xl text-3xl lg:text-5xl">
✍️ Rules
</h1>
</div>
<div className="overflow-hidden sm:mx-72">
<div class="space-y-12">
<RulesCard Name="Follow" answer="To get started, you need to follow @salnetxyz and @100DaysOfNextJs on Threads."  />
<RulesCard Name="Code minimum 1hr a day" answer="Code for at least one hour every day for the next 100 days."  />
<RulesCard Name="Share your journey" answer="Share your progress every day on Twitter & Threads, or any of them. To share your progress on Threads, you have to tag @100daysofnextjs. For Twitter, you have to tag @100daysofnextjs and use the hashtag #100daysofnextjs."  />
<RulesCard Name="Support fellow learners" answer="Encourage fellow learners on their journey by liking, commenting, and sharing their threads and tweets. It's a win win situation that will help everyone to grow. On Twitter, you will find fellow buddies using the hashtag #100daysofnextjs. For Threads, you have to turn on notifications for the @100DaysOfNextJs account to see their updates on your Threads feed."  />
<RulesCard Name="No Toxicity" answer="Please keep it clean. 🙏"  />
</div>
</div>
</section> */}


{/* SECTION */}


{/* SECTION */}
<Footer />
    </>
  )

}

export default Home;