import React from 'react';
import './ViewRecipe.scss';

import Button from "../../UI/Button/Button";

import PizzaPic from '../../../assets/images/recipe-pizza.jpg';
import BurgerPic from '../../../assets/images/recipe-burger.jpg';
import ChowMeinPic from '../../../assets/images/recipe-chowmein.jpg';
import BiryaniPic from '../../../assets/images/recipe-pilaf.jpg';

const viewRecipe = () => (

    <div className="ViewRecipe">

       <div className="ViewRecipe__header">
       
            <h3 className="ViewRecipe__header--verticalTxt">supreme pizza</h3>

            <img src={PizzaPic} alt="" />

            <div className="ViewRecipe__header--txt">
            
                <h2>Description:</h2>
                <p>Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegatables and two types of meat. Yum!</p>
                
                <br />

                <h3>Total Time:</h3>
                <p>1h 24min</p>

                <br />

                <h3>Servings:</h3>
                <p>4 servings</p>
                
            
            </div>

       </div>

       <div className="ViewRecipe__ingredients">
       
            <h3>Ingredients:</h3>
       
       </div>

       <div className="ViewRecipe__instructions">
       
            <h3>Instructions:</h3>
       
       </div>

       <Button>Edit Recipe</Button>

    </div>

)

export default viewRecipe;