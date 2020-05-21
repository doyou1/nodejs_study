"REST 규정이 뭔가요?"<br>

REST 규정은 일관된 웹 서비스 인터페이스 설계를 위해 만들어졌습니다.<br>

RESTful 웹 서비스의 구조<br>

    경로    /collection                 /collection/:id
    GET     컬렉션 조회                 컬렉션의 특정 요소 조회
    POST    새로운 데이터 추가          사용하지 않음
    PUT     컬렉션 전체 한꺼번에 변경   컬력센의 특정 요소 수정
    DELETE  컬렉션 전체 삭제            컬렉션의 특정 요소 삭제

-- Postman 확장 프로그램 이용해 구현