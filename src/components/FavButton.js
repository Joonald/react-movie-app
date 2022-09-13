import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addFav, delFav } from '../features/favs/favSlice';

function FavButton ( {movie, isFav } ) {
    // const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    function handleAddFav() {
        dispatch(addFav(movie));
    }
    function handleDelFav() {
        dispatch(delFav(movie))
    }
    return (
    <>
        {isFav === false ? 
        <FontAwesomeIcon icon={faHeart} className ='heart' onClick={handleAddFav} />
        :
        <FontAwesomeIcon icon={faHeart} className ='favHeart' onClick={handleDelFav} />}
    </>
        
    
    );
}

export default FavButton;