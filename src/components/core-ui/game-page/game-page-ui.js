import { Grid } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { headerData } from '../../../data/headerData';
import SingleGame from '../../container/single-game';
import './gamePage.css';

const GamePageUI = ({ theme, classes, search, setSearch, filteredArticles }) => {
  filteredArticles.map(game => (
    console.log(game)
  ))
  
  return (
    <div className="gamePage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Games</title>
      </Helmet>
      <div className="gamePage-header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Games</h1>
      </div>
      <div className="gamePage-container">
        <div className="gamePage-search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} />
        </div>
        <div className="game-container">
          <Grid className="game-grid" container direction="row" alignItems="center" justifyContent="center">
            {filteredArticles.map(game => (
              <SingleGame
                theme={theme}
                id={game.id}
                title={game.gameTitle}
                desc={game.gameDescription}
                tags={game.tags}
                video={game.youtubeId}
                link={game.gameLink}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default GamePageUI;