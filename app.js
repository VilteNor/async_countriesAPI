document.addEventListener("DOMContentLoaded",()=>{
    const section = document.getElementById("section")

const createCountryList=(countries)=>{

    const nameUl=document.querySelector("ul");
    countries.forEach((country)=>{
        const nameLi=document.createElement("li");
        nameLi.textContent=country.name.common;
        nameUl.appendChild(nameLi);
    })
}
    const getCountries= async()=>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonCountries = await response.json();

        createCountryList(jsonCountries);
    }


getCountries()
})