import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  ThemeIcon,
  MobileThemeIcon,
  LanguageLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import {
  Close,
  CloseRounded,
  GitHub,
  LightMode,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import styled, { useTheme } from "styled-components";
import HeroImg from "../../images/alogo.png";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("currentLanguage") || i18n.language
  );

  useEffect(() => {
    localStorage.setItem("currentLanguage", currentLanguage);
  }, [currentLanguage]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          {/* <DiCssdeck size="3rem" /> <Span>Portfolio</Span> */}
          <img src={HeroImg} alt="logo-icon" width="60%" />
          {/* <Span>Aziz El madini</Span> */}
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{t("about")}</NavLink>
          <NavLink href="#skills">{t("skills")}</NavLink>
          <NavLink href="#experience">{t("experience")}</NavLink>
          <NavLink href="#projects">{t("projects")}</NavLink>
          <NavLink href="#education">{t("education")}</NavLink>
          <NavLink href="#contact">{t("contact")}</NavLink>
        </NavItems>
        <ThemeIcon onClick={toggleDarkMode}>
          {darkMode ? <LightMode /> : <DarkModeOutlined />}
        </ThemeIcon>

        <LanguageLink onClick={toggleLanguage}>
          {currentLanguage === "en" ? "FR" : "EN"}
        </LanguageLink>
        {/* <ButtonContainer>
          <GitHubButton
            style={{ gap: "6px" }}
            href={Bio.github}
            target="_blank"
          >
            {" "}
            <GitHub /> Github Profile
          </GitHubButton>
        </ButtonContainer> */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {t("about")}
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {t("skills")}
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {t("experience")}
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {t("projects")}
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {t("education")}
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {t("contact")}
            </MobileLink>
            <MobileThemeIcon onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkModeOutlined />}
            </MobileThemeIcon>

            <MobileLink onClick={toggleLanguage}>
              {currentLanguage === "en" ? "FR" : "EN"}
            </MobileLink>

            {/* <GitHubButton
              style={{
                gap: "6px",
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              <GitHub /> Github Profile
            </GitHubButton> */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
