import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Menu from "./Menu";
import Home from "./pages/Home/Home";
import WorkshopsList from './pages/WorkshopsList/WorkshopsList';
import WorkshopDetails from './pages/WorkshopDetails/WorkshopDetails';

function App() {
    return (
        <>
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
                        path="/workshops/:id"
                        element={<WorkshopDetails />}
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;
