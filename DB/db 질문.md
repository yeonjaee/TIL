**데이터베이스 상의 트랜잭션이란?**

- 일관된 상태에 있는 데이터베이스를 여러 상태로 변화시킬 때 수행하는 작업의 단위.



**트랜잭션의 성질**

- 원자성: 트랜잭션이 데이터베이스에 모두 반영되든가 아예 반영되지 않든가 둘 중 하나를 해야한다.
- 일관성: 트랜잭션이 성공적으로 완료된 후에는, 일관성 있는 DB상태가 되어야 한다.
- 독립성: 하나의 트랜잭션이 수행 중일 때, 다른 트랜잭션에서 수행 결과를 참조할 수 없다.
- 영구성: 트랜잭션이 성공적으로 완료됐을 경우, 결과는 영구적으로 반영되어야 한다.



**Commit, rollback**

- commit: 해당 트랜잭션으로 연산된 DB 변경사항을 저장하는 것.
- rollback: 해당 트랜잭션으로 연산된 결과를 취소하는 것.



**트랜잭션을 병행으로 처리하려고 할 때 발생할 수 있는 문제**

- 갱신 내용 손실: 동시에 하나의 데이터가 갱신될 때 하나의 갱신이 누락됨.
- 현황 파악 오류: 하나의 데이터 갱신이 끝나지 않은 시점에서 다른 트랜잭션이 해당 데이터를 조회하는 경우.
- 모순성: 두 트랜잭션이 동시에 실행될 때 데이터베이스가 일관성이 없는 상태.
- 연쇄 복귀: 두 트랜잭션이 하나의 레코드를 갱신할 때 하나의 트랜잭션이 롤백하면 다른 하나의 트랜잭션도 롤백되는 현상.



**UNDO & REDO**

- **UNDO** : 만약 해당 트랜잭션이 어떤 이유든 정상적으로 종료될 수 없게 되면. 즉, 데이터베이스의 내용 자체는 손상되지 않았지만 변경 중이거나 변경된 내용에 대한 신뢰성을 잃어버린 경우에 트랜잭션이 변경한 페이지들은 원상 복구되어야 합니다. 이러한 복구를 UNDO라고 하며 로그를 이용하여 모든 변경을 취소시키는 방법입니다. 이를 통해 트랜잭션의 원자성을 제공합니다.



- **REDO** : 데이터베이스 내용 자체가 손상이 된 경우에 가장 최근의 복제본을 적재시킨 뒤 복제본 이후에 일어난 변경만을 로그를 이용하여 재실행함으로써 데이터베이스를 복원하는 것을 Redo라고 하며 이를 통해 트랜잭션의 영속성을 제공합니다.



 **Checkpoint 회복기법**

- Checkpoint 회복기법은 이전은 신경쓰지 않고 Checkpoint 이후만 즉시 갱신 또는 지연갱신을 수행합니다. 즉, 가장 최근 checkpoint 지점을 찾아 그 시점 이후의 로그만을 회복 대상으로 합니다.



**그림자 페이징(Shadow Paging)** **회복 기법** 

- 그림자 페이징 회복기법은 트랜잭션이 실행되는 동안 현재 페이지 테이블과 그림자 페이지 테이블 2개의 페이지 테이블을 유지하고 관리



**위와 같은 문제의 해결법**

- 로킹 제어 기법
- DB의 일정 부분을 LOCK 시키고 트랜잭션이 완료될 때 UNLOCK 하는 방법. 종류는 크게 2가지가 있는데, 공유 로킹은 lock한 부분을 read만 가능하고 write는 불가함. 배타 로킹은 읽기,쓰기 둘 다 불가함.



**그렇다면 로킹 단위를 크거나 작게 했을 때의 차이점**

- 로킹 단위를 크게 하면, 관리는 쉽지만 병행성은 떨어진다.
- 로킹 단위를 작게 하면, 병행성을 높아지지만 관리가 어렵다. 오버헤드가 증가한다.



**로킹 제어가 일으킬 수 있는 문제점은 무엇인가?**

- 로킹단위에 따라 다르겠지만 트랜잭션의 직렬화 가능성이 높아진다.(병행처리 하나마나 될 수 있다.)



**데드락이란?**

