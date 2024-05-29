import React from 'react';
import WindowWrapper from "../WindowWrapper";
import styled, { keyframes } from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { SiJavascript, SiHtml5, SiCss3, SiSpring, SiSpringboot,SiRedux,SiMysql,SiMongodb, SiAmazonaws, SiDocker } from "react-icons/si";
import { FaGitAlt, FaNode } from "react-icons/fa";
import { RiReactjsLine,RiJavaLine } from "react-icons/ri";

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
  //display: flex;
  //align-items: center;
  //justify-content: center;
  height: 40vh;
  background: url('/img/profilebg.jpeg') center/cover no-repeat;
  //background-size: auto 100%;
  text-align: center;
  color: white;
  animation: ${fadeIn} 1s ease-out;
  padding: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 40px;
`;

const LargeProfileImage = styled.img`
  width: 200px;
  height: 250px;
  border: 5px solid #545454;
  border-radius: 10px;
`;

const HeroText = styled(Typography)`
  margin-top: 20px;
  
`;

const ContentSection = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.palette.background.default};
`;

const InfoCard = styled(Card)`
  animation: ${fadeIn} 1s ease-out;
`;

const ProfileInfo = styled.div`
  text-align: left;
  width: 60%;
`;

const SkillSection = styled.div`
  margin-top: 20px;
`;

const PortfolioWindow = ({ onClose }) => {
  const theme = useTheme();

  return (
      <WindowWrapper onClose={onClose}>
        <>

          <HeroSection>
            <ProfileInfo>
              <HeroText variant="h3">About me</HeroText>
            </ProfileInfo>
            <FlexContainer>
              <LargeProfileImage alt="조현진" src="/img/profileimg.jpeg" />
              <ProfileInfo>
                <HeroText variant="h3">조현진</HeroText>
                <HeroText variant="h5">Full Stack Developer</HeroText>
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


                <Grid item>
                  <Chip
                      label="Java"
                      icon={<RiJavaLine />}
                      color="primary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                      label="JavaScript"
                      icon={<SiJavascript />}
                      color="secondary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>


                <Grid item>
                  <Chip
                      label="HTML5"
                      icon={<SiHtml5 />}
                      color="secondary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>


                <Grid item>
                  <Chip label="React"
                        icon={<RiReactjsLine />}
                        color="secondary"
                        sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>


                <Grid item>
                  <Chip label="Node.js"
                        icon={<FaNode />}
                        color="primary"
                        sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>


                <Grid item>
                  <Chip
                      label="CSS"
                      icon={<SiCss3 />}
                      color="secondary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>


                <Grid item>
                  <Chip
                      label="Git"
                      icon={<FaGitAlt />}
                      style={{ backgroundColor: '#9C27B0', padding: '10px' }}
                      sx={{  fontSize: '1.5rem'}}
                        />
                </Grid>
                <Grid item>
                  <Chip
                      label="Spring"
                      icon={<SiSpring />}
                      color="primary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                        />
                </Grid>
                <Grid item>
                  <Chip
                      label="SpringBoot"
                      icon={<SiSpringboot />}
                      color="primary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                        />
                </Grid>
                <Grid item>
                  <Chip
                      label="Redux"
                      icon={<SiRedux />}
                      color="secondary"
                      sx={{  fontSize: '1.5rem', padding: '10px' }}
                  />
                </Grid>


                <Grid item>
                  <Chip
                      label="MySQL"
                      icon={<SiMysql />}
                      style={{ backgroundColor: '#007396', padding: '10px' }}
                      sx={{  fontSize: '1.5rem'}}
                  />
                </Grid>
                <Grid item>
                  <Chip
                      label="MongoDB"
                      icon={<SiMongodb  />}
                      style={{ backgroundColor: '#007396', padding: '10px' }}
                      sx={{  fontSize: '1.5rem'}}
                  />
                </Grid>
                <Grid item>
                  <Chip
                      label="AWS"
                      icon={<SiAmazonaws  />}
                      style={{ backgroundColor: '#FF9800', padding: '10px' }}
                      sx={{  fontSize: '1.5rem'}}
                  />
                </Grid>
                <Grid item>
                  <Chip
                      label="Docker"
                      icon={<SiDocker  />}
                      style={{ backgroundColor: '#FF9800', padding: '10px' }}
                      sx={{  fontSize: '1.5rem'}}
                  />
                </Grid>


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


              <Grid item xs={12} >
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                     💼 Experience
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
        </>
      </WindowWrapper>
  );
};

export default PortfolioWindow;
