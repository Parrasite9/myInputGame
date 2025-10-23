import promptSync from "prompt-sync";
const prompt = promptSync();

let getName = prompt("Please enter your name: ");

if (getName != null) {
	console.log("Ok great");
} else {
	console.log("Why did you not put anything in?");
}

let getAge = prompt("How old are you? ");

if (getAge != null) {
	console.log(getName + " is " + getAge + " years old.");
} else {
	console.log("Terminated.");
}
