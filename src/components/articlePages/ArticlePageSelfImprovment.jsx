import { useParams } from "react-router-dom";
import ArticoliSelfImprovment from "../../articoli/ArticoliSelfImprovment";

const ArticlePageSelfImprovment = () => {
  const { id } = useParams();
  const articolo = ArticoliSelfImprovment.find((a) => a.id === parseInt(id));

  if (!articolo) {
    return (
      <div className="container">
        <h2>Oops! Article not found 🧐</h2>
        <p>
          We couldn’t find the article you’re looking for. Try checking the link
          or go back to the homepage.
        </p>
      </div>
    );
  }

  return (
    <div className=" article-page">
      <header className="article-header">
        <h1>{articolo.titolo}</h1>
        <h4 className="subtitle">{articolo.sottotitolo}</h4>
        {articolo.immagine && (
          <img
            src={articolo.immagine}
            alt={articolo.titolo}
            className="article-image"
          />
        )}
      </header>

      <section className="article-content">
        {articolo.contenuto && articolo.contenuto.length > 0 ? (
          articolo.contenuto.map((paragrafo, index) => (
            <p key={index} className="article-paragraph">
              {paragrafo}
            </p>
          ))
        ) : (
          <p className="empty-content">
            This article is coming soon. Stay tuned!
          </p>
        )}
      </section>
    </div>
  );
};

export default ArticlePageSelfImprovment;
