import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404')),
      MainPage = lazy(() => import('../pages/MainPage')),
      ComicsPage = lazy(() => import('../pages/ComicsPage')),
      SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage')),
      SingleCharacterPage = lazy(() => import('../pages/singleCharacterPage/SingleCharacterPage')),
      SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/comics' element={<ComicsPage/>}/>
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComicPage} dataType='comic' />} />
                            <Route path='/characters/:id' element={<SinglePage Component={SingleCharacterPage} dataType='character'/>} />
                            <Route path='*' element={<Page404/>}></Route>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;