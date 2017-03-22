import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.min.css';
import Tiramisu from './img_fonts/Tiramisu.jpg';
import Brownie from './img_fonts/Brownie.jpg';
import chees_cacke from './img_fonts/chees_cacke.jpg';
import Jogurt_dessert from './img_fonts/Jogurt_dessert.jpg';
import heart_VW from './img_fonts/heart_VW.png';
import heart_Violet from './img_fonts/heart_Violet.png';
import {Header, Footer} from './Header_Footer.js';
import {Recipe} from './Recipe.js';


class Image extends React.Component {
    render() {
        return(
            <div className='recipe-image'>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}
class Heart extends React.Component {
    render() {
        return(
            <div className='heart'>
                <img src={heart_VW} alt='heart_VW' />
                <img src={heart_Violet} alt='heart_Violet' />
            </div>
        )
    }
}
class Box extends React.Component {
    render() {
        return(
            <div className='recipe-wrapper'>
                <Image src={this.props.src}/>
                <Heart />
                <div className='text-wrapper'>
                    <a href={this.props.href} target='_blank'>{this.props.name}</a>
                    <p>{this.props.recipe}</p>
                </div>
            </div>
        )
    }
}

class Page1 extends React.Component {
    render() {
      return (
        <div className='page-container'>
            <Box src={Tiramisu} name={'Tiramisu'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'https://www.w3schools.com'}/>
            <Box src={Brownie} name={'Brownie'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'#'}/>
            <Box src={chees_cacke} name={'Chees cacke'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'#'}/>
            <Box src={Jogurt_dessert} name={'Jogurt dessert'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'#'}/>
        </div>
      )
    }
  }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Page1 />
        <Recipe recipeImg={Tiramisu} recipeName={'Tiramisu'}/>
        <Footer />
      </div>
    )
  }
}

export default App;
