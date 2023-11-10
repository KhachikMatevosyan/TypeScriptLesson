import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {HomePage,LoginPage,SignupPage} from './component/pages/'

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/">
                  <Route index element={<HomePage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="signup" element={<SignupPage />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App
