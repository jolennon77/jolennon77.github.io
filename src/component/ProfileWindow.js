// src/component/ProfileWindow.js
import React from 'react';
import WindowWrapper from "../WindowWrapper";
import styled, { keyframes } from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import TechChipDatas from '../TechChipDatas'; // Import the tech chip data

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

const HeroSection = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: stretch;
  background: url('/img/profilebg.jpeg') center/cover no-repeat;
  text-align: left;
  color: white;
  animation: ${fadeIn} 1s ease-out;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 20px;
  }
`;

const LargeProfileImage = styled.img`
  width: 250px;
  height: 300px;
  border: 5px solid #545454;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const HeroText = styled(Typography)`
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ContentSection = styled.div`
  padding: 0 40px;
  background: ${({ theme }) => theme.palette.background.default};
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoCard = styled(Card)`
  animation: ${fadeIn} 1s ease-out;
`;

const ProfileInfo = styled.div`
  text-shadow: -1px 0 #313131, 0 1px #313131, 1px 0 #313131, 0 -1px #313131;
  text-align: left;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledChip = styled(Chip)`
  font-size: 1.5rem;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
  }
`;

const ProfileWindow = ({ onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <WindowWrapper onClose={onClose}>
        <>
          <MainContentSection>
            <HeroSection>
              <ProfileInfo>
                <HeroText variant={isMobile ? 'h4' : 'h3'}>About me</HeroText>
              </ProfileInfo>
              <FlexContainer>
                <LargeProfileImage alt="조현진" src="/img/profileimg.jpeg" />
                <ProfileInfo>
                  <HeroText variant={isMobile ? 'h4' : 'h3'}>조현진</HeroText>
                  <strong>Full Stack Cloud Native Developer</strong>
                  <Typography variant="body1" component="p">
                    <strong>Name : </strong> 조현진
                  </Typography>
                  <Typography variant="body1" component="p">
                    <strong>Birth : </strong> May 7, 1991
                  </Typography>
                  <Typography variant="body1" component="p">
                    <strong>Phone : </strong> 010-6810-9909
                  </Typography>
                  <Typography variant="body1" component="p">
                    <strong>Email : </strong> jolennon77@gmail.com
                  </Typography>
                </ProfileInfo>
              </FlexContainer>
            </HeroSection>

            <ContentSection theme={theme}>
              <Grid container spacing={4} style={{ marginTop: '10px' }}>
                <Grid item xs={12}>
                  <InfoCard>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        🧑🏻‍💻 Introduction
                      </Typography>
                      <Typography variant="body1" component="p">
                        일 하고 싶습니다
                      </Typography>
                    </CardContent>
                  </InfoCard>
                </Grid>

                <Grid item xs={12}>
                  <InfoCard>
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        Technical Skills
                      </Typography>
                      <Grid container spacing={2}>
                        {TechChipDatas.map((skill, index) => (
                          <Grid item key={index}>
                            <StyledChip
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

                <Grid item xs={12} md={6}>
                  <InfoCard>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        🎓 Education
                      </Typography>
                      <Typography variant="body1" component="p">
                        - 경기고등학교 (2007.03 - 2010.02)
                      </Typography>
                      <Typography variant="body1" component="p">
                        - 한양대학교 ERICA 경영학부 (2010.03 - 2018.08)
                      </Typography>
                    </CardContent>
                  </InfoCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InfoCard>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        🚀 Certification
                      </Typography>
                      <Typography variant="body1" component="p">
                        - 자격증1
                      </Typography>
                      <Typography variant="body1" component="p">
                        - 자격증2
                      </Typography>
                    </CardContent>
                  </InfoCard>
                </Grid>

                <Grid item xs={12}>
                  <InfoCard>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        💼 Experience
                      </Typography>
                      <Typography variant="body1" component="p">
                        - 푸르덴셜 생명보험 (2018.04.2018.10)
                      </Typography>
                      <Typography variant="body1" component="p">
                        - 쿠팡이츠서비스 Engagement (2021.07 - 2023.07)
                      </Typography>
                    </CardContent>
                  </InfoCard>
                </Grid>

                <Grid item xs={12}>
                  <InfoCard>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        📞 Contact
                      </Typography>
                      <Typography variant="body1" component="p">
                        GitHub: github.com/jolennon77
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

export default ProfileWindow;
