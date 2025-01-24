import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import GamesUI from '../core-ui/games/games-UI';

const Games = () => {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.secondary,
      backgroundColor: theme.buttonColor,
      transition: 'color 0.5s',
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      }
    },
    viewArr: {
      color: theme.buttonColor,
      backgroundColor: theme.secondary,
      width: '100px',
      height: '40px',
      padding: '0.5rem',
      fontSize: '1.05rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.5s',
      "&:hover": {
        color: theme.buttonColor,
        backgroundColor: theme.secondary,
      }
    },
  }));

  const classes = useStyles();

  return (
    <GamesUI
      theme={theme}
      classes={classes}
    />
  );
};

export default Games;