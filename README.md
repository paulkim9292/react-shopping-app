# react-shopping-app

React JS로 만든 쇼핑몰 웹사이트입니다.

https://paulkim9292.github.io/react-shopping-app/

P.S. 처음부터 끝까지 제 힘으로 코드를 짠 부족하지만 정성을 많이 들인 소중한 프로젝트입니다.

## 데스크탑

## 모바일

## 주요 기능

## 개발환경

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">

## 사용한 기술

- react-router를 이용한 라우팅
- useState, useEffect 등 기본적인 react hook
- Redux를 이용한 상태관리(여러 컴포넌트에서 props없이 공동 상태 사용하기)
- AJAX를 이용하여 REST API를 GET 하고
- local storage를 이용한 장바구니 상태 저장
- module.css를 이용한 불필요한 디렉토리에 스타일 영향을 제한

## Shopping Cart

이 프로젝트를 진행하며, 특히 장바구니 기능을 만들면서 여러 시행착오와 배운점들이 많이 따로 이렇게 섹션을 만들어 정리하려고 합니다.

## 구조

```
SINSA
├─public
│ ├─index.html
├─src
│ ├─components                  # 컴포넌트들과 관련 module.css 파일들
│ │     ├─Cart.js               # 장바구니
│ │     ├─Cart.module.css
│ │     ├─CategorySelect.js     # 카테고리 드롭다운 메뉴
│ │     ├─CategorySelect.module.css
│ │     ├─Footer.js             # footer
│ │     ├─Footer.module.css
│ │     ├─Item.js               # 상품 컴포넌트
│ │     ├─Item.module.js
│ │     ├─Navbar.js             # navbar
│ │     ├─Navbar.module.css
│ │     ├─ScrollToTop.js        # 페이지 맨위로 가기 버튼 기능
│ ├─img
│ │     ├─home.jpg
│ ├─routes                      # 경로(route) 컴포넌트들과 과련 module.css 파일들
│ │     ├─About.js
│ │     ├─About.module.css
│ │     ├─All.js
│ │     ├─All.module.css
│ │     ├─Category.js           # 스타일이 All.js와 흡사. All.module.css를 import하여 사용.
│ │     ├─Detail.js
│ │     ├─Detail.module.css
│ │     ├─Home.js
│ │     ├─Home.module.css
│ ├─store                       # Redux 저장소
│ │     ├─store.js
│ ├─App.css
│ ├─App.js
│ ├─index.js
├─.gitignore
├─README.md
├─package-lock.json
├─package.json
```
