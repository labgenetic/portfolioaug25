import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import SpotifyEmbed from "./components/SpotifyElement";


export default function Home() {
  return (
    <>
      <main className="flex flex-row h-full">
        <Sidebar />
        <Main/> 
        <SpotifyEmbed />          
      </main>
    </>
  );
}
