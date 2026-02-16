// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
// import Home from "./components/Home.jsx"
// import AboutUs from "./components/AboutUs.jsx"
// import './index.css'
// import App from './App.jsx'
// import Hero from './components/Hero.jsx'
// import OurDoctors from './components/OurDoctors.jsx'
// import OurServices from './components/OurServices.jsx'
// import Assessment from './components/Assessment.jsx'
// import ContactUs from './components/ContactUs.jsx'
// import Booking from './components/Booking.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: (
//           <>
//            <Hero/>
//            <Home/>
//           </>
//         )
//       },      
//       {
//         path: 'aboutus',
//         element: <AboutUs />
//       },
//       {
//         path: "ourdoctors",
//         element: <OurDoctors/>
//       },
//       {
//         path: "ourservices",
//         element: <OurServices/>
//       },
//       {
//         path: "assessment",
//         element: <Assessment/>
//       },
//       {
//         path: "contactus",
//         element: <ContactUs/>
//       },
//       {
//         path: "appointmentbooking",
//         element: <Booking/>
//       }
     
      
            
//     ]
//   }
// ])

// createRoot(document.getElementById('root')).render(

//   <RouterProvider router={router} />

// )





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

// Import Admin Components (all in components folder)
// import  AdminLayout  from './components/AdminLayout.jsx'
import AdminLayout from './components/Adminlayout.jsx'
// import ManageDoctors from './components/ManageDoctors.jsx'
import ManageDoctors from './components/Managedoctors.jsx'
// import ManageServices from './components/ManageServices.jsx'
import ManageServices from './components/Manageservices.jsx'
// import ManageAssessments from './components/ManageAssessments.jsx'
import ManageAssessments from './components/Manageassessments.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
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
  },
  // Admin Portal Routes (separate from main app layout)
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "doctors",
        element: <ManageDoctors />
      },
      {
        path: "services",
        element: <ManageServices />
      },
      {
        path: "assessments",
        element: <ManageAssessments />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
// import Home from "./components/Home.jsx"
// import AboutUs from "./components/AboutUs.jsx"
// import './index.css'
// import App from './App.jsx'
// import Hero from './components/Hero.jsx'
// import OurDoctors from './components/OurDoctors.jsx'
// import OurServices from './components/OurServices.jsx'
// import Assessment from './components/Assessment.jsx'
// import ContactUs from './components/ContactUs.jsx'
// import Booking from './components/Booking.jsx'
// import BookCover from './components/BookCover.jsx'  // Import BookCover

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <BookCover />  // BookCover is now the first page
//   },
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "home",  // Changed from "" to "home"
//         element: (
//           <>
//            <Hero/>
//            <Home/>
//           </>
//         )
//       },      
//       {
//         path: 'aboutus',
//         element: <AboutUs />
//       },
//       {
//         path: "ourdoctors",
//         element: <OurDoctors/>
//       },
//       {
//         path: "ourservices",
//         element: <OurServices/>
//       },
//       {
//         path: "assessment",
//         element: <Assessment/>
//       },
//       {
//         path: "contactus",
//         element: <ContactUs/>
//       },
//       {
//         path: "appointmentbooking",
//         element: <Booking/>
//       }
//     ]
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )