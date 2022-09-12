import { createSlice } from '@reduxjs/toolkit';
import { favMovies } from '../../globals/globalVariables';

function getFavs () {
    let favsFromList = localStorage.getItem(favMovies);
    if (favsFromList === null) {
        favsFromList = [];
    } else {
        favsFromList = JSON.parse(favsFromList);
    }
    return favsFromList;
};

const initialState = {
    items: getFavs()
}

function getIndex(item, arr) {
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
        addFav: (state, action) => {
            const newFavs = [...state.items, action.payload];
            localStorage.setItem(favMovies, JSON.stringify(newFavs));
            state.items = newFavs;
        },
        delFav: (state, action) => {
            const itemsCopy = state.items;
            itemsCopy.splice(getIndex(action.payload, state.items), 1);
            localStorage.setItem(favMovies, JSON.stringify(itemsCopy));
            state.items = itemsCopy;
        }
    },
});

export const { addFav, delFav } = favSlice.actions;

export default favSlice.reducer;