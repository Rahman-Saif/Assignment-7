import { useEffect, useState } from "react"
import Cards from "./components/cards/Cards"
import Hero from "./components/hero/Hero"
import Nav from "./components/nav/Nav"
import WantCook from "./components/wantCook/WantCook";


function App() {
  const [recipes,setRecipes]=useState([]);
  const [wantCook,setwantCook]=useState([])

  const handleCook=item=>{
    const isExist=wantCook.map((recipe)=>recipe.recipe_id!=item.recipe_id)
    console.log(isExist)
    if(isExist){
    const newWantToCook=[...wantCook,item];
    setwantCook(newWantToCook);
    }else{
      alert('what you did!');
    }
  }

  useEffect(()=>{
    fetch('../public/fakeData.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data));
  },[])
  

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Cards recipes={recipes} handleCook={handleCook}></Cards>
      <WantCook wantCook={wantCook} handleCook={handleCook}></WantCook>
    </>
  )
}

export default App

/*
1st step : Navbar create kortesi,ektu change korbo & just render korbo
2nd step : Banner section banaisi
3rd step : json data banailam
4th step : Card section header,title banailam
Bug fixed #1: when mapping it should be single object 






*/
