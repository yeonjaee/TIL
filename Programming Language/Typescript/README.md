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

### fill()
배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다.
```ts
// array.fill(value[, start[, end]])
[1,2,3,4,5].fill(4,1,3);
// [1,4,4,4,5]
```

### flat()
모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어 붙인 새로운 배열을 생성한다.
```ts
const array = [0,1,2,[[[3,4]]]];
const flatArray = array.flat(2);
// Array: [0,1,2, [3,4]];
```

### forEach()
주어진 함수를 배열 요소 각각에 대하여 실행한다.
```ts
const words = ['one', 'two', 'three', 'four'];
words.forEach(async (word)=>{
   console.log(word);
   if(word === 'two') words.shift();
});
// one
// two
// four
```

### from()
유사 배열 객체(array-like object)나 반복 가능한 객체를 얕게 복사해 새로운 배열 객체를 만든다.
```ts
console.log(Array.from([1,2,3],x=>x+x));
// Array [2,4,6]
```

### indexOf()
배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1 을 반환한다.
```ts
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// 1

console.log(beasts.indexOf('bison', 2));
// 4

console.log(beasts.indexOf('giraffe'));
// -1

// 요소의 모든 항목 찾기
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### map()
배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
- filter 와 조금 헷갈림
```ts
const kvArray = [{key:1, value:10},
    {key:2, value:20},
    {key:3, value: 30}];

const reformattedArray = kvArray.map((obj)=>{
    const rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
// reformattedArray는 [{1:10}, {2:20}, {3:30}]

// kvArray는 그대로
// [{key:1, value:10},
//  {key:2, value:20},
//  {key:3, value: 30}]
```
- map 에 하나의 인자만 받는 콜백을 사용하는 경우가 많은데, 어떤 함수는 두 개 이상의 인자를 사용하는 경우도 있다. 이런 경우엔 혼란스럽다.
```ts
['1','2','3'].map(parseInt);
// 결과를  [1,2,3] 으로 기대할 수 있다.
// 그러나 실제 결과는 [1, Nan, Nan] 이다.

// parseInt 함수는 보통 하나의 인자만 사용하지만, 두 개를 받을 수 있다.
// 첫 번째 인자는 변환하고자 하는 표현이고 두 번째는 숫잘 변환할 때 사용하는 진법이다.
// map 은 콜백에 세 가지 인자를 전달한다. - 배열의 값, 값의 인덱스, 그리고 배열
// 세 번째 인자는 parseInt 가 무시하지만 두 번째 인자는 아니다. 따라서,
// 혼란스러운 결과를 도출할 수 있다.

async returnInt(element){
    return parseInt(element, 10);
}

['1','2','3'].map(str=> parseInt(str));
// [1,2,3]
```

### of()
인자의 수나 유형에 관계없이 가변 인자를 갖는 새 배열 인스턴스를 만든다.
of() 와 Array 생성자의 차이는 정수형 인자의 처리 방법에 있다.
```ts
Array.of(7)
// 하나의 요소 7 을 가진 배열을 생성한다.
// [7]

Array(7)
// length 속성이 7 인 빈 배열을 생성한다.
// [, , , , , , ]
```

### pop()
배열의 마지막 요소를 제거하고 그 요소를 반환한다.
```ts
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// "tomato"

console.log(plants);
// Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

### push()
배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.

### slice()
어떤 배열의 begin 부터 end 까지 (end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.
// slice([begin[, end]])
```ts
const animals = ['ant','bison','camel','duck'];

console.log(animals.slice(2));
// ['camel','duck']

console.log(animals.slice(-2));
// ['camel','duck']

console.log(animals.slice());
// ['ant','bison','camel','duck']
```

### sort()
배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다. 정렬은 stable sort 가 아닐 수 있다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
원 배열이 정렬되는 것에 유의. 복사본이 만을어지는 것이 아니다.

arr.sort([compareFunction])

```ts
// map 을 사용한 정렬
// 복잡한 요소가 많은 경우, 임시 배열을 하나 만들어서 여기에 실제 정렬에 사용할 값만을 뽑아서 넣어서 이를 정렬하고, 그 결과를 이용해서 실제 정렬을 하는 것

const list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 임시 배열은 위치 및 정렬 값이 있는 객체를 보유한다.
let mapped = list.map((el,i)=>{
    return {index:i, value:el.toLowerCase()};
});

// 축소치를 포함한 매핑된 배열의 sort
mapped.sort((a,b)=>{
    return +(a.value > b.value) || +(a.value===b.value) -1;
});

// 결과 순서를 위한 컨테이너
const result = mapped.map((el)=>{
    return list(el.index);
})
```

### join()
배열의 모든 요소를 연결해 하나의 문자열로 만든다.
arr.join([separator])

```ts
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join('-'));
// "Fire-Air-Water"

```
### shift()
배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다. 원 배열도 변경된다.
```ts
const myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
const shifted = myFish.shift();
// shifted: clown,mandarin,surgeon
// myFish: angel
```

### charAt() & charCodeAt()
charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환한다.
charCodeAt() : 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환한다.
```ts
'ABC'.charCodeAt(0);
// A
'ABC'.charCodeAt(0);
// 65

```

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

### filter()
주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
```ts
const words: Array<string> = ['apple', 'banana', 'cyrus','grape'];
const result = words.filter(word => word.length > 6);
// Array[]
```
callback 함수는 true 를 반환하면 요소를 유지하고, false 를 반환하면 버린다.

### find()
주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 그런 요소가 없다면 undefined 를 반환한다.
```ts
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
const result = inventory.find(fruit => fruit.name === 'cherries');
console.log(result)
// { name: 'cherries', quantity: 5 }
```

### inclueds()
배열이 특정 요소를 포함하고 있는지 판별한다.
```ts
const array = [1,2,3,4];
if(array.includs(6)){
    console.log('there is 6')
}else{
    console.log('not exist')    
}
// "not exist"
```

### reduce()
배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.
```arr.reduce(callback[, initialValue])```
```ts
const array = [1,2,3,4];
const initialValue = 0;
const sumWithInitial = array.reduce(
    (accumlator, currentValue) =>
        accumlator + currentValue,
    initialValue
);
console.log(sumWithInitial);
// 10
```
callback 리듀서 함수는 4 개의 인자를 가진다.
- 누산기 (acc)
- 현재 값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)
리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됨.
```ts
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]
```


---
### 비구조화 할당/구조분해 할당
#### {...}, [...] 문법
배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 js 표현식.
즉, 배열 혹은 객체 안의 값을 편하게 꺼내 쓸 수 있는 문법.
```js
[a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1); // 1
console.log(a2); // 2
console.log(rest_a); // [3, 4, 5, 6, 7, 8, 9]

var { a1, a2, ...rest_a } = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(a1); // 10
console.log(a2); // 20
console.log(rest_a); // { a3: 30, a4: 40 }
```

---
### Map() 생성자
#### * 오직 new 로만 생성할 수 있음. new 없이 호출하면 TypeError 가 발생함.
맵 객체를 생성함.
```js
새로운 Map 생성하기
const newMap = new Map([
  [1,'one'],
  [2,'two'],
  [3,'three'],
  ]);
```
