import React from 'react';
import Tiramisu_Step1 from './img_fonts/Tiramisu_Step1.jpg';
import Tiramisu_Step2 from './img_fonts/Tiramisu_Step2.jpg';
import Tiramisu_Step3 from './img_fonts/Tiramisu_Step3.jpg';
import Tiramisu_Step4 from './img_fonts/Tiramisu_Step4.jpg';
import Tiramisu_Step5 from './img_fonts/Tiramisu_Step5.jpg';
import Brownie_Step1 from './img_fonts/Brownie_Step1.jpg';
import Brownie_Step2 from './img_fonts/Brownie_Step2.jpg';
import Brownie_Step3 from './img_fonts/Brownie_Step3.jpg';
import Brownie_Step4 from './img_fonts/Brownie_Step4.jpg';
import Chees_cacke_Step1 from './img_fonts/Chees_cacke_Step1.jpg';
import Chees_cacke_Step2 from './img_fonts/Chees_cacke_Step2.jpg';
import Chees_cacke_Step3 from './img_fonts/Chees_cacke_Step3.jpg';
import Chees_cacke_Step4 from './img_fonts/Chees_cacke_Step4.jpg';
import FruitDessert_Step1 from './img_fonts/FruitDessert_Step1.jpg';
import FruitDessert_Step2 from './img_fonts/FruitDessert_Step2.jpg';
import FruitDessert_Step3 from './img_fonts/FruitDessert_Step3.jpg';
import FruitDessert_Step4 from './img_fonts/FruitDessert_Step4.jpg';
import heart_Violet from './img_fonts/heart_Violet.png';
import back_arrow from './img_fonts/back_arrow.png';
// import { browserHistory } from 'react-router'

// var browserHistory = ReactRouter.browserHistory;
// npm install --save history
// onClick={BrowserHistory.goBack}
export class BackButton extends React.Component {
    render() {
        return(
            <div className='back-arrow'>
                <img  src={back_arrow} alt='back_arrow' />
            </div>
        )
    }
}

export class LikesQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesQuantity : 0,
        }
    }
