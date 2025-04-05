import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import LoginPage from './components/loginPage.jsx'
import MainPage from './components/mainPage'
import RegisterPage from './components/registerPage.jsx'



function App() {
 

return (
<Router>
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/main" element={<MainPage />} />
  </Routes>
</Router>
)
}

export default App