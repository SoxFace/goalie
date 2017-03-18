import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import latha from '../../public/latha.jpeg';
import sydneyfc from '../../public/sydneyfc.png';
import {blue100} from 'material-ui/styles/colors';

// Back page
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto'
  }
};

export default class PlayerCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      front: true,
      club: 'Sydney FC',
      gradeType: 'Senior', //['Senior', 'Junior', 'Vet'],
      gradeStandard:  'Division 4', //['A/W League', 'Premier', 'Club'],
      team: 'name of team',
      role: 'player', //['player', 'parent', 'coach', 'admin']
    }
  }

  flip(event){
    this.setState({front: !this.state.front});
  }

  render(){
    return(
    <div>
    { this.state.front &&
    <Card onClick={this.flip.bind(this)}>
      <CardMedia 
        overlay={<CardTitle 
          title="Latha Front" subtitle="Defender" />}
      >
        <img src={latha} alt="Player Profile"/>
      </CardMedia>
      <img src={sydneyfc} alt="logo" style={{width: '80px', paddingTop: '5px'}} />
      <CardActions>
        <RaisedButton primary={true} fullWidth={true}label="FLIP ME" />
      </CardActions>
    </Card>
    }
    {
      !this.state.front &&
      <div className="back">
      <Card onClick={this.flip.bind(this)}>
        <CardMedia
          overlay={<CardTitle title="Latha Back" subtitle="Defender" />}
        >
        </CardMedia>
        <CardTitle title="Club Stats" />
          <div style={styles.wrapper}>
            <Chip style={styles.chip}>
              <Avatar size={32}>'15</Avatar>
              Debut Year
            </Chip>
            <Chip style={styles.chip}>
              <Avatar size={32}>27</Avatar>
              Age
            </Chip>
            <Chip style={styles.chip}>
              <Avatar size={32}>5'4</Avatar>
              Height
            </Chip>
            <Chip style={styles.chip}>
              <Avatar size={32}>2</Avatar>
              Previous Clubs
            </Chip>
            <Chip style={styles.chip}>
              <Avatar size={32}>37</Avatar>
              Games Played
            </Chip>
            <Chip style={styles.chip}>
              <Avatar size={32}>2</Avatar>
              MVP's Earned
            </Chip>
            <Chip style={styles.chip}>
              <Avatar size={32}>15</Avatar>
              Goals
            </Chip>
          </div>

        <CardTitle title="Currently Working On"/>
            <div style={styles.wrapper}>
            <Chip style={styles.chip} backgroundColor={blue100}>
              1 on 1
            </Chip>
            <Chip style={styles.chip} backgroundColor={blue100}>
              Ball Control
            </Chip>
            <Chip style={styles.chip} backgroundColor={blue100}>
              Speed
            </Chip>
          </div>
        <CardActions>
          <RaisedButton primary={true} fullWidth={true}label="FLIP ME" />
        </CardActions>
      </Card>
      </div>
    }
    </div>
    );
  }
}
