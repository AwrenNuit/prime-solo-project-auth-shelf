import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddItem from '../AddItem/AddItem';

class InfoPage extends Component{

  render(){
    return(
      <>
        <AddItem />
      </>
    );
  }
}

export default connect()(InfoPage);
