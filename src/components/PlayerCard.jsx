import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import latha from '../../public/latha.jpeg';
import sydneyfc from '../../public/sydneyfc.png';


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
        <CardTitle title="Club Stats" subtitle="MVP Stats" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>

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
