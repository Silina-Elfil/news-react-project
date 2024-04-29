import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import NewsPage from './pages/NewsPage';
import SingleNewsPage from './pages/SingleNewsPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<NewsPage/>} />
        <Route path='/:id' element={<SingleNewsPage />}/>
        
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
