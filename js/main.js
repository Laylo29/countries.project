let elCountrySelect = document.querySelector(".choose-select")
let elCountryList = document.querySelector(".country-list")


// select part start
function createOptionToSelect(){
    countries.forEach(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item.capital 
        elOption.value = item.capital.toLowerCase()
        elCountrySelect.appendChild(elOption)
    })
}
createOptionToSelect()
// select part end

// rended product start
function renderProducts(arr,list){
    list.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "w-[264px] rounded-[5px] shadow-md shadow-blue-300"
     
        elItem.innerHTML = `
         <img class="!h-[160px] !w-[267px] object-cover" src = "${item.flag} " alt="Country flag" width="267" height="160" />
         <div class= "p-[24px]">
         <strong class = "text-[28px] inline-block text-[#111517] font-extraBold mb-[16px]">${item.name}</strong>
         <p> <span>Population: </span> ${item.population}</p>
         <p> <span>Region: </span> ${item.name} </p>
         <p> <span>Capital: </span> ${item.capital} </p>
         </div>
         <div class ="flex px-[24px] pb-[24px]">
          <button class=" text-[var(--color-text)] border-[1.5px] border-slate-500 rounded-md w-[20%] cursor-pointer   hover:border-blue-500 hover:text-blue-500 duration-300">Like</button>
          <button class=" text-[var(--color-text)] border-[1.5px] border-slate-500 rounded-md w-[20%] cursor-pointer   hover:border-blue-500 hover:text-blue-500 duration-300">Save</button>
          <button class=" text-[var(--color-text)] border-[1.5px] border-slate-500 rounded-md w-[20%] cursor-pointer   hover:border-blue-500 hover:text-blue-500 duration-300">More</button>
        </div>
        `


        elCountryList.appendChild(elItem)
    })
}
renderProducts(countries, elCountryList)
// rended product end
