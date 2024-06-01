// src/component/PortfolioWindow.js
import React from 'react';
import { useWindow } from '../WindowContext';
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
import ProjectDatas from '../ProjectDatas'

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
  padding: 0 40px;
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
  margin-top: 10px;
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
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
`;

const PortfolioWindow = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { handleOpenProject } = useWindow();

  const handleCardClick = (id) => {
    handleOpenProject(id);
  };

  return (
    <WindowWrapper address="https://www.portfolio.com" >
      <>
        <BackgroundImageSection>
          <BackgroundText variant={isMobile ? 'h3' : 'h1'}
          
              sx={{
                fontWeight: "400",
              }}
            >
              Portfolio
          </BackgroundText>
        </BackgroundImageSection>
        <MainContentSection>
          <ContentSection theme={theme}>
            <Grid container spacing={4} style={{ marginTop: '10px' }}>
              {Object.keys(ProjectDatas).map((key) => {
                const item = ProjectDatas[key];
                return (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <CardActionArea onClick={() => handleCardClick(key)}>
                      <InfoCard>
                        <CardContent>
                          <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                          <CardHeader>
                            <Typography variant="h6" component="h2">
                              {item.title}
                            </Typography>
                            <Chip label={item.badge} style={{ backgroundColor: item.badgeColor, color: 'white' }} />
                          </CardHeader>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {item.content}
                          </Typography>
                        </CardContent>
                      </InfoCard>
                    </CardActionArea>
                  </Grid>
                );
              })}
            </Grid>
          </ContentSection>
        </MainContentSection>
      </>
    </WindowWrapper>
  );
};

export default PortfolioWindow;
