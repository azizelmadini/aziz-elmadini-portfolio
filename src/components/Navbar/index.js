import React from "react";
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
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { IconButton } from "@mui/material";
import {
  Close,
  CloseRounded,
  GitHub,
  LightMode,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import { useTheme } from "styled-components";
import HeroImg from "../../images/alogo.png";
import styled from "styled-components";

const ThemeIcon = styled(IconButton)`
  && {
    color: ${({ theme }) => theme.primary};
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const MobileThemeIcon = styled(IconButton)`
  && {
    color: ${({ theme }) => theme.primary};
    width: max-content;
  }
`;

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            {/* <DiCssdeck size="3rem" /> <Span>Portfolio</Span> */}
            <img src={HeroImg} alt="logo-icon" width="60%;" />
            {/* <Span>Aziz El madini</Span> */}
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ThemeIcon onClick={toggleDarkMode}>
          {darkMode ? <LightMode /> : <DarkModeOutlined />}
        </ThemeIcon>

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
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <MobileThemeIcon onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkModeOutlined />}
            </MobileThemeIcon>
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
