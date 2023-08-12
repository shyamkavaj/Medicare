import Home from '../pages/Home'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Doctor from '../pages/Doctor'
import DoctorDetail from '../pages/Doctors/DoctorDetails'

import { Routes, Route } from 'react-router-dom'

const routes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Doctor/:id" element={<DoctorDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />

    </Routes>
}

export default routes
