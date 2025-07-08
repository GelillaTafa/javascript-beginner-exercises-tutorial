function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors(students) {

	//your loop here
	while (students > 0){
		let random= Math.floor(Math.random()*4)+1;

		console.log(getColor(random));
		students--;
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

