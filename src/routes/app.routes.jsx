import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { Details } from '../pages/Details'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewDish />} />
      <Route path='/dish/:id' element={<Details />} />
      <Route path='/edit/:id' element={<EditDish />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}