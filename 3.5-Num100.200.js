function num100to200 (input){

let ourNum = Number (input[0]);

if (ourNum < 100){
    console.log("Less than 100");
} else if (ourNum <= 200){
    console.log("Between 100 and 200");
} else {
    console.log("Greater than 200");
}

}

num100to200 (["95"])