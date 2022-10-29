import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Menu from "./Menu";
import Home from "./pages/Home/Home";
import WorkshopsList from './pages/WorkshopsList/WorkshopsList';
import WorkshopDetails from './pages/WorkshopDetails/WorkshopDetails';
import Feedback from './pages/Feedback/Feedback';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (
        <>
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
                        element={<Feedback />}
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;
