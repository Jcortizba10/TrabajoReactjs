import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext'
import './index.css'


const router = createBrowserRouter([
  { path: '/', element: <PokemonList /> },
  { path: '/detail/:pokemonId', element: <PokemonDetail /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  </React.StrictMode>,
)
