import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/navbar/Navbar";
// import Products from "./components/products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <Main />
      {/* <Products /> */}
      <Footer />
    </>
  );
}

export default App;
