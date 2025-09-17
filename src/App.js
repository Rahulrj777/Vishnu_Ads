import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dummy from "./components/Dummy";
import Disable from "./components/Disable";
import Whatsapp from "./components/Whatsapp";
import Services from "./pages/Services";
import CompanyRegistration from "./pages/ServicesPages/CompanyRegistration";
import About from "./pages/About";
import Contact from "./pages/Contact";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  <Outlet />;
};

const App = () => {
  return (
    <>
      <Router>
        <Whatsapp />
        {/* <TopButton /> */}
        <Dummy />
        {/* <Chatbot /> */}

        <Disable />

        <Routes>
          {/* UserLayout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* service pages */}

            <Route
              path="/services/company_registration"
              element={<CompanyRegistration />}
            />
          </Route>

          {/* adminlayout */}
          <Route path="/admin" element={<AdminLayout />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
