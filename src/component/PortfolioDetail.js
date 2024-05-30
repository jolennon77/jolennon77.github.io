// src/component/PortfolioDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const ContentSection = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.palette.background.default};
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioDetail = () => {
  const { id } = useParams();

  // Sample data, replace with actual data as needed
  const portfolioData = {
    project1: {
      title: "Project 1",
      description: "Detailed description of Project 1.",
      image: "/img/project1.png",
    },
    project2: {
      title: "Project 2",
      description: "Detailed description of Project 2.",
      image: "/img/project2.png",
    },
    project3: {
      title: "Project 3",
      description: "Detailed description of Project 3.",
      image: "/img/project3.png",
    },
  };

  const project = portfolioData[id];

  return (
    <MainContentSection>
      <ContentSection>
        <Card>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          <CardContent>
            <Typography variant="h4" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '20px' }}>
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      </ContentSection>
    </MainContentSection>
  );
};

export default PortfolioDetail;