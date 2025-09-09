import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./GuestLayout/Layout";
import Home from "./components/Home";
import CookiePolicy from './components/CookiePolicy';
import TerminiCondizioni from "./components/TerminiCondizioni";
import ScrollToTop from "./components/ScrollToTop";
import SelfCare from "./components/SelfCare";
import SelfImprovment from "./components/SelfImprovment";
import LifeStyle from "./components/LifeStyle";
function App() {
  return (
    <>
      <BrowserRouter> <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
              <Route path="/cookie-policy" element={<CookiePolicy />} />
               <Route path="/termini-condizioni" element={<TerminiCondizioni />} />
                <Route path="/self-care" element={<SelfCare />} />
                 <Route path="/self-improvment" element={<SelfImprovment />} />
                  <Route path="/life-style" element={<LifeStyle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
