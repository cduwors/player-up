import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
// import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
    
  // page navigation
  const [pages] = useState([
    { name: "Home" },
    { name: "Profile" },
    { name: "Events" },
    { name: "Login" },
    { name: "Signup" },
  ]);

  // page selection state
  const [pageSelected, setPageSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages[0]);
//   const [homePage, setHomePage] = useState(false);

  function renderPage(currentPage) {
    if (currentPage === "Profile") {
      return <Profile></Profile>;
    } else if (currentPage === "Events") {
      return <Events></Events>;
    } else if (currentPage === "Login") {
      return <Login></Login>;
    } else if (currentPage === "Signup") {
      return <Signup></Signup>;
    } else {
      return <Home></Home>;
    }
  }
  return (
    <div className="page">
      <Header
        pages={pages}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        {pageSelected ? renderPage(currentPage.name) : <Home></Home>}
      </main>
      <Footer></Footer>
    </div>
  );
}
export default App;
