import './App.css'
import Home from './containers/Home'
import Nav from './containers/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchResult from './containers/SearchResult'
import MovieDetail from './components/movies/MovieDetail'
import PeopleDetails from './components/people/PeopleDetails'
import TVDetails from './components/tv/TVDetails'
import Footer from './containers/Footer'

function App() {

   return (
      <div className="flex flex-col items-start min-h-screen overflow-x-hidden">
         <Router >
            <Nav />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/search' element={<SearchResult />} />
               <Route path='/movie/:id' element={<MovieDetail />} />
               <Route path='/people/:id' element={<PeopleDetails />} />
               <Route path='/tv/:id' element={<TVDetails />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   )
}

export default App
