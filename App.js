import { Routes, Route } from 'react-router-dom';
import Todos from './components/Todos';
import PageNumbers from './components/PageNumbers';

function App() {
    return (
        <>
            <PageNumbers />
            <Routes>
                <Route path='/' element={<Todos />} />
                <Route path='/:id' element={<Todos />} />
                <Route path={'*'} element={<h2>Page not found</h2>} />
            </Routes>
        </>
        
    )
}

export default App;