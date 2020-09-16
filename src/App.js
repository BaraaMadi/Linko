import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/flashCards/categories/Dashboard";
import CardDashboard from "./components/flashCards/cards/Dashboard"

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/category-home" component={Dashboard} />
        <Route exact path="/create-card" component={CardDashboard} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;



// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Navbar from "./component/common/Navbar";
// import Home from "./component/home/Home";
// import Category from "./component/category/Category";
// import Footer from "./component/common/Footer";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route exact path="/category" component={Category} />
//         <Route exact path="/" component={Home} />
//       </Switch>
//       <Footer />
//     </>
//   );
// }

// export default App;
