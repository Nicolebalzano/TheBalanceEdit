import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./GuestLayout/Layout";
import Home from "./components/Home";
import CookiePolicy from './components/CookiePolicy';
import TerminiCondizioni from "./components/TerminiCondizioni";
import ScrollToTop from "./components/ScrollToTop";
// self improvment section import
import SelfImprovment from './pages/SelfImprovment'
import ArticlePageSelfImprovment from './components/articlePages/ArticlePageSelfImprovment';
// life style section import
import LifeStyle from "./pages/LifeStyle";
import ArticlePagesLifeStyle from './components/articlePages/ArticlePagesLifeStyle';
// self care section import
import SelfCare from "./pages/SelfCare";
import ArticlePageSelfCare from './components/articlePages/ArticlePageSelfCare';

function App() {
  return (
    <>
      <BrowserRouter> <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/self-care-article/:id" element={<ArticlePageSelfCare />} />
          <Route path="/life-style-article/:id" element={<ArticlePagesLifeStyle />} />
          <Route path="/self-improvment-article/:id" element={<ArticlePageSelfImprovment/>} />
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
