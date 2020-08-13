import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./Home";


function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
    </AppLayout>
  );
}

export default Root;