

export default function Work() {
  return (
    <div className="cursor-default select-none sm:opacity-100 opacity-0 sm:absolute top-[340px] sm:flex sm:flex-col items-center justify-center gap-2 mr-5">
        <div className="text-4xl font-black italic bg-[#3D8D7A] p-2 px-28 text-[#FBFFE4] shadow-md">
            My Work
        </div>
        <p className="text-m font-semibold text-[#1c4239] mt-4 ">
            Here are fragments of my work either with an employer or with friends or even by myself :
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-3.5">
            <a href="https://github.com/ETTARNI-med/Petify" target="_blank" rel="noopener noreferrer">
            <div className="cursor-pointer flex flex-col items-center justify-center border-[1px] z-50 border-[#3D8D7A] w-52 h-32 rounded-tl-4xl bg-[#3D8D7A] hover:bg-[#ffffff00] transition-colors duration-300" id="PRJ1"><span className="text-2xl font-black text-[#3D8D7A] text-center cursor-none">Petify</span></div>
            </a>
            <a href="https://github.com/mohamedMN/Goodies-E-commerce-Project" target="_blank" rel="noopener noreferrer">
            <div className="cursor-pointer flex flex-col items-center justify-center border-[1px] z-50 border-[#3D8D7A] w-52 h-32 rounded-tr-4xl bg-[#3D8D7A] hover:bg-[#ffffff00] transition-colors duration-300" id="PRJ2"><span className="text-2xl font-black text-[#3D8D7A] text-center cursor-none" >Goodies</span></div>
            </a>
            <a href="https://pubsilon.com/fr" target="_blank" rel="noopener noreferrer">
            <div className="cursor-pointer flex flex-col items-center justify-center border-[1px] z-50 border-[#3D8D7A] w-52 h-32 rounded-bl-4xl bg-[#3D8D7A] hover:bg-[#ffffff00] transition-colors duration-300" id="PRJ3"><span className="text-xl font-black text-[#3D8D7A] text-center cursor-none" >Blockly arduino app</span></div>
            </a>
            <div className="cursor-pointer flex flex-col items-center justify-center border-[1px] z-50 border-[#3D8D7A] w-52 h-32 rounded-br-4xl bg-[#3D8D7A] hover:bg-[#ffffff00] transition-colors duration-300" id="PRJ4"><span className="text-xl font-black text-[#3D8D7A] text-center cursor-none" >Ste Cherkaoui ProPrint</span></div>
        </div>
        <a href='https://drive.google.com/file/d/1GAUQiOOZKzlz-kv9SO4tgxP1D_LweFr3/view?usp=sharing' download="CharafEddineCharouitResume.pdf" target="_blank" rel="noopener noreferrer">
        <button  className="mt-12 p-2 px-4 font-bold rounded-2xl border-1 border-[#A3D1C6] text-[#FBFFE4] bg-[#3D8D7A] hover:scale-105  hover:border-[#3D8D7A] hover:border-[0.5px] hover:bg-[#a3d1c665] hover:text-[#3D8D7A] hover:font-regular transition-colors duration-200 cursor-pointer">
          Want My Resume ?
        </button>
        </a>
    </div>
  )
}
