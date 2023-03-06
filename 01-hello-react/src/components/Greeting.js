
export function Greeting() {
	const date = new Date().getHours();
	if (date >= 0 && date <= 12) {
	
		return <h1>Good morning!</h1>;
	} else if (date > 12 && date <= 17) {
	    return <h1>Good Afternoon!</h1>
	} else if (date > 17 && date <= 20) {
		return `Good evening!`;
	} else {
		return `Good Night`;
	}
}


export default Greeting
