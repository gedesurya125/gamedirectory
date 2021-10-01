import React, { useState } from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Collapse, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as appColor from "../../settings/appColor";
import logo from "../../assets/logo.svg";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GamesIcon from '@mui/icons-material/Games';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const LogoImg = styled("img")(({ theme }) => ({
  height: 50,
  transform: "rotate(-20deg)",
}));

const DrawerContent = () => {
  const [menuState, setMenuState] = useState({
    expandGenres: false,
  });

  const menuList = [
    {
      name: "All Games",
      icon: GamesIcon,
      link: "",
      subList: [],
    },
    {
      name: "Genres",
      icon: SportsEsportsIcon,
      link: () =>
        setMenuState((state) => ({
          ...state,
          expandGenres: !state.expandGenres,
        })),
      subList: [
        {
          name: "Action",
          link: "",
        },
        {
          name: "Harmony",
          link: "",
        },
        {
          name: "Some",
          link: "",
        },
      ],
    },
  ];

  return (
    <div>
      <Toolbar
        sx={{
          background: appColor.primaryYellow,
        }}
      >
        <LogoImg
          sx={{
            marginRight: 1,
          }}
          src={logo}
        />

        <Typography
          sx={{
            fontSize: "1.8em",
            fontWeight: "bold",
            fontFamily: "Bebas Neue",
            color: "black",
          }}
        >
          Game World
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuList.map((menu, index) => {
          if (menu.subList.length === 0)
            return (
              <ListItem button key={menu.name}>
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            );
          return (
            <div key={menu.name}>
              <ListItem button onClick={menu.link}>
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
                {menuState.expandGenres ? <ExpandLess /> : <ExpandMore/>}
              </ListItem>
              <Collapse in={menuState.expandGenres} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {menu.subList.map((subMenu, index) => (
                    <ListItem button key={subMenu.name}>
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
