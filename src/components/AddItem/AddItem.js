import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddItem extends Component{

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
      <form onSubmit={(event)=>this.handleSubmit(event)}>
        <input type="text" onChange={(event)=>this.handleChange(event, `description`)} value={this.state.description} placeholder="description" />
        <input type="text" onChange={(event)=>this.handleChange(event, `image_url`)} value={this.state.image_url} placeholder="image url" />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default connect()(AddItem);