# TypeScript

정적 타입을 명시할 수 있다는 것이 순수한 자바스크립트와의 가장 큰 차이점이다.

개발자가 의도한 변수나 함수 등의 목적을 더욱 명확하게 전달할 수 있고, 그렇게 전달된 정보를 기반으로 코드 자동 완성이나 잘못된 변수/함수 사용에 대한 에러 알림같은 풍부한 피드백을 받을 수 있게 되므로 순수 자바스크립트에 비해 어마어마한 생산성 향상을 꾀할 수 있다.

API를 구현하고 사용함에 있어 해당 API의 인풋과 아웃풋이 무엇인지 명확하게 표현할 수 있으므로, API 하나 쓰는데에도 일일이 매뉴얼을 찾아봐야 하거나 심하면 해당 API의 코드까지 뒤적거려봐야 하는 자바스크립트에 비해 효율적이다.

---

## Javascript Method with Typescript 문법

### at()
정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환한다.
양수 음수 모두 지정할 수 있고, 음수 값의 경우 배열의 뒤에서부터 인덱스를 센다.

```ts
let index: number = 2;
array.at(index)
/// 'c'
```

### concat()
인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
```ts
const array1: Array<string> = ['a', 'b', 'c'];
const array2: Array<string> = ['d', 'e', 'f'];
const array3: Array<string> = array1.concat(array2);
// Array ["a", "b", "c", "d", "e", "f"]
```



### entries()
배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 를 반환

```ts
const a: Array<string> = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
    console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'

const b:Array<string> = ['a','b','c'];
const arrayEntries = array.entries();

for (const element of arrayEntries){
    console.log(element);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## 판별
### every()
배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다. Boolean 을 반환한다.
```ts
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

undefined 슬롯에 콜백 함수를 실행하지 않는다.
```ts
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```