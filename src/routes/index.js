import { Routes ,Route} from 'react-router-dom';
import {Home, AboutUs , ContactUs , Movies ,MoviesDetails, Search ,
       TVSeries , Custom404 , SignIn , SignUp} from '../pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/movies/:id" element={<MoviesDetails/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/tvseries" element={<TVSeries/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<Custom404/>}/>
        </Routes>
    )
}

export default AppRoutes;