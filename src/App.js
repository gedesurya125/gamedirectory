import React from "react";
import AppLayout from "./components/appLayout/AppLayout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllGamesPage from "./pages/allGames/AllGamesPage";
import GenresPage from "./pages/byGenres/GenresPage";
function App(props) {



  const contentRouting = [
    {
      exact: true,
      path: '/',
      component: AllGamesPage,
    },
    {
      exact: false,
      path: '/genres',
      component: GenresPage,
    },

  ]

  const renderRouting = contentRouting.map((routeProps, index) => (
    <Route key={index} {...routeProps}/>
  ))
  return (
    <Router>
      <AppLayout>
        <Switch>
          {renderRouting}
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
