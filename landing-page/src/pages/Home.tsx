import { useEffect, useState } from "react";
// Componentes e Ícones
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import CarouselCard from "../components/CarouselCard";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

// Assets (Imagens e SVGs)
import Logo from "../assets/Untitled.svg";
import HeroRectangleOne from "../assets/rectangleOne.png";
import HeroRectangleTwo from "../assets/rectangleTwo.png";
import Pallet from "../assets/palette.svg";
import School from "../assets/school.svg";
import HolidayVillage from "../assets/holiday_village.svg";
import IconRevit from "../assets/IconRevit.svg";
import IconAutoCAD from "../assets/IconAutoCAD.svg";
import IconSketchUp from "../assets/IconSketchUp.svg";

// Estilos
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/utility.css";
// ALTERADO: Nomes dos arquivos CSS para maior clareza
import "../styles/projetos.css"; // Antigo solution.css
import "../styles/habilidades.css"; // Antigo testimonials.css

// REMOVIDO: Imports não utilizados que eram da seção de preços e estrelas
// import Star from "../assets/icn bxs-star.svg";
// import StarOuter from "../assets/icn bx-star.svg";
// import Check from "../assets/check.svg";
// import "../styles/pricing.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  const handleMenuClick = () => setShowMobileMenu(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      // IMPORTANTE: Veja a nota sobre segurança no final da resposta
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjc3NGJkODcyOWVhMzhlOWMyZmUwYzY0ZDJjYTk0OGJmNjZmMGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NzczODMxNzU2OTM2NDU1MDg5IiwiZW1haWwiOiJtYXJjby5rb3ZhbGVza2kxOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkdoRDE3UlNCdjBKR044dkdxS0ZBSXciLCJuYmYiOjE3NTA3MjgwMjQsImlhdCI6MTc1MDcyODMyNCwiZXhwIjoxNzUwNzMxOTI0LCJqdGkiOiJlMDRlZGM1MTczNTRlMDIwYzY5NWU1YTc0MDMwMDc5ZDRmNjc0MTU0In0.oVRen9jmeRmyPjR_dQBkW52Vw2xUCfKO5yv1We1zNJyXsxi170KYxf4wWe_AFQBhDlE1UcivwgqNR4xfi8FfMTGDDd9_Kkt6OAetVP8rWAL1nAJfy_Uw4M0qQNQp4YEpoTGUZBxfR8a-647KHzO7cdSe744vRVapKRhlnPNgS0mNkJVl78SKJnMGjAEQTtUJu3CT_ch2CMKttem3rEfJ7s_Dur3w9Y7EMQsijEzXVAhSR5t1WnzXhnyF7Ugq5H5NIMLKl0hwow1mnXFD8av0rRWxctYwQa93UyU4UxwD456kWXsgkk1zIzL9-b3nV4kMxRKVci24sZVdIonzYQAF4g",
        },
        body: JSON.stringify({
          toMail: email,
          content: mensagem,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      setFeedback("Mensagem enviada com sucesso.");
      setEmail("");
      setMensagem("");
    } catch (error: any) {
      console.error("Erro ao enviar:", error);
      setFeedback("Falha ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="header-container">
          {/* A tag <nav> não precisa de classes de layout, o CSS cuidará disso */}
          <nav>
            <img
              src={Logo}
              alt="Logo IsabelaPellegrini"
              width={220}
              height={80}
            />
            <div className="desktop-only">
              <ul className="flex items-center gap-1.5">
                <li>
                  <a href="#hero">Sobre</a>
                </li>
                <li>
                  <a href="#projetos">Projetos Acadêmicos</a>
                </li>
                <li>
                  <a href="#habilidades">Habilidades</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </div>
            <div className="mobile-menu">
              {showMobileMenu ? (
                <div className="mobile-menu-content">
                  <div className="container flex">
                    <ul>
                      <li>
                        <a onClick={handleMenuClick} href="#hero">
                          Home
                        </a>
                      </li>
                      <li>
                        <a onClick={handleMenuClick} href="#projetos">
                          Projetos Acadêmicos
                        </a>
                      </li>
                      <li>
                        <a onClick={handleMenuClick} href="#habilidades">
                          Habilidades
                        </a>
                      </li>
                      <li>
                        <a onClick={handleMenuClick} href="#contact">
                          Contato
                        </a>
                      </li>
                    </ul>
                    <span
                      onClick={() => setShowMobileMenu(false)}
                      className="btn-wrapper"
                    >
                      <AiOutlineClose size={24} />
                    </span>
                  </div>
                </div>
              ) : (
                <span
                  onClick={() => setShowMobileMenu(true)}
                  className="btn-wrapper"
                >
                  <AiOutlineMenu size={24} />
                </span>
              )}
            </div>
          </nav>
        </div>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Sobre</p>
          <h1>Isabela Pellegrini</h1>
          <p>
            Sou Isabela Pellegrini, estudante de Arquitetura e Urbanismo na
            UNIPAR. No 5º período, sou movida pela paixão em criar espaços que
            acolham, inspirem e facilitem o dia a dia, sempre com sensibilidade
            estética e vontade de aprender.
          </p>
          <p>
            Com experiência em escritórios e imobiliária, desenvolvi olhar
            técnico e atenção aos detalhes — da documentação de obras à
            modelagem 3D e interiores. Acredito na arquitetura como equilíbrio
            entre beleza, função e emoção.
          </p>
          <p>
            Sou comunicativa, dedicada e colaborativa. Tenho domínio
            intermediário em AutoCAD e SketchUp, e sigo evoluindo no Revit e
            outras ferramentas, buscando sempre soluções criativas e funcionais.
          </p>
          <div className="flex gap-1"></div>
        </div>
      </section>

      {/* ALTERADO: ID da seção para 'projetos' */}
      <section className="container" id="projetos">
        <header>
          <span>
            <h2>Projetos Acadêmicos</h2>
            <span className="desktop-only"></span>
          </span>
          <p>
            Meus projetos unem técnica e intuição, valorizando ambientes com
            identidade, fluidez e bem-estar. Mais do que desenhar, penso em como
            as pessoas vão viver e sentir cada espaço.
          </p>
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

      <section id="habilidades">
        <header>
          <h2>Habilidades e Ferramentas</h2>
          <p>
            Domínio nas principais ferramentas do mercado para transformar
            conceitos em projetos concretos, desde o desenho técnico detalhado
            até a visualização 3D imersiva.
          </p>
        </header>
        <section className="carousel">
          <div className="carousel-content">
            <CarouselCard
              image={IconAutoCAD}
              alt="Logo do AutoCAD"
              testimony="Desenvolvimento de projetos técnicos precisos, incluindo plantas baixas, cortes, elevações e detalhamentos executivos, garantindo a conformidade e a clareza da documentação."
              name="AutoCAD"
              title="Nível: Intermediário"
            />
            <CarouselCard
              image={IconSketchUp}
              alt="Logo do SketchUp"
              testimony="Modelagem 3D ágil para estudos de volumetria, criação de perspectivas e renderizações que dão vida às ideias e facilitam a visualização do cliente."
              name="SketchUp"
              title="Nível: Intermediário"
            />
            <CarouselCard
              image={IconRevit}
              alt="Logo do Revit"
              testimony="Criação de modelos inteligentes com a metodologia BIM para projetos mais integrados e eficientes. Em constante evolução para explorar todo o potencial da ferramenta."
              name="Revit (BIM)"
              title="Nível: Em evolução"
            />
          </div>
          <div className="carousel-content">
            <CarouselCard
              image={IconAutoCAD}
              alt="Logo do AutoCAD"
              testimony="Desenvolvimento de projetos técnicos precisos, incluindo plantas baixas, cortes, elevações e detalhamentos executivos, garantindo a conformidade e a clareza da documentação."
              name="AutoCAD"
              title="Nível: Intermediário"
            />
            <CarouselCard
              image={IconSketchUp}
              alt="Logo do SketchUp"
              testimony="Modelagem 3D ágil para estudos de volumetria, criação de perspectivas e renderizações que dão vida às ideias e facilitam a visualização do cliente."
              name="SketchUp"
              title="Nível: Intermediário"
            />
            <CarouselCard
              image={IconRevit}
              alt="Logo do Revit"
              testimony="Criação de modelos inteligentes com a metodologia BIM para projetos mais integrados e eficientes. Em constante evolução para explorar todo o potencial da ferramenta."
              name="Revit (BIM)"
              title="Nível: Em evolução"
            />
          </div>
        </section>
      </section>

      {/* REMOVIDO: Toda a seção de preços ('pricing') que estava comentada foi deletada para limpar o código. */}

      <section id="contact" className="contact-section container">
        <header className="contact-header">
          <p className="contact-subtitle">Vamos conversar?</p>
          <h2 className="contact-title">Entre em contato</h2>
          <p className="contact-description">
            Se você tem uma oportunidade, um projeto em mente ou simplesmente
            quer trocar ideias sobre arquitetura, me envie uma mensagem. Terei o
            prazer em responder.
          </p>
        </header>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="contact-input"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="contact-textarea"
            placeholder="Escreva sua mensagem..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
          <Button text={loading ? "Enviando..." : "Enviar"} />
          {feedback && (
            <p style={{ marginTop: "1rem", color: "#77783e" }}>{feedback}</p>
          )}
        </form>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            {/* ALTERADO: O <h3> foi substituído pela tag <img> com a sua logo */}
            <img
              src={Logo}
              alt="Logo IsabelaPellegrini"
              width={220}
              height={80}
              style={{
                marginBottom: "0.5rem",
              }} /* Adicionado para manter um espaçamento similar */
            />
            <p style={{ marginTop: "0.5rem", maxWidth: "300px" }}>
              Estudante de Arquitetura e Urbanismo apaixonada por criar espaços
              que inspiram.
            </p>
            <div className="social-icons" style={{ marginTop: "1rem" }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#hero">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Isabela Pellegrini - Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
