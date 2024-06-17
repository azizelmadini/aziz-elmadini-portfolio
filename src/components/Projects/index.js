import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { useTranslation } from "react-i18next";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const { t } = useTranslation();
  return (
    <Container id="projects">
      <Wrapper>
        <Title>{t("projects")}</Title>
        <Desc>{t("projects_desc")}</Desc>
        {/* <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile app' ?
            <ToggleButton active value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APP'S</ToggleButton>
            :
            <ToggleButton value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'ui design' ?
            <ToggleButton active value="ui design" onClick={() => setToggle('ui design')}>UI DESIGN</ToggleButton>
            :
            <ToggleButton value="ui design" onClick={() => setToggle('ui design')}>UI DESIGN</ToggleButton>
          }
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === "all" &&
            t("projects_info", { returnObjects: true }).map(
              (project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )
            )}
          {/* {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))} */}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
