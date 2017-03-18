import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import latha from '../../public/latha.jpeg'

const PlayerCard = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Latha The Legend" subtitle="Defender" />}
    >
      <img src={latha} />
    </CardMedia>
    <CardHeader
      title="Club Name"
      subtitle="Year"
      avatar={latha}
    />
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
  </Card>
);

export default PlayerCard;