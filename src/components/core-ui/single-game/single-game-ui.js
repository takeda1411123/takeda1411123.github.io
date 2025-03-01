import React from 'react';
import Youtube from 'react-youtube';
import './single-game.css';

function SingleGameUI({ id, title, desc, tags, link, theme, classes }) {


    return (
        // <Fade bottom>
            <div
                key={id}
                className='gameProject'
                style={{ backgroundColor: theme.quaternary }}
            >
                <div className='game'>
                    <div className='gameContent'>
                        <div className='gameTitle'>
                            <h2>{title}</h2>
                            <p className='gameDescription' style={{ whiteSpace: 'pre-line' }}>
                                {desc}
                            </p>
                        </div>
                        <div className='gameTags'>
                            {tags.map((tag, index) => (
                                <span key={index} className="gameTag">
                                #{tag} 
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="gameVideo">
                        <Youtube videoId={link} />
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        // </Fade>
    );
}

export default SingleGameUI;
