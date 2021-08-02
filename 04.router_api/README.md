# API 연동 실습 - IEX API

## Topic

- page routing
- url params 사용하기
- url query 사용하기
- qs 라이브러리
- Switch 컴포넌트로 pageNotFound
- sub routing 으로 탭 컴포넌트 만들어보기

---

## Features

1. 검색 -> 결과 리스트(useAsync hook)
2. 결과 리스트 아이템을 클릭 -> 세부 정보로 페이지 이동(url params)
3. 세부 정보에는 탭 메뉴가 있음 (sub routing)(query)

   - Balance Sheet api
   - 분기별, 연도별 탭 메뉴
   - 각 탭 메뉴 버튼에서 period, last를 url query로 보냅니다.

4. 잘못된 경로일시 page not found 컴포넌트를 보여줍니다.
5. 홈 링크(history.push('/'))

---
