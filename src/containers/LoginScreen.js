import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: url(http://lorempixel.com/800/500/nature) no-repeat center center fixed;
  background-size: cover;
  filter: blur(5px);
`
const Card = styled.div`
  position: relative;
  width: 250px;
  margin: 0 auto;
  background: rgba(130,130,130,.3);
  border: 1px solid;
  border-top-color: rgba(255,255,255,.4);
  border-left-color: rgba(255,255,255,.4);
  border-bottom-color: rgba(60,60,60,.4);
  border-right-color: rgba(60,60,60,.4);
`
class LoginScreen extends Component {
  state = {

  }

  render() { 
    return ( 
      <div>
      <Container />
        <Card>fdfd</Card>
      </div>
     )
  }
}
 
export default LoginScreen;