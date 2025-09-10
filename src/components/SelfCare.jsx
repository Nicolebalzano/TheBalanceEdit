import HeaderPagesStyle from "../HeaderPages.module.css";
import { useRef } from "react";
const SelfCare = () => {
  const articoliRef = useRef(null);
  const scrollToArticoli = () => {
    articoliRef.current?.scrollIntoView({ behavior: "smooth" });
  };
     const articoli = [
  {
    "immagine": "/img1.jpg",
    "titolo": "Mappe concettuali per la scuola primaria",
    "contenuto": "Una guida visiva per aiutare gli studenti a comprendere gli articoli grammaticali attraverso schemi e mappe intuitive."
  },
  {
        "immagine": "/img2.jpg",
    "titolo": "Articoli determinativi e indeterminativi",
    "contenuto": "Schede didattiche pensate per facilitare l'apprendimento degli articoli nella scuola primaria."
  },
  {
        "immagine": "/img3.jpg",
    "titolo": "Come usare gli articoli in italiano",
    "contenuto": "Un approfondimento per studenti di livello A1/A2 su come evitare gli errori più comuni con gli articoli."
  },
  {
    "immagine": "/img.jpg",
    "titolo": "Gli articoli determinativi",
    "contenuto": "Spiegazione dettagliata e esempi pratici per padroneggiare gli articoli determinativi in italiano."
  },
  {
    "immagine": "/img.jpg",    "titolo": "Usi e forme degli articoli",
    "contenuto": "Una panoramica completa sugli articoli determinativi e indeterminativi, con focus su grammatica e sintassi."
  },
  {
    "immagine": "/img6.jpg",    "titolo": "Gli articoli partitivi",
    "contenuto": "Materiale didattico per introdurre e spiegare gli articoli partitivi ai bambini in modo semplice e coinvolgente."
  },
  {
    "immagine": "/img7.jpg",   
     "titolo": "Schede didattiche sugli articoli",
    "contenuto": "Risorse creative per insegnare gli articoli nella scuola primaria con attività pratiche e giochi."
  },
  {
    "immagine": "/img8.jpg",
   "titolo": "Esercizi sugli articoli",
    "contenuto": "Una raccolta di esercizi interattivi per consolidare l'uso corretto degli articoli in italiano."
  },
  {
    "immagine": "/img9.jpg",
        "titolo": "Mappe per gli articoli",
    "contenuto": "Strumenti visivi per aiutare gli studenti a memorizzare e comprendere le regole degli articoli."
  },
  {
    "immagine": "/img10.jpg",    "titolo": "Risorse interattive sugli articoli",
    "contenuto": "Attività digitali e giochi didattici per rendere l'apprendimento degli articoli più coinvolgente."
  }
]
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
          {articoli.map((articolo, index) => (
            <div className="card m-3">
              <img src={articolo.immagine} className="card-image" alt="..." />
              <div className="card-body">
                <div className="card-content">
                  <h5 className="card-title">{articolo.titolo}</h5>
                  <p className="card-text">{articolo.contenuto}</p>
                </div>
                <a href="#" className="btn-card">
                  Scopri di più
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default SelfCare;
