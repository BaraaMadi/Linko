import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import FlashCardCategory from "./components/flashCardCategory/FlashCardCategory";
import FlashCards from "./components/flashCards/FlashCards";


function App() {
  return (
    <>
    
      <Navbar />
      <Switch>
        <Route exact path="/create-card/:id" component={FlashCards} />
        <Route exact path="/create-card" component={FlashCards} />
        <Route exact path="/category-home" component={FlashCardCategory} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
