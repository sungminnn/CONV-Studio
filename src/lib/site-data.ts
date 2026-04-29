export const navigationItems = [
  { label: "홈", href: "/" },
  {
    label: "서비스",
    href: "#services",
    children: [
      { label: "비즈니스 웹사이트", href: "#services" },
      { label: "캠페인 웹사이트", href: "#services" },
    ],
  },
  { label: "포트폴리오", href: "#results" },
  { label: "가격안내", href: "#pricing" },
  { label: "문의하기", href: "#inquiry-form" },
] as const;

export const heroMetrics = [
  "SEO 최적화 구조",
  "모바일 우선 설계",
  "카카오톡 상담 연결",
  "빠른 제작 진행",
] as const;

export const problemCards = [
  {
    title: "홈페이지로 문의가 들어오지 않습니다",
    description:
      "유입은 있는데 방문자가 왜 연락해야 하는지, 어디서 문의해야 하는지가 명확하지 않습니다.",
  },
  {
    title: "낡은 디자인은 신뢰를 떨어뜨립니다",
    description:
      "사이트가 오래돼 보이거나 정리가 안 되어 보이면, 서비스 자체의 완성도까지 낮게 인식됩니다.",
  },
  {
    title: "방문자는 행동 없이 이탈합니다",
    description:
      "메시지, 신뢰 요소, CTA 배치가 약하면 홈페이지는 소개만 하고 끝나는 페이지가 됩니다.",
  },
] as const;

export const methodSteps = [
  {
    step: "01",
    title: "비즈니스 분석",
    description:
      "타겟 고객과 핵심 전환 행동을 먼저 정리합니다.",
  },
  {
    step: "02",
    title: "전략 중심 디자인",
    description:
      "메시지 구조와 CTA 우선순위를 먼저 설계합니다.",
  },
  {
    step: "03",
    title: "전환 중심 개발",
    description:
      "반응형 페이지와 문의 동선을 실제로 작동하게 구현합니다.",
  },
  {
    step: "04",
    title: "최적화",
    description:
      "SEO와 콘텐츠 흐름을 다듬어 전환율을 높입니다.",
  },
] as const;

export const serviceColumns = [
  {
    audience: "소상공인 / 지역 비즈니스",
    title: "유입을 실제 고객 문의로 바꾸는 홈페이지",
    description:
      "전화, 예약, 상담, 카카오톡 문의를 늘리고 싶은 사업자를 위한 전환형 웹사이트입니다.",
    bullets: [
      "로컬 SEO 구조",
      "카카오톡 상담 연결",
      "예약 / 문의 흐름 설계",
      "신뢰 중심 서비스 소개",
    ],
    ctaLabel: "비즈니스 사이트 상담",
  },
  {
    audience: "정치 캠페인 / 후보 페이지",
    title: "신뢰를 만들고 빠르게 배포하는 캠페인 랜딩",
    description:
      "짧은 일정 안에 후보 이미지와 메시지를 신뢰감 있게 보여줘야 하는 캠프를 위한 랜딩 페이지입니다.",
    bullets: [
      "후보 신뢰형 디자인",
      "모바일 우선 정보 구조",
      "QR / SNS 공유 대응",
      "3~5일 빠른 제작",
    ],
    ctaLabel: "캠페인 사이트 상담",
  },
] as const;

export const trustPoints = [
  "보기 좋은 홈페이지보다 문의가 생기는 구조를 우선합니다",
  "빠른 커뮤니케이션과 명확한 의사결정 흐름으로 진행합니다",
  "모든 섹션이 CTA로 자연스럽게 이어지도록 설계합니다",
  "Core Web Vitals를 고려한 성능 중심 구현을 지향합니다",
] as const;

export const resultCards = [
  {
    category: "지역 서비스 업종",
    challenge: "유입은 있었지만 문의 전환이 낮았음",
    change: "신뢰 요소, CTA 노출, 모바일 문의 동선을 다시 설계해 전환 흐름을 정리함",
    metric: "문의 30% 증가",
  },
  {
    category: "상담형 업종",
    challenge: "방문자가 연락 수단을 보기 전에 이탈하고 있었음",
    change: "콘텐츠 구조를 단순화하고 카카오톡 CTA를 핵심 의사결정 구간에 배치함",
    metric: "직접 상담 유입 증가",
  },
  {
    category: "캠페인 런칭",
    challenge: "짧은 일정 안에 후보 신뢰감과 메시지를 동시에 보여줘야 했음",
    change: "QR과 SNS 확산에 맞춘 모바일 우선 랜딩 구조로 빠르게 제작함",
    metric: "5일 내 오픈",
  },
] as const;

export const pricingTiers = [
  {
    name: "스타터",
    tagline: "빠르게 시작하는 원페이지 랜딩",
    price: "상담 후 견적",
    features: [
      "원페이지 랜딩 구조",
      "모바일 반응형 제작",
      "문의 폼 기본 세팅",
      "기본 SEO 구조 적용",
    ],
  },
  {
    name: "스탠다드",
    tagline: "전환 흐름을 강화한 대표 패키지",
    price: "가장 많이 선택",
    features: [
      "다중 섹션 랜딩 페이지",
      "카카오톡 상담 연결",
      "문의가 발생하도록 설계된 문구 구성",
      "광고 및 방문자 분석이 가능한 구조 설계",
    ],
    featured: true,
  },
  {
    name: "프리미엄",
    tagline: "맞춤 퍼널과 우선 제작이 필요한 경우",
    price: "범위별 제안",
    features: [
      "고도화 전환 구조 설계",
      "비즈니스 / 캠페인 맞춤 흐름",
      "우선 제작 일정 반영",
      "확장형 콘텐츠 섹션 구성",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "제작 기간은 얼마나 걸리나요?",
    answer:
      "일반적인 랜딩 페이지는 1~2주 기준으로 진행합니다. 캠페인 페이지는 범위에 따라 더 빠른 우선 제작도 가능합니다.",
  },
  {
    question: "카카오톡 상담과 문의 폼 연결이 가능한가요?",
    answer:
      "가능합니다. 카카오톡 직접 상담, 문의 폼, 예약 유도, 캠페인용 연락 동선까지 목적에 맞게 연결할 수 있습니다.",
  },
  {
    question: "모바일 최적화도 포함되나요?",
    answer:
      "포함됩니다. 모바일을 우선 기준으로 보고 CTA 위치, 버튼 크기, 콘텐츠 밀도를 먼저 설계합니다.",
  },
  {
    question: "나중에 확장형 웹사이트로 키울 수 있나요?",
    answer:
      "가능합니다. 이후 서비스 소개 페이지, 블로그/SEO, 포트폴리오, 추가 문의 흐름 등으로 확장할 수 있게 구조를 잡을 수 있습니다.",
  },
] as const;

export const ctaLinks = {
  consultation: "https://open.kakao.com/",
  inquiry: "#inquiry-form",
} as const;
