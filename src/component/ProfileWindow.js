// src/component/ProfileWindow.js
import React from "react";
import WindowWrapper from "../WindowWrapper";
import styled, { keyframes } from "styled-components";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link"; // Import Link from MUI
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import TechChipDatas from "../TechChipDatas"; // Import the tech chip data
import { FaGithub } from "react-icons/fa";
import { SiVelog, SiNotion } from "react-icons/si";
import { styled as muiStyled } from "@mui/material/styles";

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
  background: url("/img/profilebg.jpeg") center/cover no-repeat;
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

const StyledLink = muiStyled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileWindow = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WindowWrapper address="https://www.profile.com">
      <>
        <MainContentSection>
          <HeroSection>
            <ProfileInfo>
              <HeroText variant={isMobile ? "h4" : "h3"}>About me</HeroText>
            </ProfileInfo>
            <FlexContainer>
              <LargeProfileImage alt="조현진" src="/img/profileimg.jpeg" />
              <ProfileInfo>
                <HeroText variant={isMobile ? "h4" : "h3"}>조현진</HeroText>
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
            <Grid container spacing={4} style={{ marginTop: "10px" }}>
              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      🧑🏻‍💻 Introduction
                    </Typography>
                    <Typography variant="h5" component="p">
                      "배우고 도전하는, 나는 신입 개발자!"
                    </Typography>
                    <Typography variant="body1" component="p">
                      <li>
                        완벽할 수 없기에 더 노력하고 개선하려는 신입 백엔드
                        개발자 조현진입니다.
                      </li>
                      <li>
                        React와 Spring Boot로 웹 애플리케이션을 개발하고,
                        Nginx와 Docker를 이용해 배포해본 경험이 있습니다.
                      </li>
                      <li>
                        데이터를 기반으로 사용자가 필요한 정보를 제공해주는
                        서비스를 만드는 개발자가 되는 것이 목표입니다.{" "}
                      </li>
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>

              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Technical Skills
                    </Typography>
                    <Grid container spacing={2}>
                      {Object.keys(TechChipDatas).map((section, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <Typography variant="h6" component="h4" gutterBottom>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                          </Typography>
                          <Grid container spacing={1}>
                            {TechChipDatas[section].map((skill, index) => (
                              <Grid item key={index}>
                                <StyledChip
                                  label={skill.label}
                                  icon={skill.icon}
                                  color={skill.color || "default"}
                                  sx={skill.sx || {}}
                                />
                              </Grid>
                            ))}
                          </Grid>
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
                      - 경기고등학교
                      <br />
                      &nbsp; (2007.03 - 2010.02)
                    </Typography>
                    <hr />
                    <Typography variant="body1" component="p">
                      - 한양대학교 ERICA 경영학부
                      <br />
                      &nbsp; (2010.03 - 2018.08)
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
                      - 정보처리기사
                      <br />
                      &nbsp; (한국산업인력공단 2024.06)
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      💼 Experience
                    </Typography>
                    <Typography variant="body1" component="p">
                      - 푸르덴셜 생명보험(현 kb라이프생명) 감사팀
                      <br />
                      &nbsp; (2018.04 - 2018.10)
                    </Typography>
                    <hr />
                    <Typography variant="body1" component="p">
                      - 쿠팡이츠서비스 Engagement
                      <br />
                      &nbsp; (2021.07 - 2023.07)
                    </Typography>
                    <hr />
                    <Typography variant="body1" component="p">
                      - 클라우드 데브옵스 프론트엔드&백엔드 자바(JAVA) 풀스택
                      개발자 취업캠프
                      <br />
                      &nbsp; 중앙정보기술인재개발원
                      <br />
                      &nbsp; (2023.12 - 2024.06)
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      📞 Contact
                    </Typography>
                    <Typography variant="body1" component="p">
                      <FaGithub /> GitHub :{" "}
                      <StyledLink
                        href="https://github.com/jolennon77"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/jolennon77
                      </StyledLink>
                    </Typography>
                    <Typography variant="body1" component="p">
                      <SiVelog /> Blog :{" "}
                      <StyledLink
                        href="https://velog.io/@jolennon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://velog.io/@jolennon
                      </StyledLink>
                    </Typography>
                    <Typography variant="body1" component="p">
                      <SiNotion /> Notion :{" "}
                      <StyledLink
                        href="https://www.notion.so/Hi-I-m-HJ-25a87b9cce5046f5a44f107e4212c22d"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.notion.so
                      </StyledLink>
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>

              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      💬 Too Much Information
                    </Typography>
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 왜 개발자가 하고 싶다고 생각하셨나요?
                    </Typography>
                    <Typography variant="body1" component="p">
                      A. 어렸을 때부터 레고나 프라모델등 무언가를 만드는 것을 좋아했습니다. <br />
                      쿠팡이츠서비스에서 근무하면서 제가 엑셀로 만든 매크로나 자동화 시트를 팀원들이 사용하는 것을 보며 뿌듯함을 느꼈고, 함께 협업하던 개발자분들이 저희가 요청한 기능들을 개선하고 추가하는 모습을 보면서 멋있다고 생각하게 되었습니다.  <br />
                      이러한 경험을 통해 저도 누군가에게 도움이 되는 것을 만들어주는 개발자가 되고 싶다는 결심을 하게 되었습니다.<br />
                    </Typography>
                    <br /><hr /> <br />
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 성격의 장단점?
                    </Typography>
                    <Typography variant="body1" component="p">
                      A. 장점은 적응력이라고 생각합니다. <br />
                      새로운 사람들과도 잘 적응하는 성격적인 부분과 새로운 기술, 프로그램들을 빠르게 이해하고 습득할 수 있습니다. <br />
                      단점으로는 결정이 빠른 편이라고 생각합니다. <br />
                      프로젝트를 하면서 느꼈던 것인데, 누군가에게는 좀 더 신중한 문제일 수 있는데 현실적인 것에만 몰두하여 빠르게 진행하려는 점이 있는 것 같습니다. <br />
                      이를 보완하기 위해 중요한 결정을 내릴 때는 팀원들의 의견을 충분히 수렴하고 신중하게 검토하는 습관을 기르려고 노력하고 있습니다.<br />
                    </Typography>
                    <br /><hr /> <br />
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 팀원과 갈등이 생기면 어떻게 해결하는 편인지?
                    </Typography>
                    <Typography variant="body1" component="p">
                      A. 팀원과 갈등이 생기면 우선 상대방의 입장을 이해하려고 노력합니다. <br />
                      팀원이기전에 하나의 개인이기에 다르게 생각할 수 있다는 열린 마음을 가지려고 노력합니다. <br />
                      다음으로 우선 문제의 원인을 파악하여 상호 이해를 높이는 것이 중요하다고 생각합니다. <br />
                      갈등 상황에서는 감정적인 대응을 피하고, 구체적인 사실과 문제 해결에 집중하려고 합니다.<br />
                    </Typography>
                    <br /><hr /> <br />
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 조직 문화에 적응하는 나만의 방법이 있는지?
                    </Typography>
                    <Typography variant="body1" component="p">
                    A. 먼저 인사하고 먼저 다가갑니다.<br />
                      새로운 환경에 들어가면 먼저 새로운 환경의 업무 방식과 조직의 관습을 이해하려고 노력합니다.<br />
                      또한, 피드백을 겸허히 받아들이고, 조직의 목표와 가치에 맞춰 제 업무 방식을 조정하는 것도 중요하다고 생각합니다. <br />
                      이러한 접근 방식을 통해 조직 문화에 빠르게 적응하고, 팀에 기여할 수 있습니다.<br />
                    </Typography>
                    <br /><hr /> <br />
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 리더에 가까운지, 팔로워에 가까운지?
                    </Typography>
                    <Typography variant="body1" component="p">
                    A. 현재 저는 팔로워에 가깝다고 생각합니다. 하지만 저의 최종 목표는 좋은 팔로워이자 귀감이 되는 리더가 되는 것입니다. <br />
                    팔로워로서 팀의 목표를 이해하고 협력하며 배우는 과정에서 많은 경험과 지식을 쌓고 싶습니다. <br />
                    이러한 경험들은 미래에 리더로서의 자질을 키우는 데 중요한 밑거름이 될 것이라고 믿습니다. <br />
                    리더가 되기 위해서는 우선 훌륭한 팔로워가 되어야 한다고 생각합니다.<br />
                    </Typography>
                    <br /><hr /> <br />
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 취미는?
                    </Typography>
                    <Typography variant="body1" component="p">
                      A. 서브컬쳐 문화를 좋아합니다. <br />
                        하고있는 게임인 니케와 블루아카이브에서 각각 지휘관과 선생님을 즐기고 있습니다.<br />
                        최근에 빠져있는 애니메이션은 걸즈밴드크라이입니다. 꼭보십쇼.
                    </Typography>
                    <br /><hr /> <br />
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      Q. 좋아하는 사자성어, 좌우명 등
                    </Typography>
                    <Typography variant="body1" component="p">
                      A. 마음을 불태워라. - 렌고쿠 쿄쥬로 향년 20세
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
