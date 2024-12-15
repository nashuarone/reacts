// import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Categories } from './pages/Categories'
import { NotFound } from './pages/NotFound'
import { Locations } from './pages/Locations'
import { Characters } from './pages/Characters'
import { CategoriesLayout } from './layout/CategoriesLayout'
import { Character } from './components/Character'
import { Location } from './components/Location'
import { Episodes } from './pages/Episodes'
import { Episode } from './components/Episode'

function App() {
  return (
    <>
      <div className="card">
        <h1>Welcome to Rick and Morty world!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories" element={<CategoriesLayout />}>
            <Route index element={<Categories />} />
            <Route path="characters" element={<Characters />} />
            <Route path="characters/:id" element={<Character />} />
            <Route path="locations" element={<Locations />} />
            <Route path="locations/:id" element={<Location />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="episodes/:id" element={<Episode />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
