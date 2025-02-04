import { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./views/Home";
import { Error } from "./views/Error";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;