import Common from "./components/common";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact-us";
import Todo from "./pages/todo";
import Wheather from "./pages/wheather";
function App() {

  
  return (
    <>
      <BrowserRouter>
        <Common>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/wheather" element={<Wheather/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
          </Routes>
        </Common>
      </BrowserRouter>
    </>
  );
}

export default App;
