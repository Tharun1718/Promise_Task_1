
let mainElement = document.querySelector('.main-container');

const getData = async() => {
    try {
        const data = await fetch("https://breakingbadapi.com/api/characters",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json();
        response.forEach((char) => {
            displayData(char);
        })
    }catch(error) {
        mainElement.innerHTML = error;
    }
}

const displayData = async(obj)=>{
    mainElement.innerHTML += `
    <div class="specs-container">
    <h2>${obj.name}</h2>
    <img src=${obj.img} alt = ${obj.name} />
    <p><span class="details">Occupation</span> : ${obj.occupation[0]}</p>
    <p><span class="details">Nick name</span> : ${obj.nickname}</p>
    </div>
    `
}

getData()

