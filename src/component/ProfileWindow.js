// src/component/ProfileWindow.js
import React from "react";
import WindowWrapper from "../common/WindowWrapper";
import styled, { keyframes } from "styled-components";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link"; // Import Link from MUI
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import TechChipDatas from "../data/TechChipDatas"; // Import the tech chip data
import { FaGithub } from "react-icons/fa";
import { SiVelog, SiNotion } from "react-icons/si";
import { styled as muiStyled } from "@mui/material/styles";
import HighlightedText from "../common/HighlightedText";
import AnswerText from "../common/AnswerText";

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
  width: 140px;
  
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
              <HeroText variant={isMobile ? "h4" : "h3"}>Profile</HeroText>
            </ProfileInfo>
            <FlexContainer>
              <LargeProfileImage alt="조현진" src="/img/profileimg.jpeg" />
              <ProfileInfo>
                <HeroText variant={isMobile ? "h4" : "h3"}>조현진</HeroText>
                {/* <strong>Full Stack Cloud Native Developer</strong> */}
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
                      {/* "배우고 도전하는, 나는 신입 개발자!" */}
                      "겨우 밥먹고 사는 코딩 조무사!"
                    </Typography>
                    <Typography variant="body1" component="p">
                      <li>
                        응애
                        {/* 완벽할 수 없기에 더 노력하고 개선하려는 신입 백엔드
                        개발자 조현진입니다. */}
                      </li>
                      {/* <li>
                        React와 Spring Boot로 웹 애플리케이션을 개발하고,
                        Nginx와 Docker를 이용해 배포해본 경험이 있습니다.
                      </li>
                      <li>
                        데이터를 기반으로 사용자가 필요한 정보를 제공해주는
                        서비스를 만드는 개발자가 되는 것이 목표입니다.{" "}
                      </li> */}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>

              {/* <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Technical Skills // 이런거 다 의미없다 기본이나 잘하자
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
              </Grid> */}

              <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      🎓 Education
                    </Typography>

                    <Typography
                      variant="body1"
                      component="p"
                      style={{ marginBottom: "5px" }}
                    >
                      - 한양대학교 ERICA 경영학부 (2010.03 - 2018.08)
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ marginBottom: "5px" }}
                    >
                      - 경기고등학교 (2007.03 - 2010.02)
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
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ marginBottom: "5px" }}
                    >
                      - 푸르덴셜 생명보험(현 kb라이프생명) 감사팀 (2018.04 -
                      2018.10)
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ marginBottom: "5px" }}
                    >
                      - 쿠팡이츠서비스 Engagement (2021.07 - 2023.07)
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ marginBottom: "5px" }}
                    >
                      - 중앙정보기술인재개발원 (2023.12 - 2024.06)
                      <br />
                      &nbsp;&nbsp;클라우드 데브옵스 프론트엔드&백엔드 자바(JAVA)
                      풀스택 개발자 취업캠프
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
                    <br />
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
                        href="https://amplified-tabletop-852.notion.site/c196df21558e4f99886c8628794a8417?pvs=4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.notion.so
                      </StyledLink>
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
              {/* <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      🧑🏻‍💻 About me
                    </Typography>
                    <br />
                    <HighlightedText>
                    개발자가 되고 싶은 이유
                    </HighlightedText>
                    <AnswerText>
                    어렸을 때부터 레고나 프라모델 등 무언가를 만드는 것을 매우 좋아했습니다. 레고 블록을 조립하면서 창의력을 발휘하고, 프라모델을 조립하면서 세밀함과 인내심을 기르며, 무언가를 완성했을 때의 성취감은 저에게 큰 즐거움이었습니다. 이러한 취미 생활은 자연스럽게 제가 사물의 구조를 이해하고 문제를 해결하는 능력을 키우는 데 도움을 주었습니다.
                      <br />
                      <br />
                      또한, 이전 근무지에서 제가 엑셀로 만든 매크로나 자동화 시트를 팀원들이 사용하는 모습을 보며 큰 뿌듯함을 느꼈습니다. 처음에는 단순히 반복적인 작업을 줄이기 위해 시작했지만, 점차 팀원들이 제 작업을 통해 업무 효율성을 높이고, 더 나은 결과를 만들어내는 모습을 보면서 큰 보람을 느꼈습니다. 이는 제가 만든 것이 다른 사람들에게 실질적인 도움을 줄 수 있다는 사실을 깨닫게 해주었습니다.
                      <br />
                      <br />
                      그리고, 함께 협업하던 개발자분들이 저희가 요청한 기능들을 개선하고 추가하는 모습을 보면서 그들의 전문성과 능력에 감탄하게 되었습니다. 복잡한 문제를 해결하고, 새로운 기능을 구현하며, 사용자들의 요구에 맞게 시스템을 발전시켜 나가는 과정이 매우 인상적이었습니다.
                      <br />
                      <br />
                      이러한 경험들은 저로 하여금 개발자가 되고 싶다는 결심을 하게 만든 중요한 계기였습니다. 누군가에게 도움이 되는 것을 만들어주고, 기술을 통해 문제를 해결하고자 합니다.
                      <br />
                      <br />
                      그러기 위해 앞으로 저는 다양한 기술을 배우고 익히며, 이를 통해 사용자에게 실질적인 가치를 제공하고 싶습니다. 창의력과 문제 해결 능력을 바탕으로, 사용자에게 도움이 되는 개발자가 되고자 합니다.
                      <br />
                      <br />
                      이처럼 어렸을 때부터 시작된 창의적인 활동과 실제 업무에서의 경험은 제가 개발자로서의 길을 선택하게 만든 중요한 요소들입니다. 앞으로도 지속적으로 배우고 성장하며, 다른 사람들에게 도움이 되는 개발자가 되기 위해 최선을 다할 것입니다.
                      <br />
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      소통의 중요성을 아는 개발자
                    </HighlightedText>
                    <AnswerText>
                      저는 학창시절 다양한 아르바이트와 호주 워킹홀리데이 경험을
                      통해 여러 사람들과의 협업에 있어 소통이 업무의 성공에
                      얼마나 중요한지 깨달았습니다.
                      <br />
                      <br />
                      예를 들어, 호주에서 일했던 의류 창고 매장에서는 창고 직원과 오피스 직원 간의 원활한 소통이 매우 중요했습니다. 특히 박싱데이 같은 대규모 할인 행사가 있는 날에는 업무량이 급격히 증가했습니다. 어느 해 박싱데이, 예상치 못한 대규모 주문이 몰려와 창고와 오피스 모두가 바빠졌습니다. 저는 오피스 팀과 협의하여 우선적으로 처리해야 할 주문을 재정리하였습니다. 이를 통해 모든 팀원이 상황을 명확히 이해하고 협력할 수 있었으며, 박싱데이 일정에 맞춰 재고를 매장으로 전달 할 수 있었습니다.
                      <br />
                      <br />
                      이러한 경험은 사회인이 된 이후에도 "소통을 통한 협업"의
                      중요성을 알게 해 주었습니다. 업무 중에도 동료에게 질문하는
                      것을 두려워하지 않고, 업무 요청사항이나 전달사항이
                      정확하게 전달되었는지, 제가 동료의 의도를 정확하게
                      파악하였는지 항상 확인하였습니다.
                      <br />
                      <br />
                      뿐만 아니라, 업무 요청에 대해 '불가'라는 답변을 해야 할
                      상황에서도 단순히 불가하다고 하지 않고 가능한 범위 내에서
                      대안을 찾아 제시하는 소통 방법을 사용하였습니다. 그 결과
                      업무 효율과 동료 관계에 긍정적인 영향을 주었습니다.
                      <br />
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      고객 관점에서 사고하는 개발자
                    </HighlightedText>
                    <AnswerText>
                      대화와 소통을 두려워하지 않는 저의 성향은 자연스럽게 "고객
                      관점에서 사고하기"로 연결되었습니다. 과거 근무 시절,
                      고객의 니즈를 파악하고 이를 해결하기 위해 다양한 방법을
                      모색하였습니다.
                      <br />
                      <br />
                      예를 들어, 퇴근 후 자발적으로 배달을 경험하고, 배달
                      종사자분들과의 인터뷰 기회에 참여하였습니다. 이를 통해
                      알게 된 점을 바탕으로 배달 서비스의 거절률을 분석하여 최소
                      단가 고정비를 설정하는 프로모션을 기획하였고, 그 결과 배달
                      거절률을 8% 줄이고 CX(45분 내 배달 완료)는 기존 80%대에서
                      90%대로 증가하는 성과를 거두었습니다.
                      <br />
                      <br />
                      이러한 경험을 통해 고객의 관점을 이해하고, 이를 바탕으로
                      문제를 해결하는 능력을 기르게 되었습니다. 개발 업무에서도
                      이해관계자의 관점에서 생각하고 자발적으로 노력하여 도움이
                      되는 개발자가 되겠습니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      수용과 발전을 추구하는 개발자
                    </HighlightedText>
                    <AnswerText>
                      저는 비전공자 출신으로, 이러한 약점을 보완하기 위해
                      정보처리기사 자격증을 취득하였습니다. 또한 IT 플랫폼
                      서비스를 제공하는 기업에서의 경험을 통해 마케팅 보조,
                      데이터 분석, 도출된 데이터 기반 액션(미션) 등 다양한
                      업무를 수행하였습니다.
                      <br />
                      <br />
                      저는 이러한 경험을 바탕으로 개발자로서 빠르게 적응하고,
                      지속적으로 성장할 수 있는 인재가 될 수 있을 것으로
                      생각합니다. 특히, 새로운 기술과 트렌드를 수용하고 이를
                      바탕으로 발전하는 데 주력할 것입니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      팀원에게 도움이 되는 개발자
                    </HighlightedText>
                    <AnswerText>
                      개발자로서 다양한 프로젝트 팀 활동에 참여하면서 협업의
                      중요성을 깨달았습니다.
                      <br />
                      <br />
                      프로젝트에서는 팀장과 팀원 역할을 맡아, 웹 애플리케이션
                      개발 프로젝트를 성공적으로 완료한 경험이 있습니다. 특히,
                      프로젝트 중간에 발생한 예기치 못한 문제들을 해결하기 위해
                      팀원들과 적극적으로 소통하며, 문제의 원인을 분석하고
                      해결책을 모색하였습니다.
                      <br />
                      <br />한 예로, 학원 마지막 프로젝트 중 webRTC 구현에
                      문제가 발생했을 때 팀원들과 협력하여 문제를 해결하고
                      최적화 하였습니다. 이로 인해 기한 내에 프로젝트를 완료할
                      수 있었습니다. 결과적으로, 이 프로젝트로 학원 내 평가에서
                      최우수상을 받게 되는 좋은 결과를 얻게 되었습니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>지원 동기 및 입사 후 포부</HighlightedText>
                    <AnswerText>
                    저는 다양한 기술을 배우고 익히면서, 사용자에게 더 나은 경험을 제공하고 싶다는 열정을 가지게 되었습니다. 사용자 인터페이스 디자인부터 데이터베이스 관리에 이르기까지, 다양한 측면에서의 경험을 쌓으며 전체적인 시스템의 안정성과 효율성을 높이는 데 기여하고자 합니다. 특히, 훌륭한 개발자 동료 분들과 함께 협력하여 혁신적인 프로젝트를 진행하고, 그 과정에서 저의 기술과 경험을 더욱 발전시키고 싶습니다.
                    <br /><br />
                    저는 입사 후 회사의 비전과 목표를 달성하기 위해 최선을
                    다하겠습니다. 구체적으로는, 다음과 같습니다.<br /><br />
                    
                    1. 지속적인 자기계발과 성장 <br />
                    빠르게 변화하는 기술 환경에 적응하기 위해 최신 기술 동향을 꾸준히 학습하고, 관련 자격증을 취득하는 등 자기계발을 게을리하지 않겠습니다. 이를
                    통해 회사의 기술력 향상에 기여하겠습니다. <br /><br />
                    2. 팀워크와 협업<br />
                    협업의 중요성을 깊이 이해하고 있으며, 팀원들과의 원활한 소통과 협력을 통해 시너지를 발휘하겠습니다. 상호 존중과
                    신뢰를 바탕으로 팀의 목표를 달성하는 데 기여하겠습니다. <br /><br />
                    3.프로젝트 성과 <br />
                    향상 맡은 바 프로젝트에서 책임감을 가지고 일하며, 주어진 목표를 달성하기 위해 효율적인 방법을 모색하겠습니다. 문제 해결 능력을 발휘하여 프로젝트의
                    성공적인 완수를 위해 노력하겠습니다. <br /><br />
                    4. 회사 문화와 가치<br />
                    준수 회사의 미션, 비전, 가치를 깊이 이해하고, 이를 실천하는
                    일원이 되겠습니다. 긍정적인 조직 문화를 형성하고 유지하는 데
                    기여하며, 회사의 성장을 위해 헌신하겠습니다.
                    </AnswerText>
                  </CardContent>
                </InfoCard>
              </Grid> */}

              {/* <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      💬 Too Much Information
                    </Typography>
                    <br />
                  
                    <HighlightedText>Q. 성격의 장단점?</HighlightedText>
                    <AnswerText>
                      A. 장점은 적응력이라고 생각합니다. 새로운 사람들과도 잘
                      적응하는 성격적인 부분과 새로운 기술, 프로그램들을 빠르게
                      이해하고 습득할 수 있습니다. <br />
                      <br />
                      단점으로는 결정이 빠른 편이라고 생각합니다. 프로젝트를
                      하면서 느꼈던 것중 하나로, 누군가에게는 좀 더 신중한
                      문제일 수 있는데 현실적인 것에만 몰두하여 빠르게
                      진행하려는 점이 있는 것 같습니다. 이를 보완하기 위해
                      중요한 결정을 내릴 때는 팀원들의 의견을 충분히 수렴하고
                      신중하게 검토하는 습관을 기르려고 노력하고 있습니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      Q. 팀원과 갈등이 생기면 어떻게 해결하는 편인지?
                    </HighlightedText>
                    <AnswerText>
                      A. 팀원과 갈등이 생기면 우선 상대방의 입장을 이해하려고
                      노력합니다. 팀원이기전에 하나의 개인이기에 다르게 생각할
                      수 있다는 열린 마음을 가지려고 노력합니다. <br />
                      <br />
                      다음으로 우선 문제의 원인을 파악하여 상호 이해를 높이는
                      것이 중요하다고 생각합니다. 갈등 상황에서는 감정적인
                      대응을 피하고, 구체적인 사실과 문제 해결에 집중하려고
                      합니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      Q. 조직 문화에 적응하는 나만의 방법이 있는지?
                    </HighlightedText>
                    <AnswerText>
                      A. 먼저 인사하고 먼저 다가갑니다. 또한 새로운 환경에
                      들어가면 먼저 새로운 환경의 업무 방식과 조직의 관습을
                      이해하려고 노력합니다. 그리고 저에 대한 피드백을 겸허히
                      받아들이고, 조직의 목표와 가치에 맞춰 제 업무 방식을
                      조정하는 것도 중요하다고 생각합니다. 이러한 접근 방식을
                      통해 조직 문화에 빠르게 적응하고, 팀에 기여할 수 있습니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      Q. 리더에 가까운지, 팔로워에 가까운지?
                    </HighlightedText>
                    <AnswerText>
                      A. 현재 저는 팔로워에 가깝다고 생각합니다. 하지만 저의
                      최종 목표는 좋은 팔로워이자 귀감이 되는 리더가 되는
                      것입니다. 팔로워로서 팀의 목표를 이해하고 협력하며 배우는
                      과정에서 많은 경험과 지식을 쌓고 싶습니다. 이러한 경험들은
                      미래에 리더로서의 자질을 키우는 데 중요한 밑거름이 될
                      것이라고 믿습니다. 따라서 멋진 리더가 되기 위해서는 우선
                      훌륭한 팔로워가 되어야 한다고 생각합니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>Q. 취미는?</HighlightedText>
                    <AnswerText>
                      A. 서브컬쳐 문화를 좋아합니다. 현재 하고있는 게임인 니케와
                      블루아카이브에서 각각 지휘관과 선생님을 즐기고 있습니다.
                      그리고 최근에 빠져있는 애니메이션은 걸즈밴드크라이입니다.
                      <br />
                      <br />
                      이러한 취미는 저에게 일상에서 벗어나 즐거움을 제공합니다.
                      게임과 애니메이션을 통해 다양한 캐릭터와 스토리를 경험하며
                      몰입감을 느낍니다. 이러한 취미를 통해 스트레스를 해소하고
                      새로운 영감을 얻고 있습니다.
                    </AnswerText>
                    <br />
                    <br />
                    <br />
                    <HighlightedText>
                      Q. 좋아하는 사자성어, 좌우명 등
                    </HighlightedText>
                    <AnswerText>
                      A. 마음을 불태워라.- 렌고쿠 쿄쥬로 향년 20세
                      <br />
                      <br />
                      마음을 불태워라"라는 좌우명은 열정과 헌신의 중요성을
                      강조합니다. 렌고쿠 쿄쥬로는 애니메이션 '귀멸의 칼날'에서
                      용맹하게 싸우며 자신의 신념을 지키는 인물로, 그의 열정적인
                      태도와 결단력은 저에게 큰 영감을 줍니다. 이 좌우명을 통해
                      어려운 프로젝트나 문제에 부딪혀도 포기하지 않고 도전하는
                      자세를 유지하겠습니다.
                    </AnswerText>
                  </CardContent>
                </InfoCard>
              </Grid> */}
               <Grid item xs={12}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      💬 Too Much Information
                    </Typography>
                    <br />
                    <HighlightedText>
                      Q. 좋아하는 사자성어, 좌우명 등
                    </HighlightedText>
                    <AnswerText>
                      A. 마음을 불태워라.- 렌고쿠 쿄쥬로 향년 20세
                    </AnswerText>
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
