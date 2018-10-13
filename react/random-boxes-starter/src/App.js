import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32;
class App extends Component {
  
  randomColor() {
    let randIndex = Math.floor( Math.random() * this.props.allColors.length );
    return this.props.allColors[ randIndex ];
  } 
  constructor(props) {
    super(props);
    //set initial random colors
    const colors = Array( NUM_BOXES ).fill().map( this.randomColor, this );
    this.state = {colors};

    setInterval( (e) => {
      let colors = Array.from( this.state.colors );
      let randIndex = Math.floor( Math.random() * colors.length );
      colors[ randIndex ] = this.randomColor();
      this.setState( { colors });
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
