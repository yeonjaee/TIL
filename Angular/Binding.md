컴포넌트는 이 컴포넌트가 어떻게 렌더링될지 정의하기 위해 HTML 템플릿이 존재한다.
- 인라인으로 정의하거나 별도 파일로 작성해서 불러올 수 있음.

### 문자열을 동적으로 렌더링
- 템플릿에 이중 중괄호(`{{, }}`)가 사용
> ```html
> <p>{{ message }}</p>
> ```

### 프로퍼티 바인딩
- 대괄호([, ])를 사용
- 컴포넌트 클래스에 있는 값을 프로퍼티나 어트리뷰트로 바인딩하는 문법
>```html
> <p
>  [id]="sayHelloId"
>  [style.color]="fontColor">
>  You can set my color in the component!
> </p>
> ```

### 이벤트 바인딩
- 이벤트 이름을 소괄호((, )) 로 감싸면 됨.
- 키입력, 마우스 이동, 클릭, 터치 등과 같은 사용자의 동작을 감지하고 이 동작에 반응하기 위해 이벤트 리스터를 추가.

>```html
> <button
>  type="button"
>  [disabled]="canClick"
>  (click)="sayMessage()">
>  Trigger alert message
> </button>
>```

### 템플릿에 추가 기능을 구현하기 위한 디렉티브
- 디렉티브에 대한 내용은 다른 파일로 생성 ㅋ
- [Directive](./Directive.md/)