8-2 : express 모듈을 사용한 서버 생성 및 실행<br>
8-5 : send()메서드 사용<br>
8-6 : 404코드 전달<br>
8-7 : User-Agent 속성 추출<br>
8-8 : User-Agent 속성에 따른 응답<br>
8-9 : query 속성을 사용한 요청 매개변수 추출<br>
8-11 : 미들웨어를 사용한 속성 추가<br>
8-13 : 라우팅 매개변수 추출<br>
8-14 : 전체 선택자<br>
8-15 : router 모듈화<br>
routerA,routerB,routerC, index.js : router 모듈화 활용 예<br>
app : static 미델웨어를 사용한 이미제제공<br>
8-19 : morgan 미들웨어<br>
8-20 : morgan 미들웨어<br>
8-22 : cookie-parser 미들웨어를 사용한 쿠키 추출<br>
login.html,8-24 : body-parser를 이용한 기본 로그인 구현<br>
HTMLPage.html, 8-27 : connect-multiparty 미들웨어

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

<hr>

express 모듈과 함게 사용할 수 있는 미들웨어<br>

    router : 페이지 라우트를 수행함
    static : 특정 폴더를 서버의 루트 폴더에 올림
    morgan : 로그 정보를 출력함
    cookie parser : 쿠키를 분해함
    body parser : POST 요청 매개변수를 추출함
    connect-multiparty : POST 요청 매개변수를 추출함
    express-session : 세션 처리를 수행함
    csurf : CSRF 보안을 수행함
    error handler : 예외 처리를 수행함
    limit : POST 요청의 데이터를 제한함
    vhost : 가상 호스트를 설정함

<hr>

app 객체의 메서드<br>

    get(path, callback[, callback ...]) : GET 요청 발생시 이벤트 리스너
    post(path, callback[, callback ...]) : POST 요청 발생시 이벤트 리스너
    put(path, callback[, callback ...]) : PUT 요청 발생시 이벤트 리스너
    delete(path, callback[, callback ...]) : DELETE 요청 발생시 이벤트 리스너
    all(path, callback[, callback ...]) : 모든 요청이 발생시 이벤트 리스너


<hr>

params : /:id 처럼 ':'기호를 사용해 지정된 라우팅 매개변수
query : ?name=A와 같은 요청 매개변수

<hr>

morgan 미들웨어의 토큰<br>

    :req[header] : 요청 헤더를 나타냄
    :res[header] : 응답 헤더를 나타냄
    :http-version : HTTP 버전을 나타냄
    :response-time : 응답 시간을 나타냄
    :remote-addr : 원격 주소를 나타냄
    :date[format] : 요청 시간을 나타냄
    :method : 요청 방식을 나타냄
    :url : 요청 url을 나타냄
    :referrer : 이전 url을 나타냄
    :User-Agent : 사용자 에이전트를 나타냄
    :status : 상태 코드를 나타냄

<hr>

cookie() 메서드의 옵션 속성<br>

    httpOnly : 클라이언트의 쿠키 접근 권한을 지정함
    secure : secure 속성을 지정함, document.cookie를 이용해 쿠키에 접속하는 것을 막는 옵션
    expires : expires 속성을 지정함, 객체의 생명주기과 세부 형태 설정
    maxAge : 상대적으로 expires를 지정함
    path : path 속성을 지정함

<hr>

body-parser 미들웨어는 'application/x-www-form-urlencoded'라는 인코딩 방식만 지원함.
이외의 인코딩 방식은 multiparty

<hr>
특정한 페이지 라우팅에만 미들웨어 적용<br>
<code>
    app.post('/',multipart, function(request,response){
        /* 생략 */
    });
    /*
    '/'경로에 진입했을 때, multiparty 미들웨어가 먼저 수행되고, 뒤따라 사용자가 직접 만든 함수가 호출됨
    */
</code>
일반적으로 morgan, cookie-parser, body-parser 미들웨어 등은 거의 모든 페이지에서 활용하게 됩니다. 따라서 전역적으로 적용하는 경우가 많은데 파일 업로드 기능은 일부 페이지에서만 수행될 가능성이 높습니다. 이렇게 일부 페이지에서만 수행될 가능성이 높은 기능은 해당 페이지 라우팅에만 적용하는 것이 좋습니다.

특정 페이지 라우팅에만 미들웨어를 적용하고 싶을 때는 위의 코드와 같이 진행할 수 있습니다<br>
