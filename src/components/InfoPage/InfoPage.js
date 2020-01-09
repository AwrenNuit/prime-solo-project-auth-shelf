import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddItem from '../AddItem/AddItem';

import ShelfItem from '../ShelfItem/ShelfItem';

class InfoPage extends Component{

  componentDidMount(){
    this.props.dispatch({type: 'GET_SHELF'});
  }

  render(){
    return(
      <div>
        <AddItem />
        <div>
          {this.props.shelf.map(item => <ShelfItem item={item} key={item.id} />)}
        </div>
      </div>
    );
  }
}

export default connect(reduxState=>({shelf: reduxState.shelfReducer}))(InfoPage);