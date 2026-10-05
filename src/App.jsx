import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Team from "./pages/Team";



function App() {
  const path = window.location.pathname;

  let page;

  if (path === "/about") {
  page = <About />;
} else if (path === "/services") {
  page = <Services />;
} else if (path === "/projects") {
  page = <Projects />;
} else if (path === "/team") {
  page = <Team />;
} else if (path === "/contact") {
  page = <Contact />;
} else if (path === "/news") {
  page = <News />;
}  else {
  page = <Home />;
}

  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
}

export default App;