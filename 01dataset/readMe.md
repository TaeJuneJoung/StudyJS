# HTML

## 데이터 속성

HTML5부터 데이터 속성 개념이 추가되었다.

`data-`로 시작하는 속성

데이터를 DOM요소에 저장해두기 위한 목적이다.



`data-*` 전역 특성은 **사용자 지정 데이터 특성(custom data attributes)**이라는 특성 클래스를 형성할 수 있다.



### 장점

`hidden`태그로 데이터를 숨겨둘 필요가 없다.



### 특징

dataset은 자바스크립이기에 속성명을 camelCase로 변환된다.



**예시코드**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataSet</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="grid-container">
        <div class="grid-item red" data-id="1" data-code="a1" data-name-value="A">A</div>
        <div class="grid-item green" data-id="2" data-code="a2" data-name-value="B">B</div>
        <div class="grid-item blue" data-id="3" data-code="a3" data-name-value="C">C</div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

```css
div.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
}

div.grid-item {
    text-align: center;
    line-height: 50px;
    color: white;
    font-weight: bold;
    height: 50px;
    cursor: pointer;
}

.red {
    background-color: #dc3545;
}

.green {
    background-color: #28a745;
}

.blue {
    background-color: #007bff;
}
```

```js
const itemList= document.querySelectorAll('.grid-item')

for (item of itemList) {
    item.addEventListener('click', (element) => {
        console.log(element.target.dataset)
    })
}
```

```js
// Console 결과
DOMStringMap {id: '1', code: 'a1', nameValue: 'A'} // A 클릭시
DOMStringMap {id: '2', code: 'a2', nameValue: 'B'} // B 클릭시
DOMStringMap {id: '3', code: 'a3', nameValue: 'C'} // C 클릭시
```



:warning:주의할점은 JS로 접근이 가능하기에 누구나 탈취가 가능하고 수정이 가능하기에 민감한 데이터 정보는 담으면 안된다.



## 추가 공부 요소

css에서의 `grid`와 `grid-template-columns` 속성



**display: grid**

- display:flex 한 방향 레이아웃 시스템(1차원)
- display:grid 두 방향(가로-세로) 레이아웃 시스템(2차원)



## 참고자료

data-attribute

https://velog.io/@yunsungyang-omc/HTML-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%86%8D%EC%84%B1-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-data-attribute

display: grid:star:

https://studiomeal.com/archives/533

> 1분코딩님이 자세하게 잘 다뤄놨다.