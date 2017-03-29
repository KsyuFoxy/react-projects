import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { resolve } from 'universal-router';
import './styles.min.css';
import Tiramisu from './img_fonts/Tiramisu.jpg';
import Tiramisu_big from './img_fonts/Tiramisu_big.jpg';
import Brownie from './img_fonts/Brownie.jpg';
import chees_cacke from './img_fonts/chees_cacke.jpg';
import Fruit_dessert from './img_fonts/Fruit_dessert.jpg';
import heart_VW from './img_fonts/heart_VW.png';
import heart_Violet from './img_fonts/heart_Violet.png';
import {Header, Footer} from './Header_Footer.js';
import {RecipeTiramisu, RecipeBrownie, RecipeCheesCacke, RecipeFruitDessert} from './Recipe.js';

// const element = {
//     type: 'p',
//     props: {
//         className: 'header',
//         children: 'My text'
//     }
// }
// class Imagebox1 extends React.Component{
//     render() {
//         const {children, src} = this.props;
//         return {
//             type: 'div',
//             props: {
//                 className: 'recipe-image',
//                 children: {
//                     type: 'img',
//                     props: {
//                         src: src
//                     }
//                 }
//             }
//         }
//     }
// }
class Imagebox extends React.Component {
    render() {
        return(
            <div className='recipe-image'>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  toggleLiked() {
    this.setState({
        liked: !this.state.liked,
    });
  }

  render() {
        var heartChange = {
          'opacity': this.state.liked ? 1 : 0
        };
        return(
            <div className='heart'>
                <img src={heart_VW} alt='heart_VW' />
                <img onClick={this.toggleLiked.bind(this)} style={heartChange} src={heart_Violet} alt='heart_Violet' />
            </div>
        )
  }
}
class Box extends React.Component {
    render() {
        return(
            <div className='recipe-wrapper'>
                <Imagebox src={this.props.src}/>
                <Heart />
                <div className='text-wrapper'>
                    <a href={this.props.href} target='_blank'>{this.props.name}</a>
                    <p>{this.props.recipe}</p>
                </div>
            </div>
        )
    }
}
// var self = this;
class Page1 extends React.Component {
//
//     getBackgroundStyle() {
//         this.setState(function(){
//                     return { backgroundImage : "url('img_fonts/macaroons_1.1.jpg')"
//         };
//     });
// }
//     self.getBackgroundStyle();

    render() {

      return (
        <div className='page-container'>
            <Box src={Tiramisu} name={'Tiramisu'} recipe={'Discover this delicious Italian dessert, which is light, tasty and a real masterpiece.'} href='/tiramisu' />
            <Box src={Brownie} name={'Brownie'} recipe={'The typical chocolate brownies are also a real treat.'} href={'/brownie'}/>
            <Box src={chees_cacke} name={'Chees cacke'} recipe={'This cheesecake you will love, it is rich, sweet and so satisfying.'} href={'/cheescacke'}/>
            <Box src={Fruit_dessert} name={'Fruit dessert'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'/fruitdessert'}/>
        </div>
      )
    }
  }


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.currentComponent}
        <Footer />
      </div>
    )
  }
}

const routes = [
    {
      path: '/',
      action: () => <Page1 />
    },
    {
      path: '/tiramisu',
      action: () => <RecipeTiramisu recipeImg={Tiramisu_big} recipeName={'Tiramisu'} />
   },
   {
     path: '/brownie',
     action: () => <RecipeBrownie recipeImg={Brownie} recipeName={'Brownie'} />
     },
     {
       path: '/cheescacke',
       action: () => <RecipeCheesCacke recipeImg={chees_cacke} recipeName={'Chees cacke'} />
   },
   {
     path: '/fruitdessert',
     action: () => <RecipeFruitDessert recipeImg={Fruit_dessert} recipeName={'Fruit dessert'} />
   }
];


resolve(routes, { path: window.location.pathname }).then(component => {
    ReactDOM.render(<App currentComponent={component} />, document.getElementById('root'));
});


export default App;
