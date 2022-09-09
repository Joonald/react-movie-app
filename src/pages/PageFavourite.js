// Page Favourite

// Imports
import { useSelector } from 'react-redux';
import { addFav, delFav } from '../features/favs/favSlice';

function PageFavourite () {
    const favs = useSelector((state) => state.favs.items);
};

export default PageFavourite;