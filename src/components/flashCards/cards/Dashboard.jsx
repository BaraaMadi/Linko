import React from "react";
import CardList from "./CardList";
import CreateCard from "./CreateCard";

const Dashboard = () => (
  <div className="site-wrapper">
    <CreateCard />
    <CardList />
  </div>
);

export default Dashboard;
