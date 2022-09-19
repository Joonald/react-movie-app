// Page About

// Imports
import { appTitle } from '../globals/globalVariables';
import { useEffect } from 'react';
import tmdb from '../image/tmdb-logo.svg';
function PageAbout () {
    useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
            <div>
                <h2 className='about-title'>Welcome to Cloud Movies!</h2>
                <section id='about'>

                    <section className='project'>
                        <h3>The Project</h3>
                        <p>Cloud Movies is a live movie database that lists movies based on their rating, popularity and release date. Search for your favourite film or browse movies by their genre. All while having the option to curating your personal favourites list!</p>
                        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                        <img className='tmdb-logo'src={tmdb} alt="the movie database logo" />
                    </section>
                    
                    <section className='team'>
                        <h3>The Team</h3>
                        <p>Cloud Movies is a React JS project created by Jonny and Josy, who are both currently enrolled in BCIT's Front-End Web Development Program. After much pain and suffering they were able to harness their skills and create an app that they can look back on and be proud of.</p>
                    </section>

                </section>    
            </div>
        </main>
    )
    

};

export default PageAbout;