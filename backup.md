---
import "@styles/global.css";
import Slider from "@components/Slider.astro";
import About from "@components/About.astro";
---

      class="font-signature text-center tracking-wide pt-5 text-[77px] bg-[linear-gradient(_0deg,_#68162E_0%,_#B7950B_10%,_#D4AC0D_30%,_#f7f56f_50%,_#f1c40f_60%,_#F5D76E_80%,__#F7F56F_90%)] bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(90,0,45,0.9)]"
      style="-webkit-text-stroke: .1px rgba(90, 0, 45, 0.56);"

<section class="w-full h-180 flex items-center justify-center gap-60 mt-10">
  <div class="flex flex-col justify-center items-centerh-full">
    <img
      src="/pfp.jpg"
      alt="pfp"
      class="h-130 w-auto aspect-[3/4] objet-cover border-2 border-[#C5961C]"
    />
    <h1
      class="font-signature text-center tracking-wide pt-5 text-[77px] bg-[linear-gradient(_0deg,_#68162E_0%,_#B7950B_10%,_#D4AC0D_30%,_#f7f56f_50%,_#f1c40f_60%,_#F5D76E_80%,__#F7F56F_90%)] bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(90,0,45,0.9)]"
      style="-webkit-text-stroke: .1px rgba(90, 0, 45, 0.56);"
    >
      Ailén Braga
    </h1>
    <p class="font-medium text-center text-2xl max-w-100">
      Técnica en Producción Digital y emprendedora en fotografía
    </p>
  </div>
  <div class="max-w-180 h-full flex flex-col justify-between items-center">
    <About />
    <div class="w-full flex flex-col items-center gap-5">
      <Slider />
      <a
        href="/galeria"
        class="flex items-center justify-center text-center px-2 py-1 gap-2 font-medium text-2xl hover:transition-transform hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(90,0,45,0.3)] group"
      >
        <span>ver galería</span>
        <svg
          class="w-4 h-4 transition-transform animate-move-right group-hover:translate-x-1 drop-shadow-[0_3px_20px_rgba(90,0,45,0.9)]"
          fill="none"
          stroke="#5a002d"
          stroke-width="2"
          viewBox="0 -2.5 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style="-webkit-text-stroke: .5px rgba(90, 0, 45, 0.56);"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
