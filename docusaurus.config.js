// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github'); // 라이트모드 코드 하이라이트 테마
const darkCodeTheme = require('prism-react-renderer/themes/dracula'); // 다크모드 코드 하이라이트 테마

/** @type {import('@docusaurus/types').Config} */ 
const config = {
  title: 'NoAheizn', // 블로그 제목
  tagline: 'Izuna & NoA Blog & Developer(Programmer) story', // 블로그 한줄 설명
  favicon: 'img/ipixel.ico', // 블로그 아이콘
  url: 'https://noaheizn.github.io', // 사용할 블로그 도메인 주소 (개인도메인 혹은 깃허브 홈페이지 링크)
  baseUrl: '/Nah-blog/', // 위의 링크에서 뒤에 붙는 주소 '/' 로 놔두면 위의 링크 그대로 블로그가 작동함.
  organizationName: 'noaheizn', // 깃허브 조직이름 및 사용자 이름
  projectName: 'Nah-blog', // 깃허브 레포지토리 이름
  onBrokenLinks: 'throw', // 링크가 깨지면 에러를 던짐 (전체 작동불가)
  onBrokenMarkdownLinks: 'warn', // 마크다운 링크가 깨지면 경고를 던짐 (일부 작동불가)
  trailingSlash: false, // 주소 끝에 '/'를 붙일것인지 여부
  i18n: {
    defaultLocale: 'ko', // 기본 언어
    locales: ['ko'], // 부가적으로 지원할 언어
  },
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'], // 블로그 기본 테마
  plugins: [
    [
      '@docusaurus/plugin-content-blog', // 각각의 블로그를 생성하기 위한 플러그인
      {
        id: 'izuna-blog', // 블로그 고유 아이디
        routeBasePath: 'izuna', // 블로그 주소 (위의 baseUrl 뒤에 붙는 주소)
        path: './izuna', // 블로그 내용이 있는 폴더
        showReadingTime: true, // 포스트 읽는 시간 표시 여부
        blogSidebarCount: 'ALL', // 사이드바에 표시할 포스트 개수 (ALL 은 전체)
        blogSidebarTitle: '포스트 목록', // 사이드바 상단에 표시할 제목
        blogPostComponent: '@theme/BlogPostPage', // 포스트를 표시할 컴포넌트 테마
        blogTitle: 'Izuna\'s Blog', // 블로그 제목
        feedOptions: { // 피드 옵션
          language: 'kr', // 언어
          type: 'all', // 사용할 피드 타입 (rss, atom, json)
          copyright: // 저작권
            `Copyright © ${new Date().getFullYear()} NoAheizn, written by Izuna`,
        },
      }
    ],
    [
      '@docusaurus/plugin-content-blog', // 각각의 블로그를 생성하기 위한 플러그인
      {
        id: 'noa-blog', // 블로그 고유 아이디
        routeBasePath: 'noa', // 블로그 주소 (위의 baseUrl 뒤에 붙는 주소)
        path: './noa', // 블로그 내용이 있는 폴더
        showReadingTime: true, // 포스트 읽는 시간 표시 여부
        blogSidebarCount: 'ALL', // 사이드바에 표시할 포스트 개수 (ALL 은 전체)
        blogSidebarTitle: '포스트 목록', // 사이드바 상단에 표시할 제목
        blogPostComponent: '@theme/BlogPostPage', // 포스트를 표시할 컴포넌트 테마
        blogTitle: 'NoA\'s Blog', // 블로그 제목
        feedOptions: {
          language: 'kr', // 언어
          type: 'all', // 사용할 피드 타입 (rss, atom, json)
          copyright: // 저작권
            `Copyright © ${new Date().getFullYear()} NoAheizn, written by Izuna`,
        },
      }
    ],
    [
      '@docusaurus/plugin-content-docs', // 각각의 문서를 생성하기 위한 플러그인
      {
        id: 'idoc', // 문서 고유 아이디
        path: './idoc', // 문서 내용이 있는 폴더
        routeBasePath: 'idoc', // 문서 주소 (위의 baseUrl 뒤에 붙는 주소)
        sidebarPath: require.resolve('./sidebars.js'), // 사이드바 설정 파일
        docItemComponent: '@theme/DocItem', // 문서를 표시할 컴포넌트 테마
        docLayoutComponent: '@theme/DocPage', // 문서 레이아웃을 표시할 컴포넌트 테마
        showLastUpdateAuthor: true, // 마지막 업데이트한 사람 표시 여부
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시 여부
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic', // 기본 프리셋
      {
        theme: { customCss: require.resolve('./src/css/custom.css') },
        docs: {
          id: 'docs',
          path: 'docs',
          routeBasePath: 'docs',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      },
    ],
  ],

  themeConfig: // 테마 옵션
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // 기본 다크모드 설정 (필수!)
        disableSwitch: false, // 라이트모드 , 다크모드 토글 스위치 표시 여부
        respectPrefersColorScheme: true, // 시스템 설정에 따라 자동으로 다크모드 설정 여부
      },
      announcementBar: { // 최상단 공지사항 바
        id: 'announcementBar-2', // 고유 아이디
        content: 'Thanks for visiting my blog!', // 표시할 내용
        isCloseable: false, // 닫기 버튼 표시 여부
        textColor: '#fff', // 텍스트 색상
        backgroundColor: '#000', // 배경 색상
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // 링크 임베드에 표시할 이미지
      navbar: { // 네비게이션 바
        title: 'Nah', // 네비게이션 바 제목
        hideOnScroll: true, // 스크롤 시 네비게이션 바 숨김 여부
        logo: { // 네비게이션 바 로고
          alt: 'Nah Logo', // src가 표시 안될때 대체 텍스트
          src: 'img/ipixel.png', // 로고 이미지
          srcDark: 'img/ipixel.png', // 다크모드일 때 로고 이미지
        },
        items: [ // 네비게이션 바 아이템 목록
          {
            type: 'docSidebar', // 문서 사이드바
            sidebarId: 'idoc', // 문서 사이드바 아이디
            label: 'Idoc', // 네비게이션 바에 표시할 라벨
            docsPluginId: 'idoc', // 문서 플러그인 아이디
            position: 'left', // 네비게이션 바 위치
          },
          {
            type: 'docSidebar', // 문서 사이드바
            sidebarId: 'docs', // 문서 사이드바 아이디
            label: 'Docs', // 네비게이션 바에 표시할 라벨
            docsPluginId: 'docs', // 문서 플러그인 아이디
            position: 'left', // 네비게이션 바 위치
          },
          {
            label: 'Blogs', position: 'left', type: 'dropdown', items: [ // 마우스를 갖다 대거나 클릭하면 블로그 목록이 메뉴 형식으로 표시되는 아이템
              { to: '/izuna', label: 'Izuna\'s Blog' }, // 클릭하면 '/izuna'로 이동하고, 표시되는 이름은 'Izuna's Blog'
              { to: '/noa', label: 'NoA\'s Blog' }, // 클릭하면 '/noa'로 이동하고, 표시되는 이름은 'NoA's Blog'
            ]
          },
          {
            href: 'https://github.com/NoAheizn/Nah-blog/', // 하이퍼링크
            label: 'GitHub', // 표시되는 이름
            position: 'right', // 네비게이션 바 위치
          },
        ],
      },
      footer: {
        style: 'dark', // 푸터 스타일 (light, dark)
        copyright: `Copyright © ${new Date().getFullYear()} NoAheizn, written by Izuna`, // 저작권
      },
      prism: {
        theme: lightCodeTheme, // 코드 하이라이팅 테마
        darkTheme: darkCodeTheme, // 다크모드일 때 코드 하이라이팅 테마
      },
    }),
};

module.exports = config;
