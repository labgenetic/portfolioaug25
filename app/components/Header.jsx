import Image from "next/image"



export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center -top-60 gap-4 h-full absolute self-end p-4 cursor-default select-none">
        <div className="flex justify-center items-center gap-5 place-self-end justify-self-start p-2">
            <Image
            src="/assets/Asset 1.svg"
            width={40}
            height={40}
            alt='logo'
            className="opacity-100 sm:opacity-0"
            />
            <a href="https://stackoverflow.com/users/24643497/charaf-lamar" target="_blank" rel="noopener noreferrer">
            <Image
                src="/assets/StackOverflow-Dark.svg"
                width={23}
                height={23}
                alt="stackoverflow"
                className="hover:scale-120 transition-transform duration-200 cursor-pointer hover:hue-rotate-[210deg]"
                />
            </a>
            <a href="https://www.linkedin.com/in/charaf-eddine-charouit/" target="_blank" rel="noopener noreferrer">
            <Image
                src="/assets/Linkedin-Dark.svg"
                width={30}
                height={30}
                alt="linkedin"
                className="hover:scale-120 transition-transform duration-200 cursor-pointer hover:hue-rotate-60 hover:brightness-100"
            />
            </a>
            <a href="mailto:charafcharouit@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
                src="/assets/Email.svg"
                width={30}
                height={30}
                alt="mail"
                className="hover:scale-120 transition-transform duration-200 cursor-pointer hover:hue-rotate-[220deg] hover:brightness-75 "
/>
            </a>
            <a href="https://github.com/labgenetic" target="_blank" rel="noopener noreferrer">
            <Image
                src="/assets/Github-Dark.svg"
                width={30}
                height={30}
                alt="github"
                className="hover:scale-120 transition-transform duration-200 cursor-pointer hover:hue-rotate-180 hover:brightness-0"
            />
            </a>
            
        </div>
        

        <h1 className="sm:text-7xl text-5xl font-black italic mr-20 text-start z-10 text-[#3D8D7A] sm:mr-60">
            Front-end Developer
        </h1>
        <h1 className="sm:text-[350px] text-9xl italic absolute left-5 sm:left-[-18px] sm:top-[150px] -z-30 font-black text-[#A3D1C6] text-start">&</h1>
        <h1 className="sm:text-7xl z-50 text-4xl font-black justify-self-end text-end text-[#3D8D7A] italic">
            Graphic Designer
        </h1>
        <h2 className="sm:text-4xl text-lg z-50 font-black pl-40 pt-2 justify-self-end text-end  italic text-[#A3D1C6]">
            CHARAF EDDINE CHAROUIT
        </h2>
        <h3 className="sm:hidden text-xs z-50 font-black ml-60 pt-2 justify-self-end text-end  italic text-[#3D8D7A]">
            Sorry !<br /> Only available in Web, Soon on Mobile
        </h3>
    </div>
  )
}
