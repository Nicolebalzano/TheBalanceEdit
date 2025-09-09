import { Link } from 'react-router-dom';
const Footer = () => {
return <footer >
    <div className=" container p-5 ">
           <div className="d-flex justify-content-between footer-flex">
        
<div className="termini-condizioni text-center">
    <h5 className="text-center">INFO</h5>
<Link to='/cookie-policy'>🍪 Cookie Policy</Link><br /> 
<Link to='/termini-condizioni'>📜 Termini e Condizioni</Link><br /> 
{/* I contenuti pubblicati su questo blog sono a scopo informativo e non sostituiscono il parere di professionisti del settore. L’utilizzo delle informazioni è sotto la responsabilità dell’utente. È vietata la riproduzione non autorizzata di testi, immagini o materiali presenti sul sito. */}
</div>
<div>
    <Link to='/'>  <h3  className='home-footer'>HOME</h3></Link><br /> 
  
</div>
 <div className="social">
        <h5>SOCIAL MEDIA</h5>
        <a href="https://it.pinterest.com/nicolebalzano03/">📌Pinterest</a><br />
        <a href="https://www.instagram.com/checknicolee/" >📸Instagram</a>
    </div>
    </div>
    </div>
</footer>
}
export default Footer;
