# Stop Watch

## Topic

1. useRef를 이용하여 timer id 관리하기
2. 시간 계산하기
3. css module, classnames를 사용해보기

---

## Features

1. 00:00:00 형식으로 시간 표시를 합니다. (mm,ss, 100ms, 10ms)
2. 시작은 start 버튼 활성화, reset 버튼 비활성화로 시작합니다.
3. start 버튼을 누르면 1ms 만큼 시간을 증가시킵니다x.
   2-1. start 버튼을 누르면, Pause가 활성화 됩니다.
4. Pause를 누르면, Resume과 Reset이 활성화 됩니다.
5. Resume 버튼을 누르면 다시 시작합니다. -> 버튼 상태는 start 눌렀을 때로 돌아갑니다.
6. Reset 버튼을 누르면 시간표시가 00:00:00이 됩니다, 버튼 상태는 처음으로 돌아갑니다.

---

## code snippets

1. useRef로 타이머 변수를 관리하기
   - `let timerId;` 였다면, 함수 호출마다 undefined 가 될 것이다.

```js
function App() {
   ... 생략
   const timerId = useRef(null);

   useEffect(() => {
   if (running) {
      // setInterval 등록,
      timerId.current = setInterval(() => {
         setMilliSeconds(prev => prev + 10);
      }, 10);
   }
   if (initial) {
      // setInterval 해제
      clearInterval(timerId.current);
      // milliSeconds 초기화
      setMilliSeconds(0);
   }
   if (pause) {
      // setInterval 해제
      clearInterval(timerId.current);
   }
   }, [initial, running, pause]);
```
