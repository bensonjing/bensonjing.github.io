import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import PostDetail from "./components/PostDetail";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
