import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Menu from "./Menu";
import Home from "./pages/Home/Home";
import WorkshopsList from './pages/WorkshopsList/WorkshopsList';

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
                </Routes>
            </Container>
        </>
    );
}

export default App;
