import RoutesApp from './routes'
import './App.css'
import Footer from './Rotas/Footer/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow">
        <RoutesApp />
      </div>
      {/*<Footer />*/}
    </div>
  )
}

export default App