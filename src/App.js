import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Shop from "./components/Shop.js";

import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
