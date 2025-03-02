import React from 'react';
// import { HiArrowRight } from "react-icons/hi";
// import { Link } from 'react-router-dom';
import { gamesData } from '../../../data/gamesData';
import SingleGame from '../../container/single-game';
import './games.css';

function GamesUI({ theme, classes }) {

    return (
        <>
            {gamesData.length > 0 && (
                <div className="games" id="games" style={{ backgroundColor: theme.secondary }}>
                    <div className="games--header">
                        <h1 style={{ color: theme.primary }}>Games</h1>
                    </div>
                    <div className="games--body">
                        <div className="games--bodyContainer">
                            {gamesData.slice(0, 3).map(game => (
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
                        </div>
{/* 
                        {gamesData.length > 3 && (
                            <div className="games--viewAll">
                                <Link to="/games">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            )}

        </>
    )
}

export default GamesUI
