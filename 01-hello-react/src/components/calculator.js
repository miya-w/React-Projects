import React from "react";

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

export { add, multiply, subtract, divide };