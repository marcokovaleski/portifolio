import { useEffect, useState } from "react";
import Logo from "../assets/Untitled.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeroRectangleOne from "../assets/rectangleOne.png";
import HeroRectangleTwo from "../assets/rectangleTwo.png";
import "../styles/hero.css";
import HomeIcon from "../assets/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import MenuIcon from "../assets/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import SearchIcon from "../assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
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
                      <a onClick={handleMenuClick} href="#solution">Soluções</a>
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
          <p className="desktop-only">
            Olá
          </p>
          <h1>seu projeto da forma mais bela</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa aliquam facere voluptate maxime, cum neque. Nemo tempore maiores consectetur cupiditate veritatis! Excepturi eius, aliquam in culpa animi quidem ab?</p>
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
            <h2> Projetos </h2>
            <span className="desktop-only">
              <h2>
                seu projeto da forma mais bela
              </h2>
            </span>
          </span><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus rerum neque, praesentium rem blanditiis nam saepe eius, cupiditate magnam dolorem debitis veritatis sunt? Fuga perferendis doloremque ipsam mollitia fugiat!
          </p>
        </header>
        <section className="even-columns">
          <ProjectCard
            icon={HomeIcon}
            alt="ícone campeão"
            title="Produto Vencedor"
            description="Lorem ipsum dolor sit <strong> amet consectetur adipisicing elit. </strong> Dolor itaque voluptatem eveniet, aliquid totam architecto molestiae sed mollitia? Odio doloremque assumenda rem numquam sint, error quia iste culpa ipsum tempora!"
          />
          <ProjectCard
            icon={MenuIcon}
            alt="ícone menu"
            title="Produto Vencedor"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque voluptatem eveniet, aliquid totam architecto molestiae sed mollitia? Odio doloremque assumenda rem numquam sint, error quia iste culpa ipsum tempora!"
          />
          <ProjectCard
            icon={SearchIcon}
            alt="ícone busca"
            title="Produto Vencedor"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque voluptatem eveniet, aliquid totam architecto molestiae sed mollitia? Odio doloremque assumenda rem numquam sint, error quia iste culpa ipsum tempora!"
          />
        </section>
      </section>
    </>
  )
}