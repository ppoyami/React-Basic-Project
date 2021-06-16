# 컴포넌트가 사라질 때, 애니메이션 적용하기 - dialog

## Topic

- styled-components의 keyframes 이용하기
- `useEffect` 사용 - 상태 변화를 감지
- 언마운트 지연시키기 (애니메이션 시간 만큼)

---

## Features

1. sumbit 버튼을 클릭하면 다이얼로그가 상단에서 나온다.
2. 체크 표시를 누르면 사라진다.
3. 기다리면, progress bar가 진행되며 자동으로 사라진다.

---

## code snippets

1. styled-components 로 애니메이션 정의하기
2. 속성에 따라 조건부 css(애니메이션) 적용하기
3. 컴포넌트 내부 상태 값으로 언마운트를 지연시키기
