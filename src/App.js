import "./App.css";
import Chef from "./Components/Chef/Chef";
import Customers from "./Components/Customers/Customers";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Special from "./Components/Special/Special";
import Subscribe from "./Components/Subscribe/Subscribe";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Special />
      <Welcome />
      <Chef />
      <Customers />
      <Subscribe />
      <Footer/>
    </>
  );
}

export default App;



