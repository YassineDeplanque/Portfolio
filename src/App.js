import { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { Skills } from "./views/Skills";
import { About } from "./views/About";
import { Projects } from "./views/Projects";
import { Footer } from "./components/Footer";
import { Error } from "./views/Error";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    )
  }
}

export default App;