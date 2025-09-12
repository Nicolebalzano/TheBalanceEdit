import HeaderPagesStyle from "../HeaderPages.module.css";
import ArticoliSelfCare from "../articoli/ArticoliSelfCare";
import { Link } from "react-router-dom";
import { useRef } from "react";
const SelfCare = () => {
  const articoliRef = useRef(null);
  const scrollToArticoli = () => {
    articoliRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`self-care ${HeaderPagesStyle["jumbo"]}`}>
        <h1 className={`${HeaderPagesStyle["title-articles-sections"]}`}>
          Self Care
        </h1>
        <button onClick={scrollToArticoli} className="btn-articoli">
          Go to the articles ↓
        </button>
      </div>{" "}
      <hr />
      <hr />
      <section ref={articoliRef} className="pt-5 text-center bg-articles mx-3">
        <h2 className="articoli"> READ ABOUT SELF CARE</h2>
        <div className="d-flex flex-wrap  justify-content-center">
          {ArticoliSelfCare.map((articolo) => (
            <div key={articolo.id}>
              <div className="card m-3 text-center">
                <img src={articolo.immagine} className="card-image" alt="..." />
                <div className="card-body">
                  <div className="card-content">
                    <h5 className="card-title">{articolo.titolo}</h5>
                    <p className="card-text">{articolo.sottotitolo}</p>
                  </div>
                  <Link
                    to={`/self-care-article/${articolo.id}`}
                    className="btn-card"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default SelfCare;
