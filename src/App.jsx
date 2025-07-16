import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Games} from './pages/Games';
import {GameDetail} from './pages/GameDetail';
import {NotFound} from './pages/NotFound';
import {Navbar} from './components/Navbar';

export function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/:id" element={<GameDetail />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/:path" element={<NotFound />} />
    </Routes>
    
    </>
  )
}
