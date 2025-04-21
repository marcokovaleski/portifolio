import { useEffect, useState } from "react";
import Logo from "../assets/Untitled.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeroRectangleOne from "../assets/rectangleOne.png";
import HeroRectangleTwo from "../assets/rectangleTwo.png";
import "../styles/hero.css";
import Pallet from "../assets/palette.svg"
import School from "../assets/school.svg"
import HolidayVillage from "../assets/holiday_village.svg"
import "../styles/solution.css"
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  const handleMenuClick = () => setShowMobileMenu(false);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo IsabelaPellegrini" width={220} height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#solution">Projetos Acadêmicos</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a onClick={handleMenuClick} href="#">Home</a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#solution">Projetos Acadêmicos</a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#contact">Contato</a>
                    </li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                    <AiOutlineClose size={24} /> {/* Ícone de fechar */}
                  </span>
                </div>
              </div>
            ) : (
              <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper" >
                <AiOutlineMenu size={24} /> {/* Ícone de menu */}
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Sobre</p>
          <h1>Isabela Pellegrini</h1>
          <p>Sou Isabela Pellegrini, estudante de Arquitetura e Urbanismo, apaixonada por criar espaços que inspirem, acolham e facilitem a vida das pessoas. Atualmente no 5º período na UNIPAR, venho trilhando meu caminho com dedicação, sensibilidade estética e vontade constante de aprender.</p>
          <p>Com experiência prática em escritórios e imobiliária, desenvolvi olhar técnico e atenção aos detalhes, desde a documentação de obras até a modelagem 3D e os detalhamentos mais minuciosos de interiores. Acredito que arquitetura é equilíbrio entre beleza, função e emoção — e busco trazer isso para cada projeto que participo.</p>
          <p>Sou comunicativa, comprometida e colaborativa, com domínio intermediário em AutoCAD e SketchUp, e em constante evolução no Revit e nas ferramentas de modelagem. A cada novo curso ou desafio, vejo a chance de transformar meu repertório em soluções criativas e funcionais.</p>
          <div className="flex gap-1">
            <span><Button text="Cadastre-se" /></span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Projetos Acadêmicos</h2>
            <span className="desktop-only">
              <h2></h2>
            </span>
          </span>
          <p>Meus projetos nascem do encontro entre técnica e intuição. Valorizo ambientes que traduzam identidade, fluidez e bem-estar — seja em uma modelagem 3D de interiores ou no detalhamento dos sistemas de um espaço.</p>
          <p>Mais do que desenhar, gosto de pensar em como as pessoas vão viver e sentir cada espaço.</p>
        </header>
        <section className="even-columns">
          <ProjectCard
            icon={Pallet}
            alt="ícone galeria"
            title="Galeria de Arte"
            description="Projeto academico em fase de estudo preliminar elaborado em equipe para atender as necessidades de uma galeria de arte com setor educativo integrado; 2024"
          />
          <ProjectCard
            icon={School}
            alt="ícone faculdade"
            title="Faculdade de Arquitetura"
            description="Projeto acadêmico em fase de estudo preliminar de uma faculdade voltada unicamente ao curso de Arquitetura e Urbanismo, com objetivo de proporcionar um espaço inspirador e acolhedor para os estudantes, bem como todos os ambientes necessários para exercício de suas atividades. Em dupla, 2024"
          />
          <ProjectCard
            icon={HolidayVillage}
            alt="ícone residencial"
            title="Residencial Magnólia"
            description="Projeto acadêmico em fase de estudo preliminar de um conjunto habitacional de interesse social, idealizado com o propósito de atender à demanda por habitação de qualidade voltada a famílias de diferentes composições e perfis socioeconômicos. Como empreendimento de Interesse Social, o projeto visa garantir o acesso à moradia digna, com infraestrutura completa, promovendo inclusão urbana, equidade e bem estar coletivo. 2025"
          />
        </section>
      </section>
    </>
  )
}