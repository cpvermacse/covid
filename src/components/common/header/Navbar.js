import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, NavLink } from "react-router-dom";
import logo from "./coronavirus.png";
import "./style.scss";
import DrawerToggle from "./DrawerToggler";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title">
            <img src={logo} alt="HOME-ICON" height={50} />
          </Typography>
          <ul className="right">
            <li>
              <NavLink to="/"> HOME</NavLink>
            </li>
            <li>
              <NavLink to="/demographics"> DEMOGRAPHICS</NavLink>
            </li>
            <li>
              <NavLink to="/deep-dive"> DEEP DIVE</NavLink>
            </li>
          </ul>
          {/* <DrawerToggle /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
