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

import { setContext } from "@apollo/client/link/context";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // page navigation
  const [pages] = useState([
    { name: "Home" },
    { name: "Profile" },
    { name: "Events" },
    { name: "Login" },
    { name: "Signup" },
    { name: "SingleEvent" },
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
    <ApolloProvider client={client}>
    <div className="page">
      <div className={`${pageSelected && currentPage !== 'Home' && 'side'}`}>
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
      </div>
      <Footer></Footer>
    </div>
    </ApolloProvider>
  );
}
export default App;
