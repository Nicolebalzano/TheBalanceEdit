import{ useEffect, useState, useRef } from 'react';


const images = [
  '/public/img1.jpg',
  '/public/img2.jpg',
  '/public/img3.jpg',
  '/public/img4.jpg',
    '/public/img5.jpg',
      '/public/img6.jpg',
        '/public/img7.jpg',
          '/public/img8.jpg',
            '/public/img9.jpg', 
             '/public/img10.jpg',
               '/public/img11.jpg',
                 '/public/img12.jpg'
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
          className={`fade-image ${currentIndex === i ? 'visible' : ''}`}
        />
      ))}
    </div>
  );
}

export default ScrollImages;
