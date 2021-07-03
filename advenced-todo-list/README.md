# advenced todo app

## Topic

1. context api + useReducer, redux 사용하기
2. 좀 더 복잡한 상태 값을 사용하기
3. 프레젠테이션, 컨테이너 구분하기

---

## Features

1. 컬렉션 마다 할 일을 추가 할 수 있습니다.

---

## code snippets

1. collections={collections} 보다 간략하게 속성 추가하기

```jsx
const props = {
  collections,
  goHome,
  onCreateCollection,
  getCount,
};

return <DashBoard {...props} />;
```
