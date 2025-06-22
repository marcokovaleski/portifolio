import { useEffect, useState } from "react";
import Logo from "../assets/Untitled.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeroRectangleOne from "../assets/rectangleOne.png";
import HeroRectangleTwo from "../assets/rectangleTwo.png";
import "../styles/hero.css";
import Pallet from "../assets/palette.svg";
import School from "../assets/school.svg";
import HolidayVillage from "../assets/holiday_village.svg";
import "../styles/solution.css";
import ProjectCard from "../components/ProjectCard";
import "../styles/testimonials.css";
import Star from "../assets/icn bxs-star.svg";
import StarOuter from "../assets/icn bx-star.svg";
import CarouselCard from "../components/CarouselCard";
import ProfileImageOne from "../assets/profileImageOne.svg";
import ProfileImageTwo from "../assets/profileImageTwo.svg";
import ProfileImageTree from "../assets/profileImageTree.svg";
import Check from "../assets/check.svg";
import "../styles/pricing.css";
import "../styles/contact.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "../styles/footer.css";

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
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjc3NGJkODcyOWVhMzhlOWMyZmUwYzY0ZDJjYTk0OGJmNjZmMGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NzczODMxNzU2OTM2NDU1MDg5IiwiZW1haWwiOiJtYXJjby5rb3ZhbGVza2kxOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJSZlBFeWx4bEJscEtEQWVmb3Z3MVEiLCJuYmYiOjE3NTA2MTI5NjIsImlhdCI6MTc1MDYxMzI2MiwiZXhwIjoxNzUwNjE2ODYyLCJqdGkiOiIwMDAyNDlmYmY3OGMxZTcyZmFjYzQwNmFmZDc4YjA4N2I4ZGM2YTE2In0.mk8Bg-8_aoHFy_PKu6LMNBbbCJUOfUKLyJDxa5Ef3K7yNNwJudJ-b1MkUxoFrZP2go7j_G8Fop8piVkdcAFN8VG5OF5PqSmUUv8i2R6_0XHEhj2MZsRjt_rHkYMX4Pv8eOPCsoVdTn-JU9wOGCzZTDzucAol4iMjO5bdUvgezRNPdpKSsxKoihRV2fCzVw9D4EAy_kf2y7EtiGZ9ZDtqAqXlsFM0e8pRLLolSG3JZ9SWQkGn4iPK8cxtnP0KZy9UnSoK_oSTJez55fYTFtXBlCiGsR0yWWOrNugORb0yQeWCjEVb3RHDbykIhF13K3fO5aRVrO50CrcQGPBujnw-Ug", // se aplicável
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

      setFeedback("E-mail enviado com sucesso!");
      setEmail("");
      setMensagem("");
    } catch (error: any) {
      console.error("Erro ao enviar:", error);
      setFeedback("Erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img
            src={Logo}
            alt="Logo IsabelaPellegrini"
            width={220}
            height={80}
          />
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
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a onClick={handleMenuClick} href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#solution">
                        Projetos Acadêmicos
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#testimonials">
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#pricing">
                        Preços
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
                    <AiOutlineClose size={24} /> {/* Ícone de fechar */}
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(true)}
                className="btn-wrapper"
              >
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
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
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

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
            aquela ideia de que comida congelada tem de ser algo sem gosto,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
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

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>
        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Você tem direito a uma prova das comidas DonaFrost.</p>
            </span>
            <h2>Grátis</h2>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Retire na loja</p>
            </span>
            <ul className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </ul>
          </div>
          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
            </span>
            <span className="price">
              <h2>R$ 89,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Pedir agora" key="premium" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Entregas</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>5 Refeições por semana</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Sucos por semana</p>
            </span>
          </div>
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Você tem direito a uma prova das comidas DonaFrost.</p>
            </span>
            <h2>Grátis</h2>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Retire na loja</p>
            </span>
            <ul className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </ul>
          </div>
        </section>
      </section>

      <section id="contact" className="contact-section container">
        <header className="contact-header">
          <p className="contact-subtitle">Envie sua dúvida</p>
          <h2 className="contact-title">Entre em contato</h2>
          <p className="contact-description">
            Entre em contato, estamos dispostos a tirar qualquer dúvida, <br />
            seja um orçamento, uma dúvida técnica de algum de nossos produtos.
            <br />
            Estamos à disposição para responder.{" "}
            <span role="img" aria-label="emoji">
              😎
            </span>
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="contact-input"
            placeholder="Seu melhor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="contact-textarea"
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
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
            <h3>LogoMarca</h3>
            <div className="social-icons">
              <FaInstagram size={20} />
              <FaFacebookF size={20} />
              <FaYoutube size={20} />
            </div>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Faça parte do time</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Funcionalidades</h4>
            <ul>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Análise de dados</a>
              </li>
              <li>
                <a href="#">Boot discord</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Recursos</h4>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Teste a Demo</a>
              </li>
              <li>
                <a href="#">Clientes</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Feito com amor na aula de Programação Web💙 ©
            {new Date().getFullYear()} AktieTech - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
