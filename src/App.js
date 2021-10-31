import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import AllBooking from './components/AllBooking/AllBooking';
import Login from './components/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin';
import Gallery from './components/Gallery/Gallery';
import TopDeals from './components/TopDeals/TopDeals';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <NavMenu></NavMenu>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
              <Gallery></Gallery>
              <TopDeals></TopDeals>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/bookings'>
              <AllBooking></AllBooking>
            </PrivateRoute>
            <PrivateRoute path='/package-booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/topDeals'>
              <TopDeals></TopDeals>
            </Route>
            <Route path='/gallery'>
              <Gallery></Gallery>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path='/contactUs'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
