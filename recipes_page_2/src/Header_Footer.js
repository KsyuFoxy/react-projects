import React from 'react';

export class Header extends React.Component {
    render() {
        return (
          <div className='header'>
                  <p>My recipes</p>
          </div>
    )
  };
}
export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'marginTop': 132
        }
    }
    render() {
        // var screenHeight = window.screen.availHeight;
        // var marginTop = this.state.style.marginTop;
        //
        // console.log(marginTop)

      return (
        <div className='footer' style={{marginTop: this.state.value + 'px'}}>
              <p>@ Copyright 2017 All rights reserved</p>
        </div>
      )
    }
  }
