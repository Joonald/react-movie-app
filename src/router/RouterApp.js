// App Router

import { HashRouter, Routes, Route} from 'react-router-dom';
import { appTitle, appAuthor, apiKey } from '../globals/globalVariables';

import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageFavourite from '../pages/PageFavourite';
import PageGenre from '../pages/PageGenre';
import PageAbout from '../pages/PageAbout';
import PageSingle from '../pages/PageSingle';
import PageNotFound from '../pages/PageNotFound';
import Footer from '../components/Footer';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import MovieGenre from '../components/MovieGenre'




const RouterApp = function () {

    return (
        <HashRouter>
            <div className='site-wrapper'>
                <Header title={ appTitle }/>
                <Routes>
                    <Route path="/" exact element={ <PageHome/> }/>
                    <Route path="/favourites" element={ <PageFavourite/> }/>
                    <Route path="/genres" element={ <PageGenre/> }/>
                    <Route path="/about" element={ <PageAbout/> }/>
                    <Route path="/single/:id" element={ <PageSingle/> }/>
                    <Route path="*" element={ <PageNotFound/> }/>
                    <Route path="/search/:input" element={ <SearchResult/> }/>
                    
                </Routes>
                <Footer author={ appAuthor }/>
            </div>
        </HashRouter>
    );
}
export default RouterApp;