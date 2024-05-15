import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <>
      <div className="bg-[#1F1E24] h-screen w-full">
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Description/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
