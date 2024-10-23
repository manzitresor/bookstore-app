import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
      <div className="h-screen">
          <Navbar/>
          <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'>
          <Outlet /> 
          </main>
          <footer>Footer</footer>
      </div>
  )
}

export default App
