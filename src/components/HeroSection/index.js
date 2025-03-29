import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/MyPicture.jpg";
import Typewriter from "typewriter-effect";
import MyResume from "../../pdf/my-resume.pdf";
import MonCV from "../../pdf/mon-cv.pdf";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              <small>{t("bio.hi_i_am")}</small> <br /> {t("bio.name")}
            </Title>
            <TextLoop>
              {t("bio.i_am_a")}
              <Span>
                <Typewriter
                  options={{
                    strings: t("bio.roles", { returnObjects: true }),
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{t("bio.description")}</SubTitle>
            <ResumeButton
              href={i18n.language === "fr" ? MonCV : MyResume}
              target="_blank"
            >
              {t("bio.my_resume")}
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
