// Page About

// Imports
import { appTitle } from '../globals/globalVariables';
import { useEffect } from 'react';
function PageAbout () {
    useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
            <div id='about'>
                
            </div>
        </main>
    )
    

};

export default PageAbout;