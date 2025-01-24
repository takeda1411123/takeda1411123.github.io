import { makeStyles } from '@mui/styles';
import React from 'react';
import SingleGameUI from '../core-ui/single-game/single-game-ui';

const SingleGame = ({ id, title, desc, tags, link, theme }) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: '1.1rem',
      transition: 'all 0.2s',
      '&:hover': {},
    },
  }));

  const classes = useStyles();

  return (
    <SingleGameUI
      classes={classes}
      id={id}
      title={title}
      desc={desc}
      tags={tags}
      link={link}
      theme={theme}
    />
  );
};

export default SingleGame;