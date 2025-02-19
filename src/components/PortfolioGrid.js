// components/PortfolioGrid.jsx
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={imageUrl}
            width={400}
            height={300}
            alt={title}
            className="w-full h-48 object-cover object-top rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex gap-3">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink size={16} />
                Visitar
              </Button>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Github size={16} />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioGrid = () => {
  const projects = [
    {
      title: "Dunya Idiomas",
      description: "Sitio web informativo multilingüe desarrollado para una academia de idiomas con Next.js y Next Intl.",
      imageUrl: "/dunyaidiomas.webp",
      projectUrl: "https://dunyaidiomas.com",
      githubUrl: "https://github.com/Sol6801/dunya"
    },
    {
      title: "Planner Buddy",
      description: "App web dinámica para tomar decisiones en grupo. Creada con Next.js, Tailwind CSS, AWS, Prisma y más.",
      imageUrl: "/plannerbuddy.webp",
      projectUrl: "https://planner-buddy.vercel.app",
      githubUrl: "https://github.com/Sol6801/proyecto-final-front"
    },
    {
      title: "Recorriendo Argentina",
      description: "Sitio web interactivo sobre Argentina, desarrollado con HTML, CSS y JavaScript.",
      imageUrl: "/recorriendoargentina.webp",
      projectUrl: "https://sol6801.github.io/TPStaticWeb/index.html",
      githubUrl: "https://github.com/Sol6801/TPStaticWeb"
    },
    {
      title: "Maderera",
      description: "Sitio web estático para una maderera, creado con HTML y CSS vainilla.",
      imageUrl: "/maderasbarbero.webp",
      projectUrl: "https://sol6801.github.io/maderasbarbero/",
      githubUrl: "https://github.com/Sol6801/maderasbarbero"
    },
    {
      title: "Panadería",
      description: "Sitio web estático para una panadería, diseñado con HTML, CSS y Bootstrap.",
      imageUrl: "/panaderia.webp",
      projectUrl: "https://sol6801.github.io/BAmulti/",
      githubUrl: "https://github.com/Sol6801/BAmulti"
    }
  ];

  return (
    <section id="work">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mi Portafolio de Desarrollo Web</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora mis proyectos de desarrollo web. Cada sitio está diseñado con atención al detalle y tecnologías modernas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;