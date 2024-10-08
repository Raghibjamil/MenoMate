// import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
// import Wellness from "./pages/Wellness"
// import Wellness from './pages/Wellness'
// import { useState } from 'react'
import './App.css'

 import SignIn from './pages/SignIn'
 import Signup from './pages/SignUp'
import Homepage from "./pages/Homepage.jsx"
// import Landing from './pages/Landing.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing  from './pages/Landing.jsx';
import Map from "./pages/Map.jsx"
import MenstrualPhaseForm from './pages/recomadation.jsx';
import Mainrecondationpage from './pages/Mainrecondationpage.jsx';

const router = createBrowserRouter([
 

   {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Homepage />,  // Route for Homepage
  },
  {
    path:"/signin",
    element: <SignIn />,
  },
  {
    path:"/signup",
    element: <Signup />,
  }
,
  {
    path: "/maps",
    element: <Map />,
  },

  {
    path: "/checking",
    element: <div>Hello world!</div>,
  },
  {
    path: "/Mainrecondationpage",
    element: <Mainrecondationpage />,
  },
]);

function App() {


  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  )
}

export default App
