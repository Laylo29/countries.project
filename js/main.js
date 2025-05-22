let elCountrySelect = document.querySelector(".choose-select")
let elCountryList = document.querySelector(".country-list")
let elSearchInput = document.querySelector(".search-input")
let elDarkModeBtn = document.querySelector(".dark-mode-btn")
let elLikeCount = document.querySelector(".like-count")
let elSaveCount = document.querySelector(".save-count")

let likeList = []
let SaveList = []


// select part start
function createOptionToSelect(){
    countries.forEach(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item.capital 
        elOption.value = item.capital.toLowerCase()
        elOption.className ="text-[var(--color-text)] bg-[var(--color-bg)]"
        elCountrySelect.appendChild(elOption)
    })
}
createOptionToSelect()
// select part end

// rended country start
function renderProducts(arr,list){
    list.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "w-[264px] rounded-[5px] shadow-md shadow-blue-300"
     
        elItem.innerHTML = `
         <img class="!h-[160px] !w-[267px] object-cover" src = "${item.flag} " alt="Country flag" width="267" height="160" />
         <div class= "p-[24px]">
         <strong class= " text-[var(--color-text)] text-[18px] inline-block  font-extraBold mb-[16px]">${item.name}</strong>
         <p class="text-[var(--color-text)]"> <span>Population: </span> ${item.population}</p>
         <p class="text-[var(--color-text)]"> <span>Region: </span> ${item.name} </p>
         <p class="text-[var(--color-text)]"> <span>Capital: </span> ${item.capital} </p>
         </div>
         <div class="flex px-[24px] pb-[24px] gap-[10px]">
          <button onclick="handleLikeClick('${item.id})" class=" ${item.isLiked ? "bg-red-500 text-white border-red-500" : "border-slate-500"} text-[var(--color-text)] border-[1.5px] border-slate-500 rounded-md w-[20%] cursor-pointer   hover:border-blue-500 hover:text-blue-500 duration-300">Like</button>
          <button onclick="handleLikeClick(${item.id})" class=" ${item.isSaved ? "bg-red-500 text-white border-red-500" : "border-slate-500"} text-[var(--color-text)] border-[1.5px] border-slate-500 rounded-md w-[20%] cursor-pointer   hover:border-blue-500 hover:text-blue-500 duration-300">Save</button>
          <button class=" text-[var(--color-text)] border-[1.5px] border-slate-500 rounded-md w-[20%] cursor-pointer   hover:border-blue-500 hover:text-blue-500 duration-300">More</button>
        </div>
        `
        elCountryList.appendChild(elItem)
    })
}
renderProducts(countries, elCountryList)
// rended country end

// events start
function SearchAndSelect(value,currentValue){
    if(value == "name"){
        let filteredArr = countries.filter(item => item[`${value}`].toLowerCase().includes(currentValue.toLowerCase()))
        renderProducts(filteredArr, elCountryList)
    }
    else{
        if(currentValue == "all"){
            renderProducts(countries, elCountryList)
        }
        else{
            let filteredArr = countries.filter(item => item[`${value}`].toLowerCase() == currentValue.toLowerCase() )
            renderProducts(filteredArr, elCountryList)
        }
    }
    
}
// events end
//  search part start
elSearchInput.addEventListener("input", (evt) => SearchAndSelect("name", evt.target.value))
// search part end

// select part start
elCountrySelect.addEventListener("change", (evt) => SearchAndSelect("capital", evt.target.value))
// select part start

// dark mode start
elDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
// dark mode end



// like start
function handleSaveClick(id){
    let findObj = countries.find(item => item.id == id)
    findObj.isSaved = !findObj.isSaved
    renderProduct(countries, elCountryList)
    elSaveCount.textContent = countries.filter(item => item.isSaved).length
}
function handleSaveBtnClick() {
    let saveList = countries.filter(item => item.isSaved)
    renderProduct(saveList, elCountryList)
}
// like end

// saved start
function handleSaveClick(id){
    let findObj = countries.find(item => item.id == id)
    findObj.isSaved = !findObj.isSaved
    renderProduct(countries, elCountryList)
    elSaveCount.textContent = countries.filter(item => item.isSaved).length
}
function handleSaveBtnClick() {
    let saveList = countries.filter(item => item.isSaved)
    renderProduct(saveList, elCountryList)
}
// saved end
