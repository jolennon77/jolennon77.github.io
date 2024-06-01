// src/component/PortfolioDetail.js
import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import WindowWrapper from "../WindowWrapper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import ProjectDatas from "../ProjectDatas"; // Import the project details
import TechChipDatas from "../TechChipDatas"; // Import the tech chip data

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

const InfoCard = styled(Card)``;

const BackgroundImageSection = styled.div`
  background-image: ${({ image }) => `url(${image})`};
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
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    z-index: -1;
    padding: 0 10px;
    border-radius: 5px; /* 선택사항: 텍스트 뒤 배경의 모서리를 둥글게 만듦 */
  }
`;

const PortfolioDetail = ({ projectId }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const project = ProjectDatas[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  // 필터링된 기술 스택 칩 데이터
  const filteredTechChips = TechChipDatas.filter((chip) =>
    project.technologies.includes(chip.label)
  );

  return (
    <WindowWrapper address={`https://www.portfolio.com/${project.title}`}>
      <>
        <MainContentSection>
          <BackgroundImageSection image={project.image}>
            <BackgroundText
              variant={isMobile ? "h4" : "h2"}
              sx={{
                fontWeight: "400",
                padding: "0 10px"
              }}
            >
              {project.title}
            </BackgroundText>
          </BackgroundImageSection>
          <ContentSection theme={theme}>
            <Grid container spacing={4} style={{ marginTop: "10px" }}>
              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                    Project Duration
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
                    Team Composition
                    </Typography>
                    <Typography variant="body1" component="p">
                      {project.team}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                    Tech Stack
                    </Typography>
                    <Grid container spacing={2}>
                      {filteredTechChips.map((skill, index) => (
                        <Grid item key={index}>
                          <Chip
                            label={skill.label}
                            icon={skill.icon}
                            color={skill.color || "default"}
                            sx={skill.style || {}}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                    Description
                    </Typography>
                    <Typography variant="body1" component="p">
                    {project.detailedContent}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                    Role 
                    </Typography>
                    <Typography variant="body1" component="p">
                    {project.role}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      YouTube
                    </Typography>
                    <iframe
                      width="100%"
                      height="315"
                      src={project.youtube}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
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
