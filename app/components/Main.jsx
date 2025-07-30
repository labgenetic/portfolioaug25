import AboutSection from "./AboutSection"
import Header from "./Header"
import Portrait from "./Portrait"
import Work from "./Work"


export default function Main() {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full" >
    <Header/>
    <div className="grid grid-cols-3 w-full h-full pr-24">
      <div>
        <Portrait/>
      </div>
      
      <div>
        <AboutSection/>
      </div>
      <div>
        <Work/>
      </div>
    </div>
    </div>
  )
}
