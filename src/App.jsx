import { Routes, Route, topbar } from "react-router-loading";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";


function App() {

  topbar.config({
    barColors: {
      0: '#2EA4D8',
    },
    barThickness: 5,
  });

  return (
    <>
      <Header />

      {/* start routes */}
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} loading />
        <Route path="contact-us" element={<Contact />} loading />
        <Route path="*" element={<h1>404 Not Found</h1>} loading />
      </Routes>
      {/* end routes */}
    </>
  )
}

export default App;