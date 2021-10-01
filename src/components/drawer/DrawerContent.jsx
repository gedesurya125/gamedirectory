import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Collapse } from "@mui/material";
import * as appColor from "../../settings/appColor";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GamesIcon from "@mui/icons-material/Games";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { getGenresAction } from "../../redux/actions/genresAction";
import Logo from "../logo/Logo";
import { useQuery } from "../../function/useQuery";
import { useLocation } from "react-router-dom";

const DrawerContent = ({ handleDrawerToggle }) => {
  const query = useQuery();
  const location = useLocation();
  // const page = query.get("page");
  const genres = query.get("genres");

  const history = useHistory();
  const dispatch = useDispatch();
  const genreList = useSelector((state) => state.genres);
  const [menuState, setMenuState] = useState({
    expandGenres: false,
  });

  const menuList = [
    {
      name: "All Games",
      icon: GamesIcon,
      route: "/",
      link: "/?page=1",
      subList: [],
    },
    {
      name: "Genres",
      icon: SportsEsportsIcon,
      route: "/genres",
      link: () =>
        setMenuState((state) => ({
          ...state,
          expandGenres: !state.expandGenres,
        })),
      subList: genreList.data.results || [],
    },
  ];

  useEffect(() => {
    dispatch(getGenresAction(1));
  }, [dispatch]);
  return (
    <div>
      <Toolbar
        sx={{
          background: appColor.primaryYellow,
        }}
      >
        <Logo />
      </Toolbar>
      <Divider />
      <List>
        {menuList.map((menu, index) => {
          if (menu.subList.length === 0)
            //check if there is no nested list
            return (
              // RETURN LINK WITH NO SUB LINK
              <ListItem
                button
                key={menu.name}
                onClick={() => {
                  history.push(menu.link);
                  handleDrawerToggle && handleDrawerToggle();
                }}
                sx={{
                  background:
                    location.pathname === menu.route &&
                    // genreList.loading === false &&
                    appColor.secondaryYellow,
                }}
              >
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            );

          return (
            // RETURN LINK WITH SUB LINK CURRENTLY ONLY FOR GENRES TAB
            <div key={menu.name}>
              <ListItem
                button
                onClick={menu.link}
                sx={{
                  background:
                    location.pathname === menu.route &&
                    appColor.secondaryYellow,
                }}
              >
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
                {menuState.expandGenres ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={menuState.expandGenres}
                timeout="auto"
                unmountOnExit
              >
                <List
                  sx={{
                    background: "black",
                  }}
                  disablePadding
                >
                  {menu.subList.map((subMenu, index) => (
                    <ListItem
                      button
                      onClick={() => {
                        history.push(
                          `${menu.route}?page=1&genres=${subMenu.id}&genresName=${subMenu.name}`
                        ); // should goto genres page
                        handleDrawerToggle && handleDrawerToggle();
                      }}
                      key={subMenu.name}
                      sx={{
                        background:
                          Number(genres) === subMenu.id &&
                          genreList.loading === false &&
                          appColor.secondaryYellow,
                      }}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={subMenu.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default DrawerContent;
