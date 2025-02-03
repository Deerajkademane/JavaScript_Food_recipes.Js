const searchbox = document.querySelector('.searchbox');
const searchbtn = document.querySelector('.searchbtn');
const recipeContainer = document.querySelector('.recipeContainer');

const recipeFunction = async (value)=>{
    recipeContainer.innerHTML = '<h2>Fetching the recipes ... </h2>'
    try{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        const convert = await api.json();
        console.log(convert);
        recipeContainer.innerHTML='';
        convert.meals.forEach(meal=>{
            const div = document.createElement('div');
            div.classList.add('recipe');
            div.innerHTML=`<img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p> ${meal.strCategory}</p>
            <p> ${meal.strArea}</p>`
            recipeContainer.appendChild(div);
        }) 
    }
    catch(error){
        recipeContainer.innerHTML = '<h2>Error finding the recipes ... </h2>';
    }
}


searchbtn.addEventListener('click',()=>{
    //console.log('button pressed'); 
    boxValue = searchbox.value.trim();
    recipeFunction(boxValue)
});