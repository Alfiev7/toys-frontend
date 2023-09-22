
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Homepage } from './pages/Homepage.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import './assets/style/main.css'

import { store } from './store/store.js'

export default function App() {

  return (
      <Provider store={store}>
          <Router>
              <section className="main-layout app">
                  <AppHeader />
                  <main>
                      <Routes>
                          <Route element={<Homepage />} path="/" />
                          <Route element={<ToyIndex />} path="/toy" />
                          <Route element={<ToyDetails />} path="/toy/:toyId" />
                          <Route element={<Dashboard />} path='/dashboard' />
                      </Routes>
                  </main>
                  
              </section>
          </Router>
       </Provider>
  )
}