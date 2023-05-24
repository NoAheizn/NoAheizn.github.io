# Docusarus 사용 시작
## 시작 전
내가 사용하는 대부분의 코드는 [여기](https://github.com/rainbow-flavor/roxy-blog) 에서 참고하고 있다.
- **Thanks for [Irostub](https://github.com/irostub), [Hank](https://github.com/hankbae93)**

참고 자료 : [Docusaurus](https://docusaurus.io/ko/docs#fast-track)

## 1. Node.js 설치 및 사이트 제작
먼저 [Node.js](https://nodejs.org/ko/download) 를 설치하고 `Docusaurus`사이트를 만든다.

```bash
npx create-docusarus@latest my-website classic
```
- `my-website`는 폴더를 말하는것이니 이름을 원하는대로 바꾸면된다.
- `classic`은 템플릿을 말하는것이며 따로 템플릿을 설정할수 있다.

```bash
cd my-website
npx docusaurus start
```
http://localhost:3000 에서 자신의 홈페이지를 확인할 수 있다!

