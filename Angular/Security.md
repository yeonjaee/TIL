# 보안

### XSS 방어 (크로스 사이트 스크립트)

**크로스-사이트 스크립트 공격(cross-site scripting, XSS)** 은 공격자가 웹 페이지 안에 악성 코드를 주입해서 실행하는 것을 의미한다.
이런 공격은 웹에서 가장 흔한 공격 방식 중 하나인데, 보통 로그인 데이터와 같은 사용자의 정보를 탈취하거나 비정상적인 동작을 실행하는 방식으로 동작한다.

XSS 공격을 방어하려면 DOM(Document Object Model)에 악성 코드가 추가되는 것을 막아야 한다.
공격자가 DOM 안에 `<script>` 태그를 심을 수 있다면, 이 태그를 통해 악성 코드를 실행할 수 있다.
하지만 XSS 공격이 꼭 `<script>` 태그에만 한정된 것은 아니다.
`<img alt="" onerror="...">`나 `<a href="javascript:...">`와 같은 코드도 XSS 공격에 활용될 수 있다.
그래서 공격자가 DOM에 데이터를 추가할 수 있다면 보안 취약점이 존재한다고 볼 수 있다.


### 그래서?
프레임워크 계층에서 XSS 공격을 방어하기 위해 기본적으로 Angular는 모든 값을 신뢰할 수 없는 것으로 간주한다.

그래서 템플릿 DOM에 추가되는 값이나 프로퍼티, 어트리뷰트, 스타일, 클래스 바인딩, 문자열 바인딩은 모두 Angular가 안전성을 검사하고 보안에 위배되는 값을 제거함.

렌더링할 때 사용되는 값과 다르게, Angular 템플릿은 모든 값을 신뢰할 수 있으며, 실행할 수 있는 코드로 간주함.

### 안전한 값으로 간주하기
URL을 사용해서 `<iframe>`을 표시하거나 URL을 조합해서 활용하는 경우와 같이
때로는 외부에서 실행할 수 있는 코드를 가져와서 사용해야하는 경우가 있다.

> 이런 경우에는 이 코드가 정상적으로 생성되었고, 안전한 것으로 확인되었다고 처리해서 Angular가 자동으로 실행하는 안전성 검사를 우회해야 한다.
- DomSanitizer 를 의존성으로 주입하자.
  (bypassSecurityTrustHtml,bypassSecurityTrustScript,bypassSecurityTrustStyle,bypassSecurityTrustUrl,bypassSecurityTrustResourceUrl)