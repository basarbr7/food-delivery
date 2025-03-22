import React from 'react'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './page/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>}></Route>
    </Route>
  )
);



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App