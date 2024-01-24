import Image from "next/image"
const ShareCard = ({Name, Des, Feedback, pImage})=>{
    return(
        <>

<a href="#" class=" border-2 border-b-4 border-gray-200 rounded-xl bg-[#F9FAFB]">

{/* <p class="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> {Name} </p> */}

<div class="grid p-5 gap-y-2">

  <div>
    <Image
    className="rounded-full"
    src={`/${pImage}`}
    width={40}
    height={40}
    />
  </div>

  <div class="col-span-5 md:col-span-4 pt-12">
    <p class="text-gray-900 text-xl font-bold"> {Name} </p>
    <p class="text-gray-700"> {Feedback} </p>
    <p className="text-xs text-gray-600 pt-3">Learn More →</p>
  </div>

</div>

</a>

        
</>
    )
}

export default ShareCard