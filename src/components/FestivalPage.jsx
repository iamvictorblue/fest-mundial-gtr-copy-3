import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import festLogo from "../assets/fest copy.png";
import festivalPosterImage from "../assets/image001.jpg";
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
    <div className="min-h-screen bg-[rgb(227,163,83)] text-black pt-16" data-navbar-title="Festival Mundial de la Guitarra">
      {/* Background decorative images */}
      <div 
        className="fixed top-0 left-0 w-1/4 h-screen opacity-10 bg-contain bg-left bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${festivalPosterImage})` }}
      />
      <div 
        className="fixed top-0 right-0 w-1/4 h-screen opacity-10 bg-contain bg-right bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${festivalPosterImage})` }}
      />

      <div className="max-w-6xl mx-auto pt-16 px-4 space-y-32 relative z-10">
        {/* Festival Mundial 2025 Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="festival-2025" 
            className="max-w-3xl mx-auto backdrop-blur-xl px-4 py-6 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out scroll-mt-20"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 127, 80, 0.9), rgba(255, 127, 80, 0.9))',
            }}
          >
            <div className="max-w-2xl mx-auto">
              <img 
                src={festivalPosterImage}
                alt="Festival Mundial de la Guitarra 2025"
                className="w-3/4 max-w-xl mx-auto mb-6 rounded-lg shadow-lg"
              />
              <div className="text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white border-b-2 border-white/20 pb-2">
                  2do Festival Mundial de la Guitarra
                </h1>
                <div className="text-white space-y-4">
                  <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">MAYAGÜEZ 2025</p>
                  <p className="text-xl md:text-2xl">1-4 DE MAYO DE 2025</p>
                  <p className="text-xl md:text-2xl mt-4">WWW.FESTIVALMUNDIALDELAGUITARRA.COM</p>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Simposio Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="simposio" 
            className="mx-auto max-w-3xl backdrop-blur-xl px-4 py-6 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-6 w-full">
                <img src={festLogo} alt="Festival Logo" className="w-40 h-40 object-contain -mt-16 mb-2" />
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF7F50] border-b-2 border-[#FF7F50]/20 pb-2 text-center">
                  Simposio Internacional sobre la construcción de la Guitarra
                </h2>
              </div>
              <div className="text-center">
                <img 
                  src={tacchiImage}
                  alt="Simposio Internacional"
                  className="w-full max-w-xl mx-auto rounded-lg shadow-lg mb-4"
                />
                <div className="text-gray-700 mt-4 text-left space-y-4">
                  <p className="text-lg md:text-2xl font-[400] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El Festival Mundial de la Guitarra, Mayagüez 2025 promete ser un evento sin precedentes en 
                    Puerto Rico, consolidando a la ciudad de Mayagüez en un punto clave para el arte y la cultura a nivel 
                    internacional. Este festival único en su clase se distingue por ofrecer una experiencia integral que combina 
                    música, pedagogía y el conocimiento artesanal detrás de la guitarra clásica.
                  </p>
                  <p className="text-lg md:text-2xl font-[200] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El evento contará con una serie de conciertos protagonizados por virtuosos de renombre 
                    mundial, un Simposio Internacional sobre la construcción de la guitarra clásica, y clases 
                    magistrales dirigidas a los estudiantes de la Escuela Libre de Música de Mayagüez.
                  </p>
                  <p className="text-lg md:text-2xl font-[150] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    En la parte musical, los conciertos incluirán la participación de intérpretes de talla mundial como 
                    Leonela Alejandro, ganadora del prestigioso GFA 2024, el brasileño Marcus Toscano, y el 
                    reconocido virtuoso puertorriqueño Iván Rijos, cuya maestría es ampliamente aclamadas en los 
                    escenarios internacionales.
                  </p>
                  <p className="text-lg md:text-2xl font-[100] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El Festival Mundial de la Guitarra, Mayagüez 2025 se proyecta como un evento que trascenderá 
                    fronteras, posicionando a Puerto Rico como un referente cultural y artístico en el mundo de la guitarra 
                    clásica.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Concurso Nacional Section - Slightly to the left */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="concurso-nacional" 
            className="mx-auto max-w-3xl backdrop-blur-xl px-4 py-6 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF7F50] text-center border-b-2 border-[#FF7F50]/20 pb-2">
                Concurso Nacional de Guitarra, Gustavo y Beatriz Arvelo
              </h2>
              <p className="text-xl md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                (Para jóvenes guitarristas puertorriqueños de 12 a 18 años)
              </p>
              <img 
                src={oldigesImage}
                alt="Concurso Nacional"
                className="w-full rounded-lg shadow-lg mb-8"
              />
              <div className="space-y-6 text-gray-800">
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
                    Sábado, 3 de mayo de 2025
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Bases del Concurso
                  </h4>
                  <p className="text-lg md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El Concurso Nacional de Guitarra Gustavo y Beatriz Arvelo estará subdividido en dos categorías:
                    Categoría de 12 a 15 años y Categoría de 16 a 18 años.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                      Categoría de 12 a 15 años
                    </h4>
                    <p className="text-lg md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                      La Categoría de 12 a 15 años consistirá de una fase en la cual cada participante deberá interpretar una pieza de libre selección con una duración máxima de 3 minutos. (Todas las obras deben ser interpretadas de memoria).
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                      Categoría de 16 a 18 años
                    </h4>
                    <p className="text-lg md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                      La Categoría de 16 a 18 años consistirá de una Fase eliminatoria y un Concierto de Finalistas.
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-lg md:text-2xl font-[500]">
                      <li>
                        <span className="font-semibold">Fase eliminatoria:</span> Cada participante deberá interpretar un repertorio de libre elección con una duración máxima de 5 minutos. (Todas las obras deben ser interpretadas de memoria). Posterior a la Primera Fase, el jurado anunciará los cuatro concursantes que se presentarán en el Concierto de Finalistas.
                      </li>
                      <li>
                        <span className="font-semibold">Concierto de Finalistas:</span> Cada uno de los cuatro concursantes seleccionados deberá interpretar un repertorio de libre elección de 15 minutos de duración. (Se permite utilizar el mismo repertorio presentado en la primera fase del concurso y todas las obras deben ser interpretadas de memoria).
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                      Proceso de inscripción
                    </h4>
                    <p className="text-lg md:text-2xl mb-4">
                      La inscripción se realizará entre el 1 de abril hasta el 8 de abril 2025. Los concursantes de ambas categorías deberán enviar un correo electrónico (<a href="mailto:fmg@gmail.com" className="text-[#FF7F50] hover:underline">fmg@gmail.com</a>) indicando su interés en participar, e incluir su nombre completo, fecha de nacimiento, edad al momento del concurso, título y compositor del repertorio a interpretar. También deberán adjuntar una fotografía con buena resolución la cual se expondrá en tarima durante su participación.
                    </p>
                    <p className="italic">
                      Atención: Debido a que se estaremos elaborando un programa impreso para el día del evento, no se permitirá la inscripción al certamen posterior a las fechas estipuladas.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                      Importante
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Al momento de la inscripción, todos los participantes de la Categoría de 16 a 18 años deberán someter, tanto el repertorio de la Primera Fase, como el repertorio de 15 minutos que estarían interpretando en caso de ser seleccionados para el Concierto de Finalistas. (No podrán participar si no cumplen con este requisito).</li>
                      <li>Concursantes que hayan obtenido el Primer lugar, en ediciones anteriores, no podrán participar.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                      Fecha y Horario
                    </h4>
                    <p className="text-lg md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                      El Concurso Nacional de la Guitarra Gustavo y Beatriz Arvelo, Mayagüez 2025, se llevará a cabo el sábado 3 de mayo de 2025 en el Teatro Yagüez de Mayagüez.
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-lg md:text-2xl font-[500]">
                      <li>La categoría de 12 a 15 años será a las 3:00 p.m.</li>
                      <li>Primera Fase de la categoría de 16 a 18 años a las 4:00 p.m.</li>
                      <li>El Concierto de Finalistas se llevará a cabo a las 6:00 p.m.</li>
                    </ul>
                    <p className="mt-4 italic">
                      Todos los eventos se llevarán a cabo en estricta puntualidad. Los concursantes participarán en orden alfabético y/o por orden de nivel de dificultad de su repertorio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Conciertos Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="conciertos" 
            className="mx-auto max-w-3xl backdrop-blur-xl px-4 py-6 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF7F50] border-b-2 border-[#FF7F50]/20 pb-2 text-center">
                Conciertos
              </h2>
              
              {/* Opening Concert */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#FF7F50] mb-4 text-center">Concierto de apertura</h3>
                <div className="text-center">
                  <img 
                    src={martinezImage} // image004.jpg - Leonela's image
                    alt="Leonela Alejandro"
                    className="w-64 mx-auto rounded-lg shadow-lg mb-4"
                  />
                  <div className="space-y-1">
                    <p className="font-bold">Leonela Alejandro (Puerto Rico)</p>
                    <p className="text-lg md:text-xl text-gray-700">"1er Premio, GFA 2024"</p>
                    <p className="text-lg md:text-xl text-gray-700">Jueves, 1 de mayo 2025</p>
                    <p className="text-lg md:text-xl text-gray-700">8:00pm, Teatro Yagüez</p>
                  </div>
                </div>
              </div>

              {/* Café Concerts */}
              <div>
                <h3 className="text-2xl font-bold text-[#FF7F50] mb-2 text-center">Café Conciertos</h3>
                <p className="text-center mb-6">(Degustación de Guitarras)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <img 
                      src={escobedoImage} // image005.jpg - Iván's image
                      alt="Iván Rijos"
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="font-bold">Iván Rijos</p>
                    <p className="text-lg md:text-xl text-gray-700">Puerto Rico</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={postigoImage} // image006.jpg - Marcus's image
                      alt="Marcus Toscano"
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="font-bold">Marcus Toscano</p>
                    <p className="text-lg md:text-xl text-gray-700">Brazil</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Festival Mundial 2024 Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="festival-2024" 
            className="mx-auto max-w-3xl backdrop-blur-xl px-4 py-6 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 127, 80, 0.9), rgba(255, 127, 80, 0.9))',
            }}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b-2 border-white/20 pb-2 text-center">
                Festival Mundial de la Guitarra 2024
              </h2>
              <div className="text-center space-y-8">
                <img 
                  src={concursoImage}
                  alt="Festival Mundial 2024"
                  className="w-full max-w-xl mx-auto rounded-lg shadow-lg mb-4"
                />
                <div className="text-white text-xl md:text-2xl font-[500]">
                  <p>Primer Festival Mundial de la Guitarra</p>
                  <p>Mayagüez, Puerto Rico</p>
                  <p>4-7 de mayo de 2024</p>
                </div>
                {/* YouTube Embeds */}
                <div className="space-y-8">
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