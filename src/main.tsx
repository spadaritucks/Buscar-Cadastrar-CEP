import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/cadastro.tsx'
import Listagem from './pages/listagem.tsx'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/cadastro',
    element: <Cadastro />
  },

  {
    path: '/listagem',
    element: <Listagem/>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
