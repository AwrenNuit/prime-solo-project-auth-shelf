import React, {Component} from 'react';
import {connect} from 'react-redux';

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

  render(){
    return(
      <form>
        <input type="text" onChange={(event)=>this.handleChange(event, `description`)} value={this.state.description} placeholder="description" />
        <input type="text" onChange={(event)=>this.handleChange(event, `image_url`)} value={this.state.image_url} placeholder="image url" />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default connect()(InfoPage);
