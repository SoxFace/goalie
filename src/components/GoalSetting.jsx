import React from 'react';
import GoalSliders from './GoalSliders';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
const GoalSetting = () => (
  <div>
    <RaisedButton label="Open Goal SettingS Panel" secondary={true} fullWidth={true} />
    <Divider />
    <GoalSliders />
  </div>
);

export default GoalSetting;