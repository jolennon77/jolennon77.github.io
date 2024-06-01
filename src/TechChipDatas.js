// src/techChipData.js

import { SiJquery, SiJavascript, SiHtml5, SiCss3, SiSpring, SiSpringboot, SiRedux, SiMysql, SiMongodb, SiAmazonaws, SiDocker } from "react-icons/si";
import { FaGitAlt, FaNode } from "react-icons/fa";
import { RiReactjsLine, RiJavaLine } from "react-icons/ri";

const TechChipDatas = [
  { label: "Java", icon: <RiJavaLine />, color: "primary" },
  { label: "JavaScript", icon: <SiJavascript />, color: "secondary" },
  { label: "Jquery", icon: <SiJquery />, color: "secondary" },
  { label: "HTML5", icon: <SiHtml5 />, color: "secondary" },
  { label: "React", icon: <RiReactjsLine />, color: "secondary" },
  { label: "Node.js", icon: <FaNode />, color: "primary" },
  { label: "CSS", icon: <SiCss3 />, color: "secondary" },
  { label: "Git", icon: <FaGitAlt />, style: { backgroundColor: '#9C27B0' } },
  { label: "Spring", icon: <SiSpring />, color: "primary" },
  { label: "SpringBoot", icon: <SiSpringboot />, color: "primary" },
  { label: "Redux", icon: <SiRedux />, color: "secondary" },
  { label: "MySQL", icon: <SiMysql />, style: { backgroundColor: '#007396' } },
  { label: "MongoDB", icon: <SiMongodb />, style: { backgroundColor: '#007396' } },
  { label: "AWS", icon: <SiAmazonaws />, style: { backgroundColor: '#FF9800' } },
  { label: "Docker", icon: <SiDocker />, style: { backgroundColor: '#FF9800' } }
];

export default TechChipDatas;
