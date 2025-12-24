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
    icon: "target",
    color: "primary",
    bullets: [
      "시장 분석 및 경쟁사 리서치",
      "사업계획서 작성 및 IR피칭",
      "플랫폼 비즈니스 모델 설계"
    ]
  },
  {
    title: "서비스 개발",
    icon: "bar-chart-3",
    color: "accent-cyan",
    bullets: [
      "프론트엔드·백엔드 개발",
      "아키텍쳐 패턴 기반 SW 설계",
      "버그 모니터링 및 트러블슈팅"
    ]
  },
  {
    title: "서비스 디자인",
    icon: "users",
    color: "accent-amber",
    bullets: [
      "고객발굴 심층인터뷰",
      "웹·앱 UX/UI 디자인",
      "프로토타이핑 및 QA"
    ]
  },
  {
    title: "커뮤니케이션",
    icon: "bar-chart-3",
    color: "accent-cyan",
    bullets: [
      "애자일 프로세스 기반 협업",
      "API 설계 및 문서화",
      "Jira Product Discovery",
      
    ]
  }
];

export const techStackData = [

  // ********* Design ********* //
  { name: "Figma", icon: "code", color: "accent-lime", category: TechCategory.DESIGN },
  { name: "Adobe Illustrator", icon: "code", color: "accent-lime", category: TechCategory.DESIGN },
  { name: "PPT Design", icon: "code", color: "accent-lime", category: TechCategory.DESIGN },

  // ********* Analytics ********* //
  { name: "SQL", icon: "code", color: "accent-lime", category: TechCategory.ANALYTICS },
  { name: "Mysql", icon: "code", color: "accent-lime", category: TechCategory.ANALYTICS },
  { name: "Python", icon: "terminal", color: "primary", category: TechCategory.ANALYTICS },
  { name: "Jupyter Notebook", icon: "terminal", color: "primary", category: TechCategory.ANALYTICS },
  { name: "Kibana", icon: "code", color: "accent-lime", category: TechCategory.ANALYTICS },
  { name: "Google Analytics", icon: "code", color: "accent-lime", category: TechCategory.ANALYTICS },
  
  // ********* Project Management ********* //
  { name: "Jira", icon: "code", color: "accent-lime", category: TechCategory.PROJECT },
  { name: "Confluence", icon: "code", color: "accent-lime", category: TechCategory.PROJECT },
  { name: "Notion", icon: "code", color: "accent-lime", category: TechCategory.PROJECT },
  { name: "Slack", icon: "code", color: "accent-lime", category: TechCategory.PROJECT },

  // ********* Development ********* //
  { name: "Android\nwith Kotlin", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "Flutter\nwith Dart", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "React\nwith TS", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "Spring Boot\nwith Java", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "MVVM Architecture", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "Git Flow", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "Github", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "Firebase", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
  { name: "Open API", icon: "code", color: "accent-lime", category: TechCategory.DEVELOPMENT },
];
