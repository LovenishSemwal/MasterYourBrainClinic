import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./components/Home.jsx"
import AboutUs from "./components/AboutUs.jsx"
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import OurDoctors from './components/OurDoctors.jsx'
import OurServices from './components/OurServices.jsx'
import Assessment from './components/Assessment.jsx'
import ContactUs from './components/ContactUs.jsx'
import Booking from './components/Booking.jsx'
import BookCover from './components/BookCover.jsx'  // Import BookCover

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookCover />  // BookCover is now the first page
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",  // Changed from "" to "home"
        element: (
          <>
           <Hero/>
           <Home/>
          </>
        )
      },      
      {
        path: 'aboutus',
        element: <AboutUs />
      },
      {
        path: "ourdoctors",
        element: <OurDoctors/>
      },
      {
        path: "ourservices",
        element: <OurServices/>
      },
      {
        path: "assessment",
        element: <Assessment/>
      },
      {
        path: "contactus",
        element: <ContactUs/>
      },
      {
        path: "appointmentbooking",
        element: <Booking/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)