// src/techChipData.js

import { SiApachetomcat, SiPostman, SiIntellijidea, SiEclipseide, SiVisualstudio, SiNotion, SiJquery, SiJavascript, SiHtml5, SiCss3, SiSpring, SiSpringboot, SiRedux, SiMysql, SiMongodb, SiAmazonaws, SiDocker } from "react-icons/si";
import { FaGitAlt, FaSlack, FaDiscord } from "react-icons/fa";
import { RiReactjsLine, RiJavaLine } from "react-icons/ri";
import { SiNginx } from "react-icons/si";

const TechChipDatas = {
  backend: [
    { label: "Java", icon: <RiJavaLine />, color: "primary" },
    { label: "Spring", icon: <SiSpring />, color: "primary" },
    { label: "SpringBoot", icon: <SiSpringboot />, color: "primary" },
  ],
  db: [
    { label: "MySQL", icon: <SiMysql />, sx: { backgroundColor: '#4DB33D', color: 'white' } },
    // { label: "MongoDB", icon: <SiMongodb />, sx: { backgroundColor: '#4DB33D', color: 'white' } },
  ],
  frontend: [
    { label: "JavaScript", icon: <SiJavascript />, color: "secondary" },
    { label: "Jquery", icon: <SiJquery />, color: "secondary" },
    { label: "HTML5", icon: <SiHtml5 />, color: "secondary" },
    { label: "React", icon: <RiReactjsLine />, color: "secondary" },
    { label: "CSS", icon: <SiCss3 />, color: "secondary" },
    { label: "Redux", icon: <SiRedux />, color: "secondary" },
  ],
  server: [
    { label: "AWS", icon: <SiAmazonaws />, sx: { backgroundColor: '#FF9900', color: 'white' } },
    { label: "Docker", icon: <SiDocker />, sx: { backgroundColor: '#FF9900', color: 'white' } },
    { label: "Nginx", icon: <SiNginx />, sx: { backgroundColor: '#FF9900', color: 'white' } },
    { label: "Apachetomcat", icon: <SiApachetomcat />, sx: { backgroundColor: '#FF9900', color: 'white' } },
  ],
  tool: [
    { label: "Eclipse", icon: <SiEclipseide />, sx: { backgroundColor: '#9C27B0', color: 'white' } },
    { label: "VSC", icon: <SiVisualstudio />, sx: { backgroundColor: '#9C27B0', color: 'white' } },
    { label: "IntelliJ", icon: <SiIntellijidea />, sx: { backgroundColor: '#9C27B0', color: 'white' } },
    { label: "Postman", icon: <SiPostman />, sx: { backgroundColor: '#9C27B0', color: 'white' } },
  ],
  collaborations: [
    { label: "Git", icon: <FaGitAlt />, sx: { backgroundColor: '#007396', color: 'white' } },
    { label: "Notion", icon: <SiNotion />, sx: { backgroundColor: '#007396', color: 'white' } },
    { label: "Slack", icon: <FaSlack />, sx: { backgroundColor: '#007396', color: 'white' } },
    { label: "Discord", icon: <FaDiscord />, sx: { backgroundColor: '#007396', color: 'white' } },
    
  ]
};

export default TechChipDatas;