- 교착상태란 두 개 이상의 작업이 서로 상대방의 작업이 끝나기 만을 기다리고 있기 때문에 결과적으로 완료되지 않는 상태이다.



**데드락을 안 생기게 하는 방법**

- 서비스 별로 해결하는 방법이 다르지만 일반적으로 데드락 탐지나 회피를 적용시키면 된다. 탐지인 경우 알고리즘을 통해 매번 검사해야하므로 코스트가 크다. 회피인 경우 시분할 처리를 하여 A가 끝나면 B가 실행되게 하면 된다.
- 타임 스탬프 기법을 사용한다. 트랜잭션의 식별자로 타임스탬프를 지정하여 순서를 미리 선택한다.

---



**정규화란?**

- 데이터의 중복을 최소화하고 테이블의 상태가 변경될 때 이상현상(삽입,삭제,갱신)을 방지하기 위한 목적의 명령 과정.



**정규화 단계**

- 제 1정규화 : 각 컬럼들은 값이 원자값을 가지게 바꾼다.
- 제 2정규화 : 테이블의 모든 컬럼에서 부분 함수적 종속을 제거하는 것
- 제 3정규화 : 기본키를 제외한 속성들 간의 이행적 함수 종속을 없애는 것
- 제 BCNF화 : 결정자이면서 후보키가 아닌 것들 제거
- 제 4정규화 : 다치 종속 제거
- 제 5정규화 : 조인 속성을 제거



**비정규화 하는 이유**

- 시스템의 성능 향상, 운영의 편의성 등을 위함.

---



**DBMS**

방대한 양의 데이터를 편리하게 저장, 효율적 관리, 검색 할수있는 환경을 제공하는 시스템 소프트 웨어



**RDBMS**

관계형 데이터베이스란 테이블(table)로 이루어져 있으며, 이 테이블은 키(key)와 값(value)의 관계를 나타낸다.이처럼 데이터의 종속성을 관계(relationship)로 표현하는 것이 관계형 데이터베이스의 특징

<-> 비 관계형 데이터베이스는 행과 열로 이루어진 테이블 형식 스키마를 사용하지 않는 데이터베이스. JOIN 처리가 없어서 확장이 용이하고 유연성이 높으나 일관성을 보장할 수 없다. 비정형 데이터를 저장해야할 때 가장 적합하다. 하지만 케바케다.



---

#### 데이터베이스 언어의 종류

**DDL(데이터 정의어)**

| CREATE | Schema, Domain, Table, View, Index를 정의함 |
| ------ | ------------------------------------------- |
| ALTER  | Table에 대한 정의를 변경하는 데 사용함      |
| DROP   | Schema, Domain,Table, View, Index를 삭제함  |



**DML(데이터 조작어)**

|        |                                           |
| ------ | ----------------------------------------- |
| SELECT | 테이블에서 조건에 맞는 튜플을 검색함      |
| INSERT | 테이블에 새로운 튜플을 삽입함             |
| DELETE | 테이블에서 조건에 맞는 튜플을 삭제함      |
| UPDATE | 테이블의 조건에 맞는 튜플의 내용을 변경함 |



**DCL(데이터 제어어)**

| COMMIT   | 데이터베이스 조작 작업이 정상적으로 완료되었음을 관리자에게 알려줌 |
| -------- | ------------------------------------------------------------ |
| ROLLBACK | 데이터베이스 조작 작업이 비정상적으로 종료되었을 때 원래의 상태로 복구함 |
| GRANT    | 데이터베이스 사용자에게 사용권한을 부여함                    |
| REVOKE   | 데이터베이스 사용자의 사용권한을 취소함                      |

---

**E-R 다이어그램**

데이터의 구조나 조건 등을 개체와 관계로 표시해놓은 데이터 모델



**저장 프로시저(stored procedure)** 

일련의 쿼리를 마치 하나의 함수처럼 실행하기 위한 쿼리의 집합

---

**MySQL 사용의 장점과 단점**

- 안정적이고 안전한 데이터베이스 관리 시스템. 이 소프트웨어를 사용하면 웹 사이트의 트랜잭션 작업을보다 안전하게 수행 할 수 있습니다.

- 매우 큰 유형의 데이터베이스에는 적합하지 않다.



**테이블에 열 추가**

ALTER TABLE table_name ADD COLUNM column_name
