import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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

const overlayStyle = {
  color: 'white'
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
      role: 'player', //['player', 'parent', 'coach', 'admin'],
      statsClass: ''
    }
  }

  flip(event){
    this.setState({front: !this.state.front});
  }

  fadeOut(event){
    console.log("Present sir!!");
    if(this.state.front){
      this.setState({statsClass: 'back-out'});
    }
    else{
      this.setState({statsClass: ''});
    }
  }

  render(){
    return(
    <div>
    { this.state.front &&
    <Card onClick={this.flip.bind(this)} className="fade-in">
      <CardMedia
        overlay={   <div className="overlay-image">
                        <div className="overlay-children">
                        <CardTitle
                          title="Latha" subtitle="Defender" titleStyle={overlayStyle} subtitleStyle={overlayStyle}/>
                        </div>
                          <div className="overlay-children">
                            <img src={sydneyfc}/>
                          </div>
                    </div>
        }
      >
      <img src={latha} alt="Player Profile"/>

      </CardMedia>

      <CardActions>
        <RaisedButton primary={true} fullWidth={true} label="Open Stats" />
      </CardActions>
    </Card>
    }
    {
      !this.state.front &&
      <div>
      <Card onClick={this.flip.bind(this)}>
        <CardMedia
          overlay={<div className="overlay-image">
                      <div className="overlay-children">
                        <CardTitle title="Latha" subtitle="Defender"
                          titleStyle={overlayStyle} subtitleStyle={overlayStyle}/>
                      </div>
                          <div className="overlay-children">
                            <img src={sydneyfc}/>
                          </div>
                      </div>
                  }
        >
        <img src={latha} alt="Player Profile"/>
        </CardMedia>
        <div className={`fade-in + ${this.state.statsClass}`}>
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
          <RaisedButton primary={true} fullWidth={true}label="Close Stats" onClick={this.fadeOut.bind(this)}/>
        </CardActions>
      </div>
      </Card>
      </div>
    }
    </div>
    );
  }
}
