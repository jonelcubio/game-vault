import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Library} from './pages/Library';
import {GameDetail} from './pages/GameDetail';
import {NotFound} from './pages/NotFound';
import {Navbar} from './components/Navbar';


export function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/:id" element={<GameDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </>
  )
}
