# Resource Naming (https://restfulapi.net/resource-naming)
RESTful API를 설계할 때, 자원을 나타내는 URI의 이름을 지정하는 것이 중요함. 이를 통해 클라이언트 측에서 요청하는 자원을 쉽게 이해하고, 유지보수 및 확장이 쉬운 API를 만들 수 있다.

- URI는 자원을 나타내는데 중점을 두어야 한다.
- HTTP Method는 CRUD 작업을 수행하는데 사용한다.
- URI는 동사보다는 명사를 사용한다.
- URI는 소문자로 작성하며, 하이픈(-)으로 단어를 구분한다.
    - URI에서 단어를 구분하는 방법으로는 하이픈(-)을 사용하는 것이 좋다. 하이픈은 밑줄(_)과 달리 URI에서 예약된 문자가 아니므로, URI에서 사용하기 적합한 문자다. 또한 하이픈을 사용하면 URI가 더 읽기 쉽고 이해하기 쉬워지며, 검색 엔진 최적화(SEO)에도 좋은 영향을 미친다.
    - 그렇다고 해서 항상 하이픈을 사용해야 하는 것은 아니다. 가독성을 높이기 위해서는 단어를 구분하는 방식이 중요하다. URI에서 사용되는 단어가 길어지면 가독성이 떨어지므로, 가능한 짧고 간결한 단어를 사용하는 것이 좋다.


> 예를 들어, /api/books는 모든 책 자원을 나타내는 URI이다. HTTP Method를 사용하여 CRUD 작업을 수행한다. GET /api/books는 모든 책을 가져오고, POST /api/books는 새로운 책을 추가한다.

---

## Routing in Angular

Angular API Router는 라우트 테이블을 사용하여 URL과 컴포넌트를 매핑한다. 라우트 테이블은 Angular 모듈에 정의된다. 라우트는 path와 component로 구성되며, path는 URL 패턴을, component는 해당 패턴에 대응하는 컴포넌트를 나타낸다.
```
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
```

위 예제에서, / 경로는 HomeComponent와 매핑되고, /books 경로는 BookListComponent와 매핑된다. /books/:id 경로는 BookDetailComponent와 매핑되며, :id는 동적으로 변하는 부분을 나타낸다. 마지막으로 **는 모든 경로와 매핑되는 PageNotFoundComponent를 나타낸다.