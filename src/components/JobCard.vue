<template>
  <div class="w-[25rem] border border-[#2370CB] cursor-pointer flex flex-col gap-4 p-4 rounded-md">
    <div class="flex justify-between items-start">
      <div class="flex gap-2 items-center">
        <div
          class="h-[4rem] w-[4rem] border-4 border-[#2370CB] overflow-hidden rounded-full cursor-pointer"
        >
          <img src="@/assets/images/rp.jpeg" class="h-full rounded-md object-contain" />
        </div>
        <div class="flex flex-col gap-1">
          <span>Soldering</span>
          <span class="text-xs text-nowrap">Rwanda Polytechnic</span>
        </div>
      </div>

      <div
        class="py-2 px-4 cursor-pointer border bg-[#10A969] rounded-full flex items-center justify-center"
      >
        <span class="text-white text-xs">Open</span>
      </div>
    </div>
    <p class="text-sm text-[#676b74]">
      We are seeking a skilled and detail-oriented Soldering Technician to join our team. The ideal
      candidate will be responsible for assembling, repairing, and maintaining electronic components
      and circuits by using soldering techniques.
    </p>
    <div class="flex items-center gap-2">
      <div class="text-xs bg-[#2370CB] text-white px-2 py-[8px] rounded-full">Soldering</div>
      <div class="text-xs bg-[#2370CB] text-white px-2 py-[8px] rounded-full">Electronics</div>
      <div class="text-xs bg-[#2370CB] text-white px-2 py-[8px] rounded-full">Repair</div>
    </div>
    <div class="flex justify-between items-end mt-4">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-[#676b74]">Posted at: 16 Dec 2024</span>
        <span class="text-sm text-[#676b74]">Deadline: 19 Dec 2024</span>
        <span class="text-sm text-[#676b74]">Sector: Technical Services</span>
      </div>
      <button class="text-sm bg-[#2370CB] h-[3rem] w-[10rem] rounded-full text-white">Apply</button>
    </div>
  </div>
</template>
