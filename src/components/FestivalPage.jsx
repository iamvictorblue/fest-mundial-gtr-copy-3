import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import festLogo from "../assets/fest copy.png";
import posterImage1 from "../assets/festmg3.jpeg";
import posterImage2 from "../assets/festmg4.jpeg";
import bannerImage from "../assets/conc23.jpg";
import simposioImage1 from "../assets/lutieres11.jpg";
import simposioImage2 from "../assets/lutieres2.jpg";
import simposioImage3 from "../assets/lutieres33.jpg";
import simposioImage4 from "../assets/lutieres4.jpg";
import concursoImage1 from "../assets/conc1.jpg";
import concursoImage2 from "../assets/conc2.jpg";
import leonelaImage from "../assets/conc_leo.jpg";
import adlerImage from "../assets/adler.jpeg";
import ivanImage from "../assets/conc_ivan.jpg";
import trioGalantesImage from "../assets/conc_trio.jpg";
import calendarioImage from "../assets/festmg1.jpeg";
import bannerA from "../assets/Concurso Nacional de Guitarra 2025 (ROLL UP BANNER A).jpg";
import bannerB from "../assets/Concurso Nacional de Guitarra 2025 (ROLL UP BANNER B).jpg";
import tacchiImage from "../assets/image002.png";
import oldigesImage from "../assets/image003.png";
import martinezImage from "../assets/image004.jpg";
import escobedoImage from "../assets/image005.jpg";
import postigoImage from "../assets/image006.jpg";
import concursoImage from "../assets/image007.jpg";

const AnimateOnScroll = ({ children, animation }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 }
};

