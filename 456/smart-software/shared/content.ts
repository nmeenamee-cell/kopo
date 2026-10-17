export type Story = { id: string; category: string; title: string; body: string; date: string; image: string; };
export const stories: Story[] = [
 {id:'project',category:'프로젝트',title:'아이디어가 서비스가 되는 순간',body:'팀으로 문제를 찾고, 코드를 작성하고, 사용자에게 전달하기까지. 프로젝트 전시를 소개하는 예시 콘텐츠입니다. 실제 학생 작품과 인터뷰는 학과 확인 후 등록할 수 있습니다.',date:'STUDENT PROJECT',image:'photo-1516321318423-f06f85e504b3'},
 {id:'class',category:'학과소식',title:'함께 배우고, 더 멀리 성장하다',body:'혼자 풀기 어려웠던 문제가 동료와의 대화 속에서 풀리는 경험. 수업과 협업 문화를 소개하는 예시 콘텐츠입니다. 실제 행사 및 수업 일정은 공식 학과 게시판에서 확인하세요.',date:'LEARNING TOGETHER',image:'photo-1522071820081-009f0129c71c'},
 {id:'campus',category:'캠퍼스',title:'우리의 다음이 시작되는 곳',body:'공부와 휴식, 새로운 만남이 이어지는 캠퍼스 라이프를 소개합니다. 이 사진은 분위기 연출용 이미지이며 실제 대전캠퍼스 사진은 아닙니다.',date:'LIFE ON CAMPUS',image:'photo-1523050854058-8df90110c9f1'}
];
export const tracks = [
 {name:'웹 · 앱 개발',en:'Web & App',title:'직접 만드는 첫 번째 서비스',description:'화면에서 서버까지, 하나의 아이디어를 작동하는 서비스로 연결해 보세요.',skills:['프로그래밍 기초','웹 인터페이스','서버와 데이터베이스','팀 프로젝트'],code:'const future = await you.build();'},
 {name:'AI · 데이터',en:'AI & Data',title:'데이터에서 새로운 가능성을',description:'데이터를 이해하고 AI를 활용해 일상의 문제를 해결하는 경험을 시작하세요.',skills:['Python 기초','데이터 탐색','AI 활용','서비스 프로토타입'],code:'model.learn(your.curiosity);'},
 {name:'소프트웨어 실무',en:'Software Practice',title:'함께 만들 때 더 커지는 실력',description:'코드 리뷰와 협업, 테스트와 배포까지. 개발자의 일하는 방식을 경험하세요.',skills:['Git 협업','문제 해결','품질과 테스트','포트폴리오'],code:'team.commit("a better tomorrow");'}
];
