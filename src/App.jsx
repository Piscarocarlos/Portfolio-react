import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Header />

      {/* start routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact-us" element={<Contact/>} />
      </Routes>
      {/* end routes */}
    </>
  )
}

export default App;