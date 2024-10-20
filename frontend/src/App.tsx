import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <div className="text-3xl font-bold h-screen mx-auto">
          <nav>Navbar</nav>
          <Outlet />
          <footer>Footer</footer>
      </div>
  )
}

export default App
