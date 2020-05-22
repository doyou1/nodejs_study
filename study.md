##STUDY 정리하자 정리!

```javascript
bodyParser.urlencoded({
    //중첩된 객체표현을 허용할지 말지를 정하는 것
    //객체 안에 객체를 파싱할 수 있게 하려면 true
    extended : true
});
```

*뷰캐시<br>
    >사용자에게 요청이 올 때마다 파일 시스템에서 00.jade 또는 00.ejs 파일을 읽어들이는 것은 굉장히 귀찮은 일입니다.
    따라서 파일을 읽어 메모리에 한 번만 올려두고 제공하면 편한데, 이를 수행하는 것을 뷰 캐시라고 합니다.

    >뷰 캐시를 사용하면 파일을 한 번만 읽어 들이므로, 두 번째 이후의 요청이 굉장히 빨라지며 입출력 부하도 없어집니다.
    하지만 파일을 한 번만 읽어 들이면 파일을 수정해도 해당 수정 사항이 반영되지 않습니다. 그래서 개발하는 동안에는 사용하지 않는 것이 좋습니다.

Development 환경과 Production 환경의 차이

            development모드         production모드
오류 출력   출력                     출력안함
view cache  사용 안함                사용
디버그 모드 설정하면 사용             사용 불가

export NODE_ENV = development
SET NODE_ENV = production

app.settings.env = 'production';