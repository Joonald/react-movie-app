// App Router

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { appTitle, appAuthor } from '../globals/globalVariables';

import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageFavourite from '../pages/PageFavourite';
import PageGenre from '../pages/PageGenre';
import PageAbout from '../pages/PageAbout';
import PageSingle from '../pages/PageSingle';
import PageNotFound from '../pages/PageNotFound';
import Footer from '../components/Footer';





const RouterApp = function () {
    return (
        <BrowserRouter>
            <div className='site-wrapper'>
                <Header title={ appTitle }/>
                <Routes>
                    <Route path="/" exact element={ <PageHome/> }/>
                    <Route path="/favourites" element={ <PageFavourite/> }/>
                    <Route path="/genres" element={ <PageGenre/> }/>
                    <Route path="/about" element={ <PageAbout/> }/>
                    <Route path="/single/:id" element={ <PageSingle/> }/>
                    <Route path="*" element={ <PageNotFound/> }/>
                </Routes>
                <Footer author={ appAuthor }/>
            </div>
        </BrowserRouter>
    );
}
export default RouterApp;