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
import "../styles/testimonials.css"
import Star from "../assets/icn bxs-star.svg";
import StarOuter from "../assets/icn bx-star.svg"
import CarouselCard from "../components/CarouselCard";
import ProfileImageOne from "../assets/profileImageOne.svg";
import ProfileImageTwo from "../assets/profileImageTwo.svg";
import ProfileImageTree from "../assets/profileImageTree.svg";

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
          <p>Sou Isabela Pellegrini, estudante de Arquitetura e Urbanismo na UNIPAR. No 5º período, sou movida pela paixão em criar espaços que acolham, inspirem e facilitem o dia a dia, sempre com sensibilidade estética e vontade de aprender.</p>
          <p>Com experiência em escritórios e imobiliária, desenvolvi olhar técnico e atenção aos detalhes — da documentação de obras à modelagem 3D e interiores. Acredito na arquitetura como equilíbrio entre beleza, função e emoção.</p>
          <p>Sou comunicativa, dedicada e colaborativa. Tenho domínio intermediário em AutoCAD e SketchUp, e sigo evoluindo no Revit e outras ferramentas, buscando sempre soluções criativas e funcionais.</p>
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
            </span>
          </span>
          <p>Meus projetos unem técnica e intuição, valorizando ambientes com identidade, fluidez e bem-estar. Mais do que desenhar, penso em como as pessoas vão viver e sentir cada espaço.</p>
        </header>
        <section className="even-columns">
          <ProjectCard
            icon={Pallet}
            alt="ícone galeria"
            title="Galeria de Arte"
            description="Projeto acadêmico em estudo preliminar, desenvolvido em equipe para uma galeria de arte com setor educativo integrado — 2024."
          />
          <ProjectCard
            icon={School}
            alt="ícone faculdade"
            title="Faculdade de Arquitetura"
            description="Estudo preliminar de uma faculdade voltada ao curso de Arquitetura e Urbanismo, com foco em criar um espaço inspirador, acolhedor e funcional para estudantes — 2024."
          />
          <ProjectCard
            icon={HolidayVillage}
            alt="ícone residencial"
            title="Residencial Magnólia"
            description="Estudo preliminar de um conjunto habitacional social, focado em oferecer moradia digna e infraestrutura completa para famílias variadas, promovendo inclusão e bem-estar coletivo — 2025."
          />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">
              Conselho de quem conhece
            </p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
            comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>
        <section className="carousel">
          <div className="carousel-content">
            <CarouselCard
              image={ProfileImageOne}
              alt="Imagem perfil cliente"
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              rating={4}
              name="Ellon Ma"
              title="CEO BING CHILLING"
              star={Star}
              starOuter={StarOuter}
            />
            <CarouselCard
              image={ProfileImageTwo}
              alt="Imagem perfil cliente"
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              rating={4}
              name="Ellon Ma"
              title="CEO BING CHILLING"
              star={Star}
              starOuter={StarOuter}
            />
            <CarouselCard
              image={ProfileImageTree}
              alt="Imagem perfil cliente"
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              rating={4}
              name="Ellon Ma"
              title="CEO BING CHILLING"
              star={Star}
              starOuter={StarOuter}
            />
          </div>
          <div className="carousel-content">
            <CarouselCard
              image={ProfileImageOne}
              alt="Imagem perfil cliente"
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              rating={4}
              name="Ellon Ma"
              title="CEO BING CHILLING"
              star={Star}
              starOuter={StarOuter}
            />
            <CarouselCard
              image={ProfileImageTwo}
              alt="Imagem perfil cliente"
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              rating={4}
              name="Ellon Ma"
              title="CEO BING CHILLING"
              star={Star}
              starOuter={StarOuter}
            />
            <CarouselCard
              image={ProfileImageTree}
              alt="Imagem perfil cliente"
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              rating={4}
              name="Ellon Ma"
              title="CEO BING CHILLING"
              star={Star}
              starOuter={StarOuter}
            />
          </div>
        </section>
      </section>
    </>
  )
}