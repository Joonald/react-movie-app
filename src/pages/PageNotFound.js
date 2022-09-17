// Page Not Found

// Imports
import { appTitle } from '../globals/globalVariables';
import { useEffect } from 'react';
function PageNotFound () {
    useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);
};

export default PageNotFound;