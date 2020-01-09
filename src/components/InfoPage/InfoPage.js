import React, {Component} from 'react';
import {connect} from 'react-redux';

import ShelfItem from '../ShelfItem/ShelfItem';

class InfoPage extends Component{

  state = {
    description: '',
    image_url: ''
  }

  handleChange = (e, propName) => {
    this.setState({
      [propName]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({type: `POST_ITEM`, payload: this.state});
  }

  render(){
    return(
      <div>
        {/* {this.props.shelf.map(item => <ShelfItem item={item} />)} */}
        {JSON.stringify(this.props.reduxState)}
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input type="text" onChange={(event)=>this.handleChange(event, `description`)} value={this.state.description} placeholder="description" />
          <input type="text" onChange={(event)=>this.handleChange(event, `image_url`)} value={this.state.image_url} placeholder="image url" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default connect(reduxState=>reduxState)(InfoPage);
