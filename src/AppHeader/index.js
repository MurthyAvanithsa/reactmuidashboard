import React from "react";
import {
  AppBar,
  Badge,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(2),
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: "#F3F1FE",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: "capitalize",
  },
  linkLast: {
    backgroundColor: "#3079B6",
    padding: "10px",
    borderRadius: "20px",
    color: "white",
    textTransform: "capitalize",
  },
  dot: {
    height: "12px",
    padding: "8px",
    minWidth: "12px",
    borderRadius: "8px",
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  return (
    <AppBar position="relative" color="#F3F1FE">
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          [re]code
        </Typography>
        <nav>
          <Link
            variant="button"
            color="primary"
            href="#"
            className={classes.link}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Assessments
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Courses
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.linkLast}
          >
            Student Portal
          </Link>
        </nav>
        <Badge
          color="secondary"
          badgeContent=" "
          className={classes.badge}
          variant="dot"
          classes={{ dot: classes.dot }}
        >
          <NotificationsOutlinedIcon className={classes.icon} />
        </Badge>
        <SearchOutlinedIcon className={classes.icon} />
        <PersonOutlineOutlinedIcon className={classes.icon} />
      </Toolbar>
    </AppBar>
  );
}
