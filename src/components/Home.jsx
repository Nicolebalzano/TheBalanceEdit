import HomeStyle from "../Home.module.css";

import ArticoliSelfCare from "../articoli/ArticoliSelfCare";
import ArticoliLifeStyle from "../articoli/ArticoliLifeStyle";
import ArticoliSelfImprovment from "../articoli/ArticoliSelfImprovment";

import ScrollImages from "./ScrollImages";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Home = () => {
  const articoliRef = useRef(null);
  const scrollToArticoli = () => {
    articoliRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`${HomeStyle["jumbo"]}`}>
        <h1 className={`${HomeStyle["jumbo-title"]}`}>
          Welcome to <br />
          The Balance Edit
        </h1>
        <button onClick={scrollToArticoli} className="btn-articoli">
          Go to the articles ↓
        </button>
      </div>
      <hr />
      <section className="box-intermedio container">
        <div className="d-flex justify-content-center row">
          <h3 className="box-title">INSPIRATION IS EVERYWHERE</h3>
          <ScrollImages />
        </div>
      </section>
      <hr />
      <section className="bg-articles" ref={articoliRef}>
        <div className="container">
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
              1024: { slidesPerView: 3 },
            }}
          >
            {/* card */}
            {ArticoliSelfCare.map((articolo) => (
              <SwiperSlide key={articolo.id}>
                <div className="card text-center">
                  <img
                    src={articolo.immagine}
                    className="card-image"
                    alt="..."
                  />
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
    </>
  );
};
export default Home;
