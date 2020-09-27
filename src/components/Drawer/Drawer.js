import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const link = {
  textDecoration: "none",
  color: "rgb(19, 19, 19)",
};

const iconsMap = {
  0: "DashboardIcon",
  1: "AllInboxIcon",
};

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Tina Zita
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <NavLink
              to={"/admin"}
              exact
              style={link}
              activeStyle={{
                color: "red",
              }}
            >
              <ListItem button key={"admin"}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>

                <ListItemText primary={"Admin"} />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to={"/inventory"}
              exact
              style={link}
              activeStyle={{
                color: "red",
              }}
            >
              <ListItem button key={"inventory"}>
                <ListItemIcon>
                  <AllInboxIcon />
                </ListItemIcon>

                <ListItemText primary={"Inventory"} />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to={"/orders"}
              exact
              style={link}
              activeStyle={{
                color: "red",
              }}
            >
              <ListItem button key={"orders"}>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>

                <ListItemText primary={"Orders"} />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to={"/recipes"}
              exact
              style={link}
              activeStyle={{
                color: "red",
              }}
            >
              <ListItem button key={"recipes"}>
                <ListItemIcon>
                  <KitchenIcon />
                </ListItemIcon>

                <ListItemText primary={"Recipes"} />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to={"/bills"}
              exact
              style={link}
              activeStyle={{
                color: "red",
              }}
            >
              <ListItem button key={"bills"}>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>

                <ListItemText primary={"Bills"} />
              </ListItem>
            </NavLink>
          </List>
        </div>
        <Footer />
      </Drawer>
    </div>
  );
}
