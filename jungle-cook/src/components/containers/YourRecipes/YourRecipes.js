import React, { Component } from 'react';
import axios from "../../../axios-recipes";
import { Link } from 'react-router-dom';
import PizzaPic from '../../../assets/images/recipe-pizza.jpg';
import BurgerPic from '../../../assets/images/recipe-burger.jpg';
import ChowMeinPic from '../../../assets/images/recipe-chowmein.jpg';
import BiryaniPic from '../../../assets/images/recipe-pilaf.jpg';
import EditRecipeCard from '../../UI/EditRecipeCard/EditRecipeCard';
import './YourRecipes.scss';
import Spinner from "../../UI/Spinner/Spinner";

class YourRecipes extends Component {

    state = {
        recipes: [],
        data: null,
        
    }

    componentDidMount() {
        axios.get('/my-recipes.json')
            .then(response => {
                console.log(response.data)
                let recipesArr = [];
                // this.setState({recipes: response.data})
                for (var key in response.data) {
                    if (response.data.hasOwnProperty(key)) {
                        let objClone = {...response.data[key]}
                        objClone["firebaseId"] = key;
                        recipesArr.push(objClone)

                    }
                }
                this.setState({ recipes: recipesArr, data: response.data });
                console.log(recipesArr)
                console.log(this.state.data)
            })
    }

    

   

    render() {

        let recipeCards = <Spinner />;

        recipeCards = this.state.recipes.map(recipe => {
            return (
                // <Link to={'/view-recipe/' + recipe.id}>
                    <EditRecipeCard
                        imgURL={recipe.image}
                        key={recipe.id}
                        description={recipe.description}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        name={recipe.name}
                        servingSize={recipe.servingSize}
                        time={recipe.time}
                        firebaseId={recipe.firebaseId}
                         />
                // </Link>
            )
        })

        return (

            <div className="YourRecipes">

                <div className="YourRecipes__container">

                    <h1 className="YourRecipes__container--header">Recipes: Try some today!</h1>

                    <div className="YourRecipes__container--cards">

                        {/* <RecipeCard imgURL={PizzaPic} />
                        <RecipeCard imgURL={BurgerPic} />
                        <RecipeCard imgURL={BiryaniPic} />
                        <RecipeCard imgURL={ChowMeinPic} /> */}

                        {/* <EditRecipeCard imgURL={PizzaPic} /> */}
                        {/* {myRecipes} */}
                        {recipeCards}
                    </div>


                </div>
                
            </div>

        )

    }

}

export default YourRecipes;