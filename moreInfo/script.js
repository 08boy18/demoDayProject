let index;
let searchInput = localStorage.getItem('searchInput')
console.log(searchInput)


for (let i = 0; i < 5; i++){
    console.log(searchInput)
    console.log(complexData.data[i].common_name)
    console.log(index)
    let plant = complexData.data[i].common_name
    if (searchInput.toLowerCase() == plant.toLowerCase()){
        index = i
    }

}

let dimentions = document.getElementById('dimentionsOutput');
dimentions.innerText = `${complexData.data[index].dimensions.max_value} feet`

let watering = document.getElementById('wateringOutput');
watering.innerText = `${complexData.data[index].watering_general_benchmark.value} ${complexData.data[index].watering_general_benchmark.unit}`

let growth = document.getElementById('growthOutput');
growth.innerText = `${complexData.data[index].growth_rate}`

let setting = document.getElementById('settingOutput');
if (complexData.data[index].indoor == true){
    setting.innerText = "Indoor"
} else {
    setting.innerText = "Outdoor"
}

let image = document.getElementById('plantImg')
image.src = complexData.data[index].default_image.original_url
image.style.width = "25vw"

let description = document.getElementById('description')
description.innerText = complexData.data[index].description

let title = document.getElementById('title')
title.innerText = complexData.data[index].common_name


let subtitle = document.getElementById('subTitle')
subtitle.innerText = complexData.data[index].scientific_name