updateLikes() {
    var likes = this.state.likesQuantity += 1;
    this.setState({
        likesQuantity: likes
        })
    }
    render() {
        return (
            <div className='likes-quantity'>
                <img onClick={this.updateLikes.bind(this)} src={heart_Violet} alt='heart_Violet' />
                <div> {this.state.likesQuantity} </div>
            </div>
        )
    }
}
export class Step extends React.Component {
    render() {
        return(
            <div className='step-container'>
                <p>{this.props.stepNumber}</p>
                <div className='step-wrapper'>
                    <div>
                        <img src={this.props.stepImg} alt='step-image' />
                    </div>
                    <div>
                        <p>{this.props.stepText}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function IngredientsList(props) {
    const numbers = props.numbers;
    const ListIngredients = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>{ListIngredients}</ul>
    );
}
const numbers1 = ['4 eggs', '1/2 cup sugar', '250g mascarpone', '1/3 cup coffee liqueur', '200ml thickened cream', '2 t.s. instant coffee powder',
                '2 cups warm water', '28 finger biscuits', '1 t.s. cocoa powder'];
const numbers2 = ['170	g Butter', '4	Stk	Eier', '140	g	Mehl (glatt)', '1	Prise	Salz', '0.5	EL	Vanillezucker',
                '170 g Zartbitter-& Halbbitterschokolade (ges.)', '250	g	Zucker (Staubzucker)'];
const numbers3 = ['6 eggs', '6 tbs butter', '2 tbs sugar', '3/4 cup sour cream'];
const numbers4 = ['1 tbsp vanilla sugar', '3 fl oz honey', '3 Tbsp salted nuts'];

export class Ingredients extends React.Component {
    render() {
        return(
            <div>
                <p className='indredients'>Ingredients</p>
                <IngredientsList numbers={this.props.numbers} />
                <div className='devide-line'></div>
            </div>
        )
    }
}

export class RecipeTiramisu extends React.Component {
    render() {
        return(
            <div className='recipe-container'>
                <BackButton />
                <img src={this.props.recipeImg} alt='recipe-image' />
                <h1>{this.props.recipeName}</h1>
                <LikesQuantity />
                <Ingredients numbers={numbers1}/>
                <Step stepNumber={'1'} stepImg={Tiramisu_Step1} stepText={'Beat egg yolks and sugar together until pale and creamy. Gently fold in mascarpone and liqueur. Whip cream to firm peaks.'} />
                <Step stepNumber={'2'} stepImg={Tiramisu_Step2} stepText={'Beat eggwhites until stiff peaks form. Fold into mascarpone mixture. Cover with plastic wrap.'} />
                <Step stepNumber={'3'} stepImg={Tiramisu_Step3} stepText={'Combine coffee and warm water in a shallow dish, stirring until coffee dissolves. Using half the biscuits, dip biscuits 1 at a time in coffee, turning to coat. Place, in a single layer.'} />
                <Step stepNumber={'4'} stepImg={Tiramisu_Step4} stepText={'Spread half the mascarpone mixture over biscuits to cover. Repeat layers with remaining biscuits, coffee and mascarpone mixture. Cover and refrigerate for 4 hours.'} />
                <Step stepNumber={'5'} stepImg={Tiramisu_Step5} stepText={'Dust top with cocoa powder and serve.'} />
            </div>
        )
    }
}
export class RecipeBrownie extends React.Component {
    render() {
        return(
            <div className='recipe-container'>
                <BackButton />
                <img src={this.props.recipeImg} alt='recipe-image' />
                <h1>{this.props.recipeName}</h1>
                <LikesQuantity />
                <Ingredients numbers={numbers2}/>
                <Step stepNumber={'1'} stepImg={Brownie_Step1} stepText={'..'} />
                <Step stepNumber={'2'} stepImg={Brownie_Step2} stepText={'.'} />
                <Step stepNumber={'3'} stepImg={Brownie_Step3} stepText={'..'} />
                <Step stepNumber={'4'} stepImg={Brownie_Step4} stepText={'...'} />
            </div>
        )
    }
}
export class RecipeCheesCacke extends React.Component {
    render() {
        return(
            <div className='recipe-container'>
                <BackButton />
                <img src={this.props.recipeImg} alt='recipe-image' />
                <h1>{this.props.recipeName}</h1>
                <LikesQuantity />
                <Ingredients numbers={numbers3}/>
                <Step stepNumber={'1'} stepImg={Chees_cacke_Step1} stepText={'1 and 3/4 cup of crumbs, dump them into a food processor along with the softened butter and 1/3 cup of sugar and blend everything together very well. Distribute the crumbs around the bottom of the pan.'} />
                <Step stepNumber={'2'} stepImg={Chees_cacke_Step2} stepText={'beat the cream cheese until it becomes fluffy with mixer. Beat in 1 cup of sugar, eggs and sour cream'} />
                <Step stepNumber={'3'} stepImg={Chees_cacke_Step3} stepText={'Add jelle to cream.'} />
                <Step stepNumber={'4'} stepImg={Chees_cacke_Step4} stepText={'Put cream on crumbs and live in refrigerator for 4 hours.'} />
            </div>
        )
    }
}
export class RecipeFruitDessert extends React.Component {
    render() {
        return(
            <div className='recipe-container'>
                <BackButton />
                <img src={this.props.recipeImg} alt='recipe-image' />
                <h1>{this.props.recipeName}</h1>
                <LikesQuantity />
                <Ingredients numbers={numbers4}/>
                <Step stepNumber={'1'} stepImg={FruitDessert_Step1} stepText={'Slice fruit and put yogurt into a bowl.'} />
                <Step stepNumber={'2'} stepImg={FruitDessert_Step2} stepText={'Whisk the yogurt until it is thoroughly smooth and without any lumps.'} />
                <Step stepNumber={'3'} stepImg={FruitDessert_Step3} stepText={'Sprinkle the fruit with the vanilla sugar.'} />
                <Step stepNumber={'4'} stepImg={FruitDessert_Step4} stepText={'Add two spoonfuls of the yogurt on top and drizzle some honey over it.'} />
            </div>
        )
    }
}
