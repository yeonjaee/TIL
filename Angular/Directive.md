# [Angular 기본 디렉티브](https://angular.kr/guide/built-in-directives)
Angular는 사용자 인터페이스를 구축하기 위한 강력한 프레임워크이며, 기본적으로 제공하는 디렉티브를 활용하여 더욱 쉽게 개발할 수 있습니다.

디렉티브는 이런 종류들이 있습니다:

| 디렉티브 종류 | 설명 |
| :--- | :--- |
| 컴포넌트 | 템플릿이 존재하는 디렉티브입니다. 디렉티브 중 가장 많이 사용합니다. |
| 어트리뷰트 디렉티브 | 엘리먼트, 컴포넌트, 디렉티브의 모습이나 동작을 변경하는 디렉티브입니다. |
| 구조 디렉티브 | 조건에 따라 DOM 엘리먼트를 추가하거나 제거하는 디렉티브입니다. |

---

## 기본 어트리뷰트 디렉티브
어트리뷰트 디렉티브는 HTML 엘리먼트, 어트리뷰트, 프로퍼티, 컴포넌트의 동작을 변경합니다.

RouterModule이나 FormsModule과 같이 어트리뷰트 디렉티브를 제공하는 NgModule도 많습니다. 이 중 자주 사용하는 어트리뷰트 디렉티브는 이런 것들이 있습니다:

| 디렉티브 | 설명 |
| :--- | :--- |
| NgClass | CSS 클래스를 추가하거나 제거합니다. |
| NgStyle | HTML 스타일을 추가하거나 제거합니다. |
| NgModel | HTML 폼 엘리먼트에 양방향 데이터 바인딩을 연결합니다. |

---

#### ngClass를 사용하면 CSS 클래스 여러 개를 엘리먼트에 동시에 추가하거나 제거.
- >클래스를 하나만 추가하거나 제거한다면 NgClass보다 클래스 바인딩을 사용하는 것이 더 좋습니다.

이유:
1. 불필요한 코드가 줄어듭니다. 
NgClass 디렉티브를 사용하면 클래스를 추가 또는 제거하기 위한 복잡한 로직이 필요합니다. 하지만 클래스 바인딩을 사용하면 이러한 로직이 필요 없이 간단하게 클래스를 추가 또는 제거할 수 있습니다.

2. 성능이 개선됩니다.
NgClass 디렉티브는 클래스를 추가 또는 제거할 때 매번 모든 클래스를 검사하고 변경 사항을 적용해야 합니다. 하지만 클래스 바인딩을 사용하면 변경된 클래스만 업데이트하므로 성능이 향상됩니다.

3. 가독성이 더 좋습니다.
클래스 바인딩을 사용하면 클래스가 어디에서 추가되거나 제거되는지 쉽게 파악할 수 있습니다. NgClass 디렉티브를 사용하면 클래스를 추가 또는 제거하는 로직이 복잡해져서 코드를 이해하기 어려울 수 있습니다.

클래스 바인딩은 이런 것임.
- [class.sale]="onSale"
- 그러면 onSale이 참으로 평가될 때 sale 클래스를 엘리먼트에 추가하며, onSale이 거짓이나 undefined로 평가되면 sale 클래스를 엘리먼트에서 제거함.

`ngCLass` 에 메서드도 사용할 수 있음.

---

### ngModel로 프로퍼티 값 표시하기, 변경된 값 반영하기
NgModel 디렉티브를 활용하면 데이터 프로퍼티의 값을 화면에 표시할 수 있으며, 사용자가 이 값을 변경했을 때 클래스 프로퍼티에 반영할 수 있습니다.

- NgModule imports 목록에 **FormsModule**를 불러와서 추가합니다.

- 바인딩 동작을 커스터마이징하려면 [()] 문법을 사용하지 않고 프로퍼티 바인딩([])과 이벤트 바인딩(())을 나눠서 작성하면 됩니다.
- 이 때 프로퍼티 바인딩은 프로퍼티 값을 바인딩하며, 이벤트 바인딩은 이 값이 변경되는 것을 감지하는 동작을 합니다. 아래 코드는 <input> 엘리먼트에 입력된 값을 대문자로 변환하는 예제 코드.
```html
<input [ngModel]="currentItem.name" (ngModelChange)="setUppercaseName($event)" id="example-uppercase">
```
---

### DOM 엘리먼트 추가 없이 디렉티브 적용하기
- [ng-container](./ng-container)

### ngFor, ngIf 뿐만 아니라 ngSwitch 도 있음.
- switch condition 과 같이 쓰면 됨.

>```html
><div [ngSwitch]="currentItem.feature">
>  <app-stout-item    *ngSwitchCase="'stout'"    [item]="currentItem"></app-stout-item>
>  <app-device-item   *ngSwitchCase="'slim'"     [item]="currentItem"></app-device-item>
>  <app-lost-item     *ngSwitchCase="'vintage'"  [item]="currentItem"></app-lost-item>
>  <app-best-item     *ngSwitchCase="'bright'"   [item]="currentItem"></app-best-item>
><!-- . . . -->
>  <app-unknown-item  *ngSwitchDefault           [item]="currentItem"></app-unknown-item>
></div>
>```
>```ts
> currentItem!: Item;
>```
>```
>export class StoutItemComponent {
>@Input() item!: Item;
>}
>```



