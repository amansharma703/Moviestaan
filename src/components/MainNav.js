import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#000  !important',
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) {
            history.push('/');
        } else if (value === 1) {
            history.push('/movies');
        } else if (value === 2) {
            history.push('/series');
        } else if (value === 3) {
            history.push('/search');
        }
    }, [value, history]);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
        >
            <BottomNavigationAction style={{ color: 'white' }} label='Trending' icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label='Movies' icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label='TV Series' icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label='Search' icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
