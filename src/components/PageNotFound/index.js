import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  line-height: 1;
`;

const PageNotFoundTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;

const PageNotFoundCode = styled.span`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  // opacity: 0.3;
`;

const PageNotFoundDescription = styled.p`
  color: ${({ theme }) => theme.text_primary};
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary + 85};
  }
`;

function PageNotFound() {
  const { t } = useTranslation();

  return (
    <PageNotFoundContainer role="alert">
      <PageNotFoundCode>404</PageNotFoundCode>
      <PageNotFoundTitle>
        {t("error.page_not_found", "Page Not Found")}
      </PageNotFoundTitle>
      <PageNotFoundDescription>
        {t(
          "error.the_page_looking",
          "The page you are looking for does not exist."
        )}
      </PageNotFoundDescription>
      <HomeLink to="/">{t("error.go_back_home", "Go Back Home")}</HomeLink>
    </PageNotFoundContainer>
  );
}

export default PageNotFound;
