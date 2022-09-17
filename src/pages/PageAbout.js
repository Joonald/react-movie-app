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

        </main>
    )
    

};

export default PageAbout;