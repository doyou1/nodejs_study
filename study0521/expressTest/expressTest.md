8-2 : express 모듈을 사용한 서버 생성 및 실행<br>
8-5 : send()메서드 사용<br>
8-6 : 404코드 전달<br>
8-7 : User-Agent 속성 추출<br>
8-8 : User-Agent 속성에 따른 응답<br>
8-9 : query 속성을 사용한 요청 매개변수 추출<br>
8-11 : 미들웨어를 사용한 속성 추가<br>

response 객체의 속성 및 메서드<br>

    response.send([body]) : 매개변수의 자료형에 따라 적절한 형태로 응답
    response.json([body]) : JSON 형태로 응답함
    response.jsonp([body]) : JSONP 형태로 응답함
    response.redirect([status,] path) : 웹 페이지 경로를 강제로 이동함
    params : 라우팅 매개변수를 추출함
    query : 요청 매개변수를 추출함
    headers : 요청 헤더를 추출함
    header() : 요청 헤더의 속성을 지정 또는 추출함
    accepts(type) : 요청 헤더의 Accept 속성을 확인함
    is(type) : 요청헤더의 Content-Type 속성을 확인함