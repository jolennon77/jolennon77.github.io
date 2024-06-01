// src/component/PortfolioDetail.js
import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import WindowWrapper from '../WindowWrapper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

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
  margin-bottom: 20px;
`;

const PortfolioDetail = ({ projectId }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projectDetails = {
    project1: {
      title: "가챠",
      image: "/img/portfolio/1.png",
      content: "쇼핑몰 관리자페이지에 대한 상세 내용입니다.",
      technologies: ["React", "Node.js", "MongoDB"],
      duration: "6 months",
      team: "5 members",
    },
    project2: {
      title: "레트로 플래닛",
      image: "/img/portfolio/2.png",
      content: "레트로 컨셉의 SNS에 대한 상세 내용입니다.",
      technologies: ["Vue.js", "Firebase"],
      duration: "4 months",
      team: "3 members",
    },
    // Add more project details as needed
  };

  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <WindowWrapper>
      <>
        <MainContentSection>
          <ContentSection theme={theme}>
            <Typography variant={isMobile ? 'h3' : 'h1'}>
              {project.title}
            </Typography>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <Typography variant="body1" component="p" style={{ marginTop: '20px' }}>
              {project.content}
            </Typography>
            <Grid container spacing={4} style={{ marginTop: '10px' }}>
              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      기술 스택
                    </Typography>
                    <Typography variant="body1" component="p">
                      {project.technologies.join(", ")}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      프로젝트 기간
                    </Typography>
                    <Typography variant="body1" component="p">
                      {project.duration}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      팀 구성
                    </Typography>
                    <Typography variant="body1" component="p">
                      {project.team}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
            </Grid>
          </ContentSection>
        </MainContentSection>
      </>
    </WindowWrapper>
  );
};

export default PortfolioDetail;
