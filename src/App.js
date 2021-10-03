import React from "react";
import AppLayout from "./components/appLayout/AppLayout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllGamesPage from "./pages/allGames/AllGamesPage";
import GenresPage from "./pages/byGenres/GenresPage";
import GameDetail from "./pages/gameDetail/GameDetail";
import Favourite from "./pages/favourite/Favourite";

function App(props) {
  // const appRef = useRef(null)
  const contentRouting = [
    {
      exact: true,
      path: '/',
      component: AllGamesPage,
    },
    {
      exact: true,
      path: '/genres',
      component: GenresPage,
    },
    {
      exact: false,
      path: '/game/detail/:id',
      component: GameDetail,
    },
    {
      exact: true,
      path: '/favourite',
      component: Favourite,
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
