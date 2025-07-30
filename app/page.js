import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";


export default function Home() {
  return (
    <>
      <main className="flex flex-row h-full">
        <Sidebar />
        <Main/>           
      </main>
    </>
  );
}
