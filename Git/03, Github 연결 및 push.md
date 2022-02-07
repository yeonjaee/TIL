## Github 연결 및 push

---

### [1] 원격 저장소 등록하기

로컬 저장소에서 ```git init``` 설정 후

```
origin이라는 이름으로 원격 저장소 주소를 등록
$ git remote add origin https://github.com/SeoulStrech/TIL.git

-v 옵션을 붙이면, 원격 저장소의 상세정보를 표시/조회할 수 있다.
$ git remote -v

원격 저장소 연결을 삭제하려면
$ git remote rm <이름>` 혹은 `git remote remove <이름>`
```

### [2] push

```add```, ```commit``` 입력 후 깃허브 서버에 커밋을 업로드

```
$ git push <저장소 이름> <브랜치 이름>

예시) git push origin master

------------------------------------
$ git push -u origin master
이후에는 $ git push 만 입력해도 됨
```