const FestivalPage = () => {
  return (
    <div className="min-h-screen bg-[#C0C0C0] text-black pt-16 relative overflow-hidden" data-navbar-title="Festival Mundial de la Guitarra">
      {/* Decorative banner images */}
      <div className="fixed top-26 left-0 h-[90vh] w-1/4 flex items-center justify-start pointer-events-none z-0">
        <img 
          src={bannerA}
          alt="Festival Banner Left"
          className="h-[90vh] w-auto object-contain opacity-30"
        />
      </div>
      <div className="fixed top-26 right-0 h-[90vh] w-1/4 flex items-center justify-end pointer-events-none z-0">
        <img 
          src={bannerB}
          alt="Festival Banner Right"
          className="h-[90vh] w-auto object-contain opacity-30"
        />
      </div>

      <div className="max-w-[95vw] mx-auto pt-16 px-4 space-y-32 relative z-10">
        {/* Festival Mundial 2025 Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="festival-2025" 
            className="max-w-6xl mx-auto backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out scroll-mt-20"
            style={{
              background: 'linear-gradient(to bottom, rgba(244, 238, 236, 0.9), rgba(251, 220, 209, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col justify-center items-center gap-6">
                {/* Mobile view - show the two original posters */}
                <div className="flex flex-col md:hidden justify-center items-center gap-4 w-full">
                  <img 
                    src={posterImage1}
                    alt="Festival Mundial de la Guitarra 2025 Poster 1"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={posterImage2}
                    alt="Festival Mundial de la Guitarra 2025 Poster 2"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Desktop view - show the banner */}
                <div className="hidden md:block w-full">
                  <img 
                    src={bannerImage}
                    alt="Festival Mundial de la Guitarra 2025 Banner"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Calendario De Eventos Section - Now moved before Simposio */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="calendario" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#666666] border-b-2 border-[#666666]/20 pb-2 text-center">
                Descripción y Calendario De Eventos
              </h2>
              <div className="text-center mb-8">
                <img 
                  src={calendarioImage}
                  alt="Calendario De Eventos"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-lg text-gray-800 space-y-6">
                <p>
                  <span className="font-bold">El Festival Mundial de la Guitarra 2025</span> es un evento sin precedentes en Puerto Rico, dedicado a la Guitarra Clásica, su construcción y su interpretación. Con una visión de calibre internacional, el festival busca posicionar a Mayagüez y a Puerto Rico como un referente global en el ámbito artístico y cultural.
                </p>
                
                <p>
                  Este evento reunirá a destacados artistas, luthiers y concertistas de la escena mundial, ofreciendo una experiencia cultural que combina música, pedagogía y el conocimiento artesanal de la construcción de la Guitarra Clásica.
                </p>
                
                <div>
                  <p className="mb-2">La programación del festival contará con una agenda de acceso completamente gratuito, organizada en cinco áreas principales:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-bold">Simposio Internacional sobre la Construcción de la Guitarra</span> (Ciclo de conferencias).</li>
                    <li><span className="font-bold">Clases magistrales</span> dirigidas a estudiantes de las escuelas Libres de Música.</li>
                    <li><span className="font-bold">Serie de conciertos y degustación de guitarras</span>, con la participación de renombrados concertistas.</li>
                    <li><span className="font-bold">Concurso Nacional de la Guitarra de Puerto Rico</span>, dirigido a niños y jóvenes de 10 a 18 años.</li>
                    <li><span className="font-bold">José Antonio López World Guitar Competition</span>, competencia de categoría profesional.</li>
                  </ul>
                </div>
                
                <p>
                  Los eventos del festival se llevarán a cabo en la Universidad de Puerto Rico - Recinto de Mayagüez, el Teatro Yagüez y el Nuevo Teatro Balboa.
                </p>
                
                <p className="font-semibold text-center mt-4">Todos los eventos del Festival son libre de costos.</p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Simposio Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="simposio" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-6 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#666666] border-b-2 border-[#666666]/20 pb-2 text-center">
                  Simposio Internacional sobre la construcción de la Guitarra
                </h2>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <img 
                    src={simposioImage3}
                    alt="Simposio Internacional 3"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={simposioImage4}
                    alt="Simposio Internacional 4"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={simposioImage1}
                    alt="Simposio Internacional 1"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={simposioImage2}
                    alt="Simposio Internacional 2"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Conciertos Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="conciertos" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#666666] border-b-2 border-[#666666]/20 pb-2 text-center">
                Conciertos
              </h2>
              
              {/* Degustación de Guitarras (formerly Café Conciertos) */}
              <div className="mb-12">
         
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <img 
                      src={ivanImage}
                      alt="Iván Rijos"
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="font-bold">Iván Rijos</p>
                    <p className="text-lg md:text-xl text-gray-700">Puerto Rico</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={trioGalantesImage}
                      alt="Trío Galantes"
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="font-bold">Trío Galantes</p>
                    <p className="text-lg md:text-xl text-gray-700">Amsterdam, Holanda</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#666666] mb-4 text-center">Concierto de Ganadores Concurso Nacional 2024</h3>
                <div className="text-center">
                  <img 
                    src={adlerImage}
                    alt="Adler Mitja"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
                  />
                  <div className="space-y-1">
                    <p className="font-bold">Adler Mitja & Dylan Segarra (Puerto Rico)</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div>
                <h3 className="text-2xl font-bold text-[#666666] mb-4 text-center">Concierto de Clausura</h3>
                <div className="text-center">
                  <img 
                    src={leonelaImage}
                    alt="Leonela Alejandro"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
                  />
                  <div className="space-y-1">
                    <p className="font-bold">Leonela Alejandro (Puerto Rico)</p>
                    <p className="text-lg md:text-xl text-gray-700">"1er Premio, GFA 2024"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Concurso Nacional Section - Moved to after Conciertos */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="concurso-nacional" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#666666] text-center border-b-2 border-[#666666]/20 pb-2">
                Concurso Nacional de Guitarra de Puerto Rico
              </h2>
              <p className="text-xl md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                (Para jóvenes guitarristas de 10 a 18 años)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img 
                  src={concursoImage1}
                  alt="Concurso Nacional 1"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src={concursoImage2}
                  alt="Concurso Nacional 2"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
            </div>
          </section>
        </AnimateOnScroll>

        {/* Festival Mundial 2024 Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="festival-2024" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#666666] border-b-2 border-[#666666]/20 pb-2 text-center">
                Memorias del Festival Mundial de la Guitarra 2024
              </h2>
              <div className="text-center space-y-8">
                <img 
                  src={concursoImage}
                  alt="Festival Mundial 2024"
                  className="w-full max-w-xl mx-auto rounded-lg shadow-lg mb-4"
                />
                <div className="text-gray-800 text-xl md:text-2xl font-[500]">
                  <p>Primer Festival Mundial de la Guitarra</p>
                  <p>Mayagüez, Puerto Rico</p>
                  <p>4-7 de mayo de 2024</p>
                </div>
                {/* YouTube Embeds */}
                <div className="space-y-8">
                  {/* New FMG 2024 Video */}
                  <div className="relative pt-[56.25%] w-full">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/qILEN30-pJo"
                      title="Festival Mundial de la Guitarra 2024"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Concierto de Finalistas Video */}
                  <div className="relative pt-[56.32%] w-full">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/4ys2KLiY574"
                      title="Concierto de Finalistas, Concurso Nacional Gustavo y Beatriz Arvelo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Simposio Video */}
                  <div className="relative pt-[56.25%] w-full max-w-[400px] mx-auto">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/mODYpFhwHEA"
                      title='Simposio- "Festival Mundial de la Guitarra"'
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default FestivalPage; 