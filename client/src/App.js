import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import SingleEvent from "./pages/SingleEvent";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Events", path: "/events" },
    { name: "SingleEvent", path: "/single_event" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Logout", path: "/" },
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
    } else if (currentPage === "SingleEvent") {
      return <SingleEvent></SingleEvent>;
    } else if (currentPage === "Login") {
      return <Login></Login>;
    } else if (currentPage === "Signup") {
      return <Signup></Signup>;
    } else if (currentPage === "Logout") {
      return <Home></Home>;
    } else {
      return <Home></Home>;
    }
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="page">
          <div className="side">
            <Header
              pageSelected={pageSelected}
              setPageSelected={setPageSelected}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Header>
            <main>
              {pageSelected ? renderPage(currentPage) : <Home></Home>}
              <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile">
                  <Route path=":username" element={<Profile />} />
                  <Route path="" element={<Profile />} />
                </Route>
                <Route path="/single_event/:id" element={<SingleEvent />} />
                <Route path="*" element={<NoMatch />} />
              </Switch>
            </main>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
