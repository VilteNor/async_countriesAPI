document.addEventListener("DOMContentLoaded",()=>{
    const section = document.getElementById("section")

    const getCountries= async()=>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        console.log(jsonData);
        const countryNames = jsonData.name; 
        // console.log(countryNames);

        const commonNames=countryNames.map((country)=>country.common);
        // console.log(commonNames);


    const nameUl=document.querySelector("ul");
    commonNames.forEach((commonName)=>{
        const nameLi=document.createElement("li");
        nameLi.textContent=commonName;
        nameUl.appendChild(nameLi);
    })

    }



    
getCountries()
})