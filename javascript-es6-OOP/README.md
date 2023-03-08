# Javascript - OOP 

### Object-oriented programming, OOP

- Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can  contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

- 物件導向程式設計 (Object-oriented programming, OOP) 是一種使用 abstraction 概念表達現實世界的程式設計方式。物件導向程式設計運用數個先前所建立的技術所組成，包含模組化 (modularity)、多型 (polymorphism) 以及封裝 (encapsulation) 。

- 物件導向說真的就是一種整理程式碼的方式

```
封裝性（Encapsulation）
- 簡單來說，就是資料能不能被隱藏起來

```

```
繼承（Inheritance）
- 透過繼承讓物件之間產生關聯，在開發上可以減少重複撰寫相同程式碼
```

```
多型（Polymorphism）
- 簡單來說，就是不同物件使用相同名稱的方法，方法的細節可以不同。
```

```
抽象性（Abstraction）
- 將複雜的事物以簡化的內容描述，方便後續的實作。
- abstract = 萃取
```
## Class

Use the keyword class to create a class.

Always add a method named constructor():
```javascript
// JavaScript Class Syntax
class ClassName {
  constructor() { ... }
}
// ex.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

```
```javascript
//extends與super
// extends：用於創建一個類別（class），此類別是另一個類別的子類別，具有語法繼承
// super：讀取或呼叫此類別的父類別的函數，注意super只能在constructor中執行，且super必須出現在this之前。

class Pet {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    callPet() {
        console.log(`This ${this.name} is ${this.age} years old, and its gender is ${this.gender}`)
    }
}

class Cat extends Pet {   //// 用extends指定父類別
    constructor(name, gender, age, breed) {
        super(name, gender, age);  //用super呼叫父類別的函數
        this.breed = breed;
    }
    callCat(){
        console.log(`This ${this.name} is the ${this.breed}. It's ${this.age} years old, and its gender is ${this.gender}`)
    }
}

let cat = new Cat('cat', 'female', 3, 'American Shorthair Cat')

cat.callPet();   
//This cat is 3 years old, and its gender is female

cat.callCat();
//This cat is the American Shorthair Cat. It's 3 years old, and its gender is female
```


### The more example: 
```javascript

var todoList = []; 

// 2. 使用者可以顯示代辦清單
function displayTodos {
    console.log(todoList)
}

// 3. 使用者可以增加代辦事項
function addTodo(todo){
    todoList.push(todo)
}


//4. 使用者可以更改代辦事項
function changeTodo(position, todoText) {
    todoList[position] = todoText 
}


//5. 使用者可以刪除代辦事項
function deleteTodo(position) {
    todoList.splice(position,1) 
}
```
```javascript
// 接下來我們把以上的變數(Variable)跟函式(function), 寫在一個object 裡面就好了. So Easy.
var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My todos', this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos()
  },
  changeTodo: function(position, todoText){
    this.todos[position] = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
```
```javascript

```

## Resources
- [Day 02: JavaScript 與 物件導向程式設計](https://ithelp.ithome.com.tw/articles/10265849)
- [[Day 8] JS 物件導向, Object Oriented Programming, wtf?](https://ithelp.ithome.com.tw/articles/10191306)
- [Web開發學習筆記16 — OOP（Object Oriented Programming）、Constructor Function、Class](https://teagan-hsu.coderbridge.io/2021/01/05/javascript-oop-constructor-function-class/)
- [W3C-JavaScript Classes ](https://www.w3schools.com/js/js_classes.asp)
- [JavaScript Object Prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)
- [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)





