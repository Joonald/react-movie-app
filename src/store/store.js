import { configureStore } from '@reduxjs/toolkit';
import favsSlice from '../features/favs/favSlice';

export default configureStore ( {
    reducer: {
        favs: favsSlice,
    },
})