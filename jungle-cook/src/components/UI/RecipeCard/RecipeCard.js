import React, { Component } from 'react';
import TimeIcon from "../../../assets/images/time.svg";
import ServingsIcon from "../../../assets/images/servings.svg";

import './RecipeCard.scss';

import PizzaPic from '../../../assets/images/recipe-pizza.jpg';
import BurgerPic from '../../../assets/images/recipe-burger.jpg';
import ChowMeinPic from '../../../assets/images/recipe-chowmein.jpg';
import BiryaniPic from '../../../assets/images/recipe-pilaf.jpg';

class RecipeCard extends Component {

    render() {

        return (

            <div className="RecipeCard">
            
                <div className="RecipeCard__img">
                    <img src={require(`../../../assets/images/${this.props.imgURL}.jpg`)} alt="" />
                </div>
                <div className="RecipeCard__info">
                
                    <h3 className="RecipeCard__info--header">
                        {this.props.name}
                    </h3>

                    <p className="RecipeCard__info--desc">
                        {this.props.description}
                    </p>

                    <div className="RecipeCard__info--time">
                        <img src={TimeIcon} alt="Time" />
                        <p>{this.props.time}</p>
                    </div>

                    <div className="RecipeCard__info--servings">
                        <img src={ServingsIcon} alt="Time" />
                        <p>4 servings</p>
                    </div>
                
                </div>

            </div>

        )

    }

}

export default RecipeCard;