import React, { Component } from 'react';
import "./Create.scss";

import axios from "../../../axios-recipes";


class Create extends Component {

    state = {
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
        name: "",
        servingSize: null,
        time: {
            hour: null,
            min: null
        }
    }


    newRecipeHandler = () => {

        let name = document.getElementById("recipeName").value;
        let description = document.getElementById("recipeDesc").value;
        let image = document.getElementById("imageUpload").value;
        let time = document.getElementById("recipeTime").value;
        let servingSize = document.getElementById("recipeServSize").value;
        let ingredients = [
            document.getElementById("ingred1").value,
            document.getElementById("ingred2").value,
            document.getElementById("ingred3").value
        ]
        let instructions = [
            document.getElementById("instruct1").value,
            document.getElementById("instruct2").value,
            document.getElementById("instruct3").value
        ]

        var recipe = {
            description: description,
            image: image,
            ingredients: ingredients,
            instructions: instructions,
            name: name,
            servingSize: servingSize,
            time: time
        }
        console.log(recipe);
        axios.post("/my-recipes.json", recipe)
    }

    render() {
        return (
            <div className="Create">

                <div className="Create__container">
                
                    <form action="#" method="get">

                        <fieldset>
                            <legend>Hey Name! Create your recipe!</legend>
                            <input type="text" name="imageUpload" id="imageUpload" placeholder="Add Recipe Image" />
                            <input type="text" name="recipeName" id="recipeName" placeholder="Name" />
                            <input type="text" name="recipeDesc" id="recipeDesc" placeholder="Description" />
                            <input type="text" name="recipeTime" placeholder="Time" id="recipeTime"/>
                            <input type="text" name="recipeServSize" placeholder="Serving Size" id="recipeServSize" />

                        </fieldset>

                        <fieldset>
                            <legend>Enter Ingredients:</legend>
                            <input type="text" name="ingred1" placeholder="Ingredient 1" id="ingred1" />
                            <input type="text" name="ingred2" placeholder="Ingredient 2" id="ingred2" />
                            <input type="text" name="ingred3" placeholder="Ingredient 3" id="ingred3" />

                        </fieldset>

                        <fieldset>
                            <legend>Enter Instructions:</legend>
                            <input type="text" name="instruct1" placeholder="Instruction 1" id="instruct1" />
                            <input type="text" name="instruct2" placeholder="Instruction 2" id="instruct2" />
                            <input type="text" name="instruct3" placeholder="Instruction 3" id="instruct3" />

                        </fieldset>

                        <input type="submit" value="Create Recipe" onClick={this.newRecipeHandler} />

                    </form>

                </div>
            
            </div>
        )
    }
}

export default Create;
