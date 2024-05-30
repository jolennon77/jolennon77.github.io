// src/component/PortfolioWindow.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WindowWrapper from "../WindowWrapper";
import styled, { keyframes } from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Chip from '@mui/material/Chip';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContentSection = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.palette.background.default};
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoCard = styled(Card)`
  animation: ${fadeIn} 1s ease-out;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackgroundImageSection = styled.div`
  background-image: url('/img/portfolio/000036.jpg'); /* Update with your image path */
  background-size: cover;
  background-position: center;
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BackgroundText = styled(Typography)`
  margin-top: 10px;
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const PortfolioWindow = ({ onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const portfolioItems = [
    { title: "가챠", image: "/img/portfolio/1.png", id: "project1", content: "쇼핑몰 관리자페이지", badge: "기업" },
    { title: "레트로 플래닛", image: "/img/portfolio/2.png", id: "project2", content: "레트로 컨셉 SNS", badge: "사이드" },
    { title: "룩복", image: "/img/portfolio/3.png", id: "project3", content: "날씨기반 의상추천", badge: "학원" },
    { title: "야숨", image: "/img/portfolio/4.png", id: "project4", content: "날씨기반 캠핑장추천", badge: "사이드" },
    { title: "개인 홈페이지", image: "/img/portfolio/5.png", id: "project5", content: "개인 홈페이지", badge: "기업" },
    { title: "4차", image: "/img/portfolio/5.png", id: "project5", content: "", badge: "기업" },
    // Add more projects as needed
  ];

  const handleCardClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <WindowWrapper onClose={onClose}>
      <>
        <BackgroundImageSection>
          <BackgroundText variant={isMobile ? 'h3' : 'h1'}>
            Project
          </BackgroundText>
        </BackgroundImageSection>
        <MainContentSection>
          <ContentSection theme={theme}>
            <Grid container spacing={4} style={{ marginTop: '10px' }}>
              {portfolioItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CardActionArea onClick={() => handleCardClick(item.id)}>
                    <InfoCard>
                      <CardContent>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <CardHeader>
                          <Typography variant="h6" component="h2">
                            {item.title}
                          </Typography>
                          <Chip label={item.badge} color="primary" />
                        </CardHeader>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {item.content}
                        </Typography>
                      </CardContent>
                    </InfoCard>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </ContentSection>
        </MainContentSection>
      </>
    </WindowWrapper>
  );
};

export default PortfolioWindow;