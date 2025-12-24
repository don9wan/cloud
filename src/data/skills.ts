//@TODO(): 기술스택

export enum TechCategory {
  DEVELOPMENT = "development",
  DESIGN = "design",
  PROJECT = "project",
  ANALYTICS = "analytics",
}

export const skillsData = [
  {
    title: "사업 기획",
    icon: "briefcase-business",
    color: "primary",
    bullets: [
      "시장 분석 및 경쟁사 리서치",
      "사업계획서 작성 및 IR피칭",
      "플랫폼 비즈니스 모델 설계"
    ]
  },
  {
    title: "서비스 개발",
    icon: "code-xml",
    color: "accent-cyan",
    bullets: [
      "프론트엔드·백엔드 개발",
      "아키텍쳐 패턴 기반 SW 설계",
      "버그 모니터링 및 트러블슈팅"
    ]
  },
  {
    title: "서비스 디자인",
    icon: "monitor-smart-phone",
    color: "accent-amber",
    bullets: [
      "고객발굴 심층인터뷰",
      "웹·앱 UX/UI 디자인",
      "프로토타이핑 및 QA"
    ]
  },
  {
    title: "팀 협업",
    icon: "messages-square",
    color: "accent-cyan",
    bullets: [
      "요구사항 정의 및 우선순위 조정",
      "서비스 정책 문서화 및 갱신",
      "직군 간 커뮤니케이션 지원"
    ]
  }
];

export const techStackData = [
  // ********* Design ********* //
  { name: "Figma", icon: "SiFigma", color: "accent-lime", category: TechCategory.DESIGN, proficiency: 70 },
  { name: "Adobe Illustrator", icon: "SiAdobeillustrator", color: "accent-lime", category: TechCategory.DESIGN, proficiency: 60 },
  { name: "PPT Design", icon: "SiMicrosoftpowerpoint", color: "accent-lime", category: TechCategory.DESIGN, proficiency: 80 },

  // ********* Analytics ********* //
  { name: "SQL", icon: "SiMysql", color: "accent-lime", category: TechCategory.ANALYTICS, proficiency: 40 },
  { name: "Mysql", icon: "SiMysql", color: "accent-lime", category: TechCategory.ANALYTICS, proficiency: 30 },
  { name: "Python", icon: "SiPython", color: "primary", category: TechCategory.ANALYTICS, proficiency: 30 },
  { name: "Jupyter Notebook", icon: "SiJupyter", color: "primary", category: TechCategory.ANALYTICS, proficiency: 50 },
  { name: "Kibana", icon: "SiKibana", color: "accent-lime", category: TechCategory.ANALYTICS, proficiency: 40 },
  { name: "Google Analytics", icon: "SiGoogleanalytics", color: "accent-lime", category: TechCategory.ANALYTICS, proficiency: 50 },
  
  // ********* Project Management ********* //
  { name: "Jira", icon: "SiJira", color: "accent-lime", category: TechCategory.PROJECT, proficiency: 70 },
  { name: "Confluence", icon: "SiConfluence", color: "accent-lime", category: TechCategory.PROJECT, proficiency: 70 },
  { name: "Notion", icon: "SiNotion", color: "accent-lime", category: TechCategory.PROJECT, proficiency: 80 },
  { name: "Slack", icon: "SiSlack", color: "accent-lime", category: TechCategory.PROJECT, proficiency: 80 },

  // ********* Development ********* //
  { name: "Android\nwith Kotlin", icon: "SiKotlin", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 80 },
  { name: "Flutter\nwith Dart", icon: "SiFlutter", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 60 },
  { name: "React\nwith TS", icon: "SiReact", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 70 },
  { name: "Spring Boot\nwith Java", icon: "SiSpringboot", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 40 },
  { name: "MVVM Architecture", icon: "DiGoogleCloudPlatform", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 70 },
  { name: "Git Flow", icon: "SiGit", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 80 },
  { name: "Github", icon: "SiGithub", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 80 },
  { name: "Firebase", icon: "SiFirebase", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 60 },
  { name: "Open API", icon: "SiSwagger", color: "accent-lime", category: TechCategory.DEVELOPMENT, proficiency: 40 },
];
