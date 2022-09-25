import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import TvIcon from "@material-ui/icons/Tv";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#000  !important",
        zIndex: 100,
        boxShadow: "0px 2px 5px #515157",
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <BottomNavigation
            showLabels
            value={0}
            onChange={(event, newValue) => {
                if (newValue === 0) {
                    history.push("/");
                } else if (newValue === 1) {
                    history.push("/movies");
                } else if (newValue === 2) {
                    history.push("/series");
                } else if (newValue === 3) {
                    history.push("/search");
                }
            }}
            className={classes.root}
        >
            <BottomNavigationAction style={{ color: "white" }} label='Trending' icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label='Movies' icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label='TV Series' icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label='Search' icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
