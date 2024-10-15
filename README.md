# 프론트앤드 개발자 사전과제

- todolist 만들기
- 과제 제출 이메일: eddy@myfair.com

<br />

# 프로젝트 소개

- 개발 인원 : 1인 (이연성)
- 개발 기간 : 24.10.08(화) ~ 15(화)

<br />

[구현한 화면]

<br />

<p align="center">
<img width="90%"  alt="image" src="https://github.com/user-attachments/assets/829d09e9-649d-405e-9d18-b1a9b189be38">
</p>

<br />

# 프로젝트 설치 및 실행 방법

<br />

```typescript
// 패키지 설치
yarn install

// test code 실행
yarn test

// local 실행
yarn dev
```

<br />

# 사용한 기술 스택

```
- nextjs (14vr.) , typescript
- 상태 관리 : recoil
- 스타일 : emotion
- 기타 라이브러리 : jest (테스트 코드)
```

<br />

# 프로젝트 구조

```
├── package.json
├── public
│   └── images
│       ├── ic-check-icon.svg
│       └── ic-close-icon.svg
├── src
│   ├── app
│   │   ├── layout.recoil.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── pages
│   │       └── UserTodoList
│   │           ├── TodoUserListPage.spec.tsx
│   │           ├── TodoUserListPage.tsx
│   │           └── components
│   │               ├── TabMenu.tsx
│   │               ├── TodoInput.tsx
│   │               ├── TodoItem.tsx
│   │               ├── TodoList.tsx
│   │               └── __test__
│   │                   ├── TabMenu.spec.tsx
│   │                   ├── TodoInput.spec.tsx
│   │                   ├── TodoItem.spec.tsx
│   │                   └── TodoList.spec.tsx
│   ├── recoil
│   │   └── todo
│   │       └── atoms.ts
│   ├── styles
│   │   └── GlobalStyle.tsx
│   └── types
│       ├── recoilTypes.ts
│       └── styleTypes.ts
├── tsconfig.json
└── yarn.lock
```
