let searchInput;

function getRandomNumber() {
    return Math.floor(Math.random() * 28) + 1;
}

let randomNum1 = getRandomNumber()
let image1 = document.getElementById('plantImg1')
image1.src = data[randomNum1].default_image.original_url
image1.style.height = '20vw'

let plant1 = document.getElementById('plantText1')
plant1.innerText = data[randomNum1].common_name

let randomNum2 = getRandomNumber()
while (randomNum2 == randomNum1){
    randomNum2 = getRandomNumber() 
}

let image2 = document.getElementById('plantImg2')
image2.src = data[randomNum2].default_image.original_url
image2.style.height = '20vw'

let plant2 = document.getElementById('plantText2')
plant2.innerText = data[randomNum2].common_name


let inputField = document.getElementById("searchInput");
inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        let inputValue = inputField.value.trim();
        if (inputValue !== "") {
            localStorage.setItem('searchInput', inputValue);
            inputField.value = ""; 
            window.location.href = "moreInfo/moreInfo.html"
        }
    }
});