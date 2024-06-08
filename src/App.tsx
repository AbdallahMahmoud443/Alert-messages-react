import AlertMessages from "./components/Alert/AlertMessages"
import { Bell, CircleCheckBig, Info, NotepadText, TriangleAlert } from "lucide-react";
import "./App.css"


function App() {
  return (
    <>
      <AlertMessages title={"Upgrade Your Plan"}
        icon={<Bell />}
        type={"Alert-Default"} >
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt officiis voluptates minus necessitatibus explicabo tempora, velit repudiandae neque fugiat vitae tenetur harum aliquid voluptate ipsa nulla <a href="">Dolores</a> , officiis"
        </p>
      </AlertMessages>
      <AlertMessages title={"Note"}
        icon={<NotepadText />}
        type={"Alert-Info"} >
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt officiis voluptates minus necessitatibus explicabo tempora, velit repudiandae neque fugiat vitae tenetur harum aliquid voluptate ipsa nulla <a href="">Dolores</a> , officiis"
        </p>
      </AlertMessages>
      <AlertMessages title={"Somethings Went Wrong"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt officiis voluptates minus necessitatibus explicabo tempora, velit repudiandae neque fugiat vitae tenetur harum aliquid voluptate ipsa nulla in. Dolores, officiis"}
        icon={<Info />}
        type={"Alert-Warning"} />
      <AlertMessages title={"Fail to Get Request"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt officiis voluptates minus necessitatibus explicabo tempora, velit repudiandae neque fugiat vitae tenetur harum aliquid voluptate ipsa nulla in. Dolores, officiis"}
        icon={<TriangleAlert />}
        type={"Alert-Error"} />
      <AlertMessages title={"Your Order Has Been Passed"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt officiis voluptates minus necessitatibus explicabo tempora, velit repudiandae neque fugiat vitae tenetur harum aliquid voluptate ipsa nulla in. Dolores, officiis"}
        icon={<CircleCheckBig />}
        type={"Alert-Success"} />

    </>
  )
}

export default App
