const RulesCard = ({Name, answer})=>{
    return(
        <>
            <div class="space-y-4">
<details class="group [&_summary::-webkit-details-marker]:hidden" open>
<summary
  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg px-4 text-[#2D2922]"
>
  <h2 class="font-bold text-2xl">
    {Name}
  </h2>

  <svg
    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</summary>

<p class="mt-4 px-4 text-xl leading-relaxed text-gray-700">
  {answer}
</p>
</details>

</div>
        </>
    )
}

export default RulesCard;