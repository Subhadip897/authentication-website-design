import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home_page';
import SignupPage from "./pages/Signup_page";
import LoginPage from "./pages/Login_page";
import AccountPage from "./pages/Account_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  }
])

function App() {

  return (
    <>
      <main className='h-screen flex justify-center overflow-auto font-[Rubik] no-scrollbar'>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
