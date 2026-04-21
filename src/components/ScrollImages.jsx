import{ useEffect, useState, useRef } from 'react';


const images = [

            '/img11.jpg', 
         
];

function ScrollImages() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100 && !hasStarted) {
        setHasStarted(true);
        let i = 0;
        const interval = setInterval(() => {
          setCurrentIndex(i);
          i++;
          if (i >= images.length) {
            clearInterval(interval);
          }
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className="image-box">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Immagine ${i + 1}`}
          className={`fade-image ${currentIndex === i ? 'visible' : ''} scroll-image`}
        />
      ))}
    </div>
  );
}

export default ScrollImages;
