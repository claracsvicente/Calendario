import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/calendário'
import NotFound from './pages/notFound'

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}