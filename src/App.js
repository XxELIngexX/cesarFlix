import "./App.css"
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";


function App() {

  return (<>
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/new" element={<NewVideo/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
