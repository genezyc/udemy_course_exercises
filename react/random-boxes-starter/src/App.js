import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  static randomColor() {
    let randIndex = Math.floor( Math.random() * App.defaultProps.allColors.length );
    return App.defaultProps.allColors[ randIndex ];
  } 
  constructor(props) {
    super(props);
    //set initial random colors
    this.state = {
      colors: (new Array( App.NUM_BOXES )).fill().map( ( _ ) => App.randomColor() ),
    };

    setInterval( (e) => {
      let new_colors = Array.from( this.state.colors );
      let randIndex = Math.floor( Math.random() * new_colors.length );
      new_colors[ randIndex ] = App.randomColor();
      this.setState( { colors: new_colors });
    }, 300 );

  }
  
  render() {
    // generate boxes
    const boxes = this.state.colors.map( ( color, i ) => (
        <Box index={i} color={ color }/>
    ));

    return (
      <div className="App" style={{
        display: "flex",
        flexWrap: "wrap", // so boxes flow over several pages
      }}>
        {boxes}
      </div>
    );
  }
};
App.NUM_BOXES = 32;

const Box = ( prop ) => (
  <div style={{
    backgroundColor: prop.color,
    minWidth: "calc( 100vw / 8 )",  // 8 per row
    height: "calc( 100vw / 8 )",
  }}></div>
);

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
