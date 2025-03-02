import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Youtube from 'react-youtube';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';
import { headerData } from '../../../data/headerData';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import Contacts from '../../container/contacts';
import map1 from '../../../assets/png/Map1.png';
import WebTitleImg from '../../../assets/png/WebTitleImg.png';
import './archives.css'

function Archives() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover":
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <div className="gamePage" style={{ backgroundColor: theme.secondary }}>
                {/* Header? */}
                <Helmet>
                    <title>{headerData.name} | Archives</title>
                </Helmet>
                <div 
                    className="gamePage-header" 
                    style={{ 
                        // backgroundColor: theme.primary, 
                        backgroundImage: `url(${map1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <Link to="/">
                        <AiOutlineHome className={classes.home} />
                    </Link>
                    <h1 style={{ color: theme.secondary }}>Archives</h1>
                </div>
                {/* What is archives? */}
                <div style={{ backgroundColor: theme.secondary }}>
                    <Container className="about" id="about">
                        <div className="line-styling">
                            <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                            <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                            <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                        </div>
                        <div className="about-body">
                            <div className="about-description">
                                <h2 style={{ color: theme.primary }}>What is Archives</h2>
                                <p style={{ color: theme.tertiary }}>"Archives" is a location-based AR game for smartphones set on the Kingston University campus. 
                                    <br /><br />
                                    Players explore the campus while solving games created within the campus grounds.
                                </p>
                            </div>
                            <div className="about-animation">
                                <img src={WebTitleImg} />
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Video */}
                <div className="gameMainVideo">
                    <Youtube videoId="IlzrSsyFZPY" />
                </div>
                <div className='gameDetails'>
                    <div className='gameDetail'>
                        <div className='gameDetailContent'>
                            <div className='gameDetailTitle'>
                                <h2>Location-based Game</h2>
                                <p className='gameDescription' style={{ whiteSpace: 'pre-line' }}>
                                The user's location is obtained, and enemy characters are displayed around the user.
                                Characters are displayed as the user moves.
                                </p>
                            </div>
                        </div>
                        <div className="gameDetailVideo">
                            <Youtube videoId="6wT735daIqc" />
                        </div>
                    </div>
                </div>
                <div className='gameDetails'>
                    <div className='gameDetail'>
                        <div className="gameDetailVideo">
                            <Youtube videoId="kw2TBig1imE" />
                        </div>
                        <div className='gameDetailContent'>
                            <div className='gameDetailTitle'>
                                <h2>Battle</h2>
                                <p className='gameDescription' style={{ whiteSpace: 'pre-line' }}>
                                    You will fight against enemy characters tapped on the map. 
                                    Defeat the enemies and protect the campus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gameDetails'>
                    <div className='gameDetail'>
                        <div className='gameDetailContent'>
                            <div className='gameDetailTitle'>
                                <h2>AR Games</h2>
                                <p className='gameDescription' style={{ whiteSpace: 'pre-line' }}>
                                    Many AR-based games are included, so use the campus to complete the challenges!
                                </p>
                            </div>
                        </div>
                        <div className="gameDetailVideo">
                            <Youtube videoId="SaNsnejxIaM" />
                        </div>
                    </div>
                </div>
                <div className='gameDetails'>
                    <div className='gameDetail'>
                        <div className="gameDetailVideo">
                            <Youtube videoId="V0n_XUYh0g0" />
                        </div>
                        <div className='gameDetailContent'>
                            <div className='gameDetailTitle'>
                                <h2>Map Function</h2>
                                <p className='gameDescription' style={{ whiteSpace: 'pre-line' }}>
                                    Using location data and map features, you can easily reach your destination without getting lost. You can also assist visitors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gameDetails'>
                    <div className='gameDetail'>
                        <div className='gameDetailContent'>
                            <div className='gameDetailTitle'>
                                <h2>AI Assistant</h2>
                                <p className='gameDescription' style={{ whiteSpace: 'pre-line' }}>
                                You can communicate with the AI assistant to get information about the university and the games.
                                </p>
                            </div>
                        </div>
                        <div className="gameDetailVideo">
                            <Youtube videoId="_w0AB7TjiKI" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='gameDetailContact'>
            <Contacts />
            </div>
            
        </div>
    )
}

export default Archives
