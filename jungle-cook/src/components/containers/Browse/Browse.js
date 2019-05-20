import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../../UI/RecipeCard/RecipeCard';
import './Browse.scss';
import axios from '../../../axios-recipes';
import Spinner from '../../UI/Spinner/Spinner';

import PizzaPic from '../../../assets/images/recipe-pizza.jpg';
import BurgerPic from '../../../assets/images/recipe-burger.jpg';
import ChowMeinPic from '../../../assets/images/recipe-chowmein.jpg';
import BiryaniPic from '../../../assets/images/recipe-pilaf.jpg';

class Browse extends Component {

    state = {
        recipes: []
    }

    componentDidMount() {
        axios.get('/recipes.json')
            .then(response => {
                console.log(response.data)
                let recipesArr = [];
                // this.setState({recipes: response.data})
                for (var key in response.data) {
                    if (response.data.hasOwnProperty(key)) {
                        recipesArr.push(response.data[key])

                    }
                }
                this.setState({recipes: recipesArr});
                console.log(recipesArr)
            })
    }


    render() {

        let recipeCards = <Spinner />;

        recipeCards = this.state.recipes.map(recipe => {
            return (
                <Link to={'/view-recipe/' + recipe.id}>
                    <RecipeCard 
                        imgURL={recipe.image} 
                        key={recipe.id}
                        description={recipe.description}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        name={recipe.name}
                        servingSize={recipe.servingSize}
                        time={recipe.time} />
                </Link>
            )
        })
        

        return(
            <div className="Browse">

                <div className="Browse__container">

                    <h1 className="Browse__container--header">Recipes: Try some today!</h1>

                    <div className="Browse__container--cards">

                        {/* <Link to={'/view-recipe/1'}>
                            <RecipeCard imgURL={PizzaPic} key={1} />
                        </Link>

                        <Link to={'/view-recipe/2'}>
                            <RecipeCard imgURL={BurgerPic} key={2} />
                        </Link>

                        <Link to={'/view-recipe/3'}>
                            <RecipeCard imgURL={BiryaniPic} key={3} />
                        </Link>

                        <Link to={'/view-recipe/4'}>
                            <RecipeCard imgURL={ChowMeinPic} key={4} />
                        </Link> */}
                        {recipeCards}
                        

                    </div>


                </div>

            </div>
        )
    }

}

export default Browse;