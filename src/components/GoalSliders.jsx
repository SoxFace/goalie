import React from 'react';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */

const style = {
  marginBottom: '5px'
}

const GoalSliders = () => (
  <div>
    <h3>SET YOUR GOALS</h3>
    <p><span style={{color: 'red', position: 'relative', left: '-200px'}}>NOW</span><span style={{color: 'green', position: 'relative',  right: '-200px'}}>GOAL</span></p>
    <p>1 on 1</p>
    <Slider defaultValue={0} />
    <p>Ball Control</p>
    <Slider defaultValue={0} />
    <p>First touch</p>
    <Slider defaultValue={0} />
     <RaisedButton label="Submit" primary={true} style={style} />
  </div>
);

export default GoalSliders;