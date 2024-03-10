let arr = ["This", "is", "a", "sentence."];

function resp1() {
    function printOutString(arr) {
        let sentence = "";
        for (let wordIndex = 0; wordIndex < arr.length; wordIndex++) {
            sentence += " "+ arr[wordIndex]; // sentence = sentence + " "+ arr[wordIndex];
        }
        return sentence;
    }
    document.getElementById("pr1").innerHTML = printOutString(arr)  ;
}