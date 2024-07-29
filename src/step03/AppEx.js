import './App.css';
import { useState, useEffect } from "react";


// 1. useState 사용하여 boolean값 담을 변수 생성.
// 2. useState 사용하여 count 값 담을 변수 생성.
// 3. return () 안에 상태 변수 담은 값 화면에 출력 해보자.
//    삼항연산자를 사용해서.
// 4. setInterval 함수를 사용해서 loadCounter의 숫자를 증가시키자.
//    1) useEffect 사용을 하기.
//    2) useEffect의 두번째 인자는 loadCounter를 주어서 loadCounter가 증가하면
//    실행이 되도록 만들자.
//    3) setInterval은 loadTimer라는 변수로 선언하자.


function AppEx() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(() => {

    // setInterval 종료문을 만들어줘야한다. return으로 clearInterval 시키자.
    return () => {}
  }, [loadCounter]);

  return (
    <div>
      {isLoading ? `Loading... ${loadCounter}` : `Loaded`}
    </div>
  );
}

export default AppEx;