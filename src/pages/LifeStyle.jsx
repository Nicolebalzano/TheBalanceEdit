import { Link } from "react-router-dom";
import HeaderPagesStyle from "../HeaderPages.module.css";
import ArticoliLifeStyle from "../articoli/ArticoliLifeStyle";
import { useRef } from "react";
const LifeStyle = () => {
     const articoliRef = useRef(null);
       const scrollToArticoli = () => {
        articoliRef.current?.scrollIntoView({ behavior: "smooth" });
      };
 
return <>
<div className= {`life-style ${HeaderPagesStyle["jumbo"]}`}>
    <h1  className={`${HeaderPagesStyle["title-articles-sections"]}`}>Life Style</h1>
      <button onClick={scrollToArticoli} className="btn-articoli">
          Go to the articles ↓
        </button>
</div><hr /><hr />
 <section ref={articoliRef} className="pt-5 text-center bg-articles mx-3"> 
    <h2 className="articoli">READ ABOUT LIFE STYLE</h2>
    <div className="d-flex flex-wrap  justify-content-center">
 {ArticoliLifeStyle.map((articolo, index) => (
        <div className="card m-3" key={index}>
           <img src={articolo.immagine} className="card-image" alt="..."/>
  <div className="card-body">
    <div className="card-content">
      <h5 className="card-title">{articolo.titolo}</h5>
    <p className="card-text">{articolo.sottotitolo}</p>
    </div>
    <Link
      to={`/life-style-article/${articolo.id}`}
      className="btn-card"
        >
         Scopri di più
     </Link>
  </div>
        </div>

 ))}
    </div>
</section>
</>
}
export default LifeStyle;