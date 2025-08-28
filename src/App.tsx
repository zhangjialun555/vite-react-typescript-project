
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { I18nProvider } from './contexts/I18nContext'
import { LayoutProvider } from './contexts/LayoutContext'
import { AntdThemeProvider } from './components/AntdThemeProvider'
import Navigation from './components/Navigation'
import AppRoutes from './router'
import './App.css'

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AntdThemeProvider>
          <LayoutProvider>
            <Router>
              <div className="App">
                <Navigation />
                <AppRoutes />
              </div>
            </Router>
          </LayoutProvider>
        </AntdThemeProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default App
