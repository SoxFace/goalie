import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import latha from '../../public/latha.jpeg'
import sydneyfc from '../../public/sydneyfc.png'
import PlayerCardStats from './PlayerCardStats.jsx';
import ReactDOM from 'react-dom';

export default class PlayerCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      front: true
    }
  }

  flip(event){
    console.log(event);
    this.setState({front: !this.state.front});
  }

  render(){
    return(
    <div>
    { this.state.front &&
    <Card onClick={this.flip.bind(this)}>
      <CardMedia
        overlay={<CardTitle title="Latha The Legend" subtitle="Defender" />}
      >
        <img src={latha} />
      </CardMedia>
      <CardTitle title="Club Stats" subtitle="MVP Stats" />
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
      <CardHeader
        title="Sydney FC"
        subtitle="2017"
        avatar={sydneyfc}
      />
    </Card>
    }
    {
      !this.state.front &&
      <div className="back">
      <Card onClick={this.flip.bind(this)}>
        <CardMedia
          overlay={<CardTitle title="Latha The Legend" subtitle="Defender" />}
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
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardHeader
          title="Sydney FC"
          subtitle="2017"
          avatar={sydneyfc}
        />
      </Card>
      </div>
    }
    </div>
    );
  }
}
