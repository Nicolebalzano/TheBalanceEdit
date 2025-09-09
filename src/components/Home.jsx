import HomeStyle from "../Home.module.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const Home = () => {
  const articoliRef = useRef(null);
   const scrollToArticoli = () => {
    articoliRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const articoli = [
  {
    "immagine": "/logo.png",
    "titolo": "Mappe concettuali per la scuola primaria",
    "contenuto": "Una guida visiva per aiutare gli studenti a comprendere gli articoli grammaticali attraverso schemi e mappe intuitive."
  },
  {
        "immagine": "/logo.png",
    "titolo": "Articoli determinativi e indeterminativi",
    "contenuto": "Schede didattiche pensate per facilitare l'apprendimento degli articoli nella scuola primaria."
  },
  {
        "immagine": "/logo.png",
    "titolo": "Come usare gli articoli in italiano",
    "contenuto": "Un approfondimento per studenti di livello A1/A2 su come evitare gli errori più comuni con gli articoli."
  },
  {
    "immagine": "/logo.png",
    "titolo": "Gli articoli determinativi",
    "contenuto": "Spiegazione dettagliata e esempi pratici per padroneggiare gli articoli determinativi in italiano."
  },
  {
    "immagine": "/logo.png",    "titolo": "Usi e forme degli articoli",
    "contenuto": "Una panoramica completa sugli articoli determinativi e indeterminativi, con focus su grammatica e sintassi."
  },
  {
    "immagine": "/logo.png",    "titolo": "Gli articoli partitivi",
    "contenuto": "Materiale didattico per introdurre e spiegare gli articoli partitivi ai bambini in modo semplice e coinvolgente."
  },
  {
    "immagine": "/logo.png",   
     "titolo": "Schede didattiche sugli articoli",
    "contenuto": "Risorse creative per insegnare gli articoli nella scuola primaria con attività pratiche e giochi."
  },
  {
    "immagine": "/logo.png",
   "titolo": "Esercizi sugli articoli",
    "contenuto": "Una raccolta di esercizi interattivi per consolidare l'uso corretto degli articoli in italiano."
  },
  {
    "immagine": "/logo.png",
        "titolo": "Mappe per gli articoli",
    "contenuto": "Strumenti visivi per aiutare gli studenti a memorizzare e comprendere le regole degli articoli."
  },
  {
    "immagine": "/logo.png",    "titolo": "Risorse interattive sugli articoli",
    "contenuto": "Attività digitali e giochi didattici per rendere l'apprendimento degli articoli più coinvolgente."
  }
]

  return (
    <>
      <div className={`${HomeStyle["jumbo"]}`}>
               <h1 className={`${HomeStyle["jumbo-title"]}`}>
          Welcome to <br/>The Balance Edit
        </h1>  
         <button onClick={scrollToArticoli} className="btn-articoli">
           Go to the articles ↓
        </button>
   
      </div><hr /><hr /> <hr />
      <section className="bg-articles" ref={articoliRef}> 
      <div className="container-fluid">
        <h3 className="articoli text-center">YOU MIGHT BE INTERESTED</h3>
   <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    // pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
  >
      {/* card */}
       {articoli.map((articolo, index) => (
       <SwiperSlide key={index}>
        <div className="card text-center">
           <img src={articolo.immagine} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className="card-content">
      <h5 className="card-title">{articolo.titolo}</h5>
    <p className="card-text">{articolo.contenuto}</p>
    </div>
    <a href="#" className="btn-card">Scopri di più</a>
  </div>
        </div>
 
</SwiperSlide> 
 ))}
 </Swiper>
      </div>
    
      </section>
    </>
  );
};
export default Home;
