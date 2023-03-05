import React from "react";
// import{ add, multiply, subtract, divide } from " ./calculator.js "

function add(n1, n2) {
	return n1 + n2;
}

function multiply(n1, n2) {
	return n1 * n2;
}

function subtract(n1, n2) {
	if (n1 > n2) {
		return n1 - n2;
	}
	return n2 - n1;
}

function divide(n1, n2) {
	return n1 / n2;
}

function List() {
  return (
    <div>
    <ul>
      <li>What is React?</li>
      <li>Babel</li>
      <li>JSX</li>
      <li>Elements</li>
      <li>components</li>
      <li>Render</li>
    </ul>
    <ul>
    <li>{add(5,6)}</li>
    <li>{multiply(2, 3)}</li>
		<li>{subtract(2, 7)}</li>
		<li>{divide(5, 2)}</li>

    </ul>
    </div>
  );
}

export default List;
