import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFav, delFav } from '../features/favs/favSlice';

function FavButton ( {value} ) {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    function handleAddFav() {
        dispatch(addFav({value}));
        setActive(!isActive);
    }
    function handleDelFav() {
        dispatch(delFav({value}))
        setActive(!isActive);
    }
    return (
    <>
        {isActive === false ? 
        <FontAwesomeIcon icon={faHeart} className ='heart' onClick={handleAddFav} />
        :
        <FontAwesomeIcon icon={faHeart} className ='favHeart' onClick={handleDelFav} />}
    </>
        
    
    );
}

export default FavButton;