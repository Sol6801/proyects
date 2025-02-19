"use client";
import { useEffect } from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Github, WhatsApp, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import styles from '@/styles/animations.css';

const FourPointStar = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2 Q14 6, 16 9 Q20 11, 22 12 Q20 13, 16 15 Q14 18, 12 22 Q10 18, 8 15 Q4 13, 2 12 Q4 11, 8 9 Q10 6, 12 2 Z" />
  </svg>
);

const STAR_CONFIG = [
  { size: 'sm', float: 'float-1', pos: 'star-pos-0' },
  { size: 'lg', float: 'float-3', pos: 'star-pos-1' },
  { size: 'xs', float: 'float-1', pos: 'star-pos-2' },
  { size: 'md', float: 'float-4', pos: 'star-pos-3' },
  { size: 'xl', float: 'float-2', pos: 'star-pos-4' },
  { size: 'sm', float: 'float-3', pos: 'star-pos-5' },
  { size: 'lg', float: 'float-1', pos: 'star-pos-6' },
  { size: 'md', float: 'float-2', pos: 'star-pos-7' },
  { size: 'xs', float: 'float-4', pos: 'star-pos-8' },
  { size: 'sm', float: 'float-4', pos: 'star-pos-9' },
  { size: 'xl', float: 'float-1', pos: 'star-pos-10' },
  { size: 'lg', float: 'float-2', pos: 'star-pos-11' },
  { size: 'sm', float: 'float-1', pos: 'star-pos-12' },
  { size: 'xs', float: 'float-3', pos: 'star-pos-13' },
  { size: 'md', float: 'float-3', pos: 'star-pos-14' },
  { size: 'xl', float: 'float-4', pos: 'star-pos-15' },
  { size: 'lg', float: 'float-4', pos: 'star-pos-16' },
  { size: 'sm', float: 'float-2', pos: 'star-pos-17' },
  { size: 'xl', float: 'float-3', pos: 'star-pos-18' },
  { size: 'xs', float: 'float-2', pos: 'star-pos-19' },
  { size: 'md', float: 'float-1', pos: 'star-pos-20' },
];

const Stars = () => (
  <div className="stars-container">
    {STAR_CONFIG.map((config, index) => (
      <FourPointStar
        key={index}
        className={`star star-${config.size} ${config.float} ${config.pos}`}
      />
    ))}
  </div>
);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const WhatsAppButton = () => (
  <a
    href="https://wa.link/683x1t"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out z-50 flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <WhatsAppIcon className="h-8 w-8" />
  </a>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <WhatsAppButton />
      <Navbar />

      {/* Hero Section */}
      <section className="animated-bg flex items-center relative min-h-[100vh]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 relative py-20 md:py-32">
            <div className="fade-in px-4">
              <h1 className="text-3xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-violet-600">
                Transformando
              </h1>
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
                Ideas en Experiencias
              </h1>
            </div>

            <p className="text-base md:text-xl text-gray-600 fade-in delay-300 px-4">
              Desarrollo web profesional enfocado en crear sitios modernos,
              rápidos y escalables para impulsar tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in delay-500 px-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("work")}
                className="w-full sm:w-auto bg-purple-900 hover:bg-purple-800 text-white px-6 py-4 text-base md:text-lg"
              >
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 py-4 text-base md:text-lg hover:bg-purple-600"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>

        <Stars />
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="bg-gray-50">
        <PortfolioGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-gray-600 mb-8 px-4">
              Estoy disponible para nuevos proyectos. Conectemos y hagamos algo
              increíble juntos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 px-4">
              <a
                href="https://github.com/Sol6801"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto gap-2 hover:bg-purple-50">
                  <Github size={20} />
                  GitHub
                </Button>
              </a>
              <a
                href="https://wa.link/683x1t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                 <Button variant="outline" className="w-full sm:w-auto gap-2 hover:bg-purple-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 36.065 11.10725 39.869719 13.03125 43.136719 L 10.214844 53.683594 L 21.277344 51.208984 C 24.450344 52.983984 28.106 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 28.269 50 24.803687 48.864875 21.929688 46.921875 L 15.791016 48.294922 L 17.353516 42.439453 C 15.250516 39.493453 14 35.896 14 32 C 14 22.059 22.059 14 32 14 z M 24.472656 21.736328 C 24.105656 21.736328 23.515672 21.871969 23.013672 22.417969 C 22.520672 22.964969 21.113281 24.278844 21.113281 26.964844 C 21.113281 29.640844 23.057078 32.23675 23.330078 32.59375 C 23.603078 32.96075 27.100531 38.639266 32.644531 40.822266 C 37.240531 42.632266 38.179547 42.273688 39.185547 42.179688 C 40.183547 42.093688 42.408328 40.866703 42.861328 39.595703 C 43.313328 38.323703 43.312875 37.232906 43.171875 37.003906 C 43.034875 36.781906 42.676859 36.644094 42.130859 36.371094 C 41.584859 36.097094 38.906297 34.777656 38.404297 34.597656 C 37.909297 34.417656 37.542547 34.323141 37.185547 34.869141 C 36.818547 35.415141 35.778125 36.643953 35.453125 37.001953 C 35.138125 37.368953 34.823344 37.411672 34.277344 37.138672 C 33.731344 36.865672 31.975531 36.292594 29.894531 34.433594 C 28.275531 32.992594 27.182188 31.208063 26.867188 30.664062 C 26.551188 30.119062 26.832469 29.821828 27.105469 29.548828 C 27.353469 29.310828 27.652781 28.916563 27.925781 28.601562 C 28.189781 28.277563 28.282891 28.056453 28.462891 27.689453 C 28.651891 27.332453 28.555922 27.007375 28.419922 26.734375 C 28.284922 26.460375 27.226234 23.765406 26.740234 22.691406 C 26.332234 21.787406 25.905672 21.760953 25.513672 21.751953 C 25.196672 21.735953 24.829656 21.736328 24.472656 21.736328 z"></path>
                  </svg>
                  WhatsApp
                </Button>
                </a>
              <a 
                href="mailto:solbarberofrancica@gmail.com"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto gap-2 hover:bg-purple-50">
                  <Mail size={20} />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Sol Barbero. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}