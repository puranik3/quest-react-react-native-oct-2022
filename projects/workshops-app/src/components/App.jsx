import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Menu from "./Menu";
import Home from "./pages/Home/Home";
import WorkshopsList from './pages/WorkshopsList/WorkshopsList';
import WorkshopDetails from './pages/WorkshopDetails/WorkshopDetails';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// not the way to import lazily-loaded component
// if we do this anywhere, the component and its children code will be part of the main bundle
// import Feedback from './pages/Feedback/Feedback';

// way to import a lazy-loaded component
const Feedback = lazy( () => import( './pages/Feedback/Feedback' ) );

function App() {
    return (
        <Suspense>
            <ToastContainer
                autoClose={5000}
            />
            <Menu />
            <Container className="my-4">
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}
                    />
                    <Route 
                        path="/workshops"
                        element={<WorkshopsList />}
                    />
                    <Route 
                        path="/workshops/:id/*"
                        element={<WorkshopDetails />}
                    />
                    <Route 
                        path="/feedback"
                        element={
                            <Suspense loading={<div>Loading feedback</div>}>
                                <Feedback />
                            </Suspense>
                        }
                    />
                </Routes>
            </Container>
        </Suspense>
    );
}

export default App;
