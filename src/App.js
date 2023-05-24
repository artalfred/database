import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SampleFocus from "./components/SampleRef";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import sampleContext from "./pages/Data";
import CountRender from "./components/CountRender";
import StopWatch from "./components/StopWatch";
import StateCounter from "./components/StateCounter";
import Reducer from "./components/Reducer";
import Student from "./components/Student";

function App() {
  const [user, setUser] = useState("Art Alfred");

  return (
    <BrowserRouter>
      <Nav />
      <sampleContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </sampleContext.Provider>
      <hr />
      <SampleFocus />
      <hr />
      <CountRender />
      <StopWatch />
      <hr />
      <StateCounter />
      <hr />
      <Reducer />
    </BrowserRouter>
  );
}

export default App;
