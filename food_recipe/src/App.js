import './App.css';
import "./key";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const[recipes, setrecipes] = useState([]);
  const[healthLabels, sethealthLabel] = useState("vegan");

const YOUR_APP_ID = "b285ebc3";
const YOUR_APP_KEY = "078920c99b3b4f87f04ddb686e508e04"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes (){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
     <h1 onClick={getRecipes}>Personal Gourmet</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type = "text" 
        className="app__input"
        placeholder="Enter Ingredient"
        value = {query} onChange={(e) => setquery(e.target.value)} />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app__healthLabels" >
        <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
        <option onClick={() => sethealthLabel("vegetarian")}>Vegetarian</option>
        <option onClick={() => sethealthLabel("paleo")}>Paleo</option>
        <option onClick={() => sethealthLabel("dairyFree")}>Dairy-free</option>
        <option onClick={() => sethealthLabel("gluten-free")}>Gluten-free</option>
        <option onClick={() => sethealthLabel("fat-free")}>Fat-free</option>
        <option onClick={() => sethealthLabel("wheat-free")}>Wheat-free</option>
        <option onClick={() => sethealthLabel("low-sugar")}>Low-sugar</option>
        <option onClick={() => sethealthLabel("egg-free")}>Egg-free</option>
        <option onClick={() => sethealthLabel("peanut-free")}>Peanut-free</option>
        <option onClick={() => sethealthLabel("tree-nut-free")}>Tree-nut-free</option>
        <option onClick={() => sethealthLabel("soy-free")}>Soy-free</option>
        <option onClick={() => sethealthLabel("fish-free")}>Fish-free</option>
        <option onClick={() => sethealthLabel("shellfish-free")}>Shellfish-free</option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map(recipe =>{
         return <RecipeTile recipe ={recipe}/>
        }) }
      </div>
    </div>
  );
}

export default App;
