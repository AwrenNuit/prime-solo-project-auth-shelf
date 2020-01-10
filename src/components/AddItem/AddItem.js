import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    this.setState({
      description: '',
      image_url: ''
    });
  }

  render(){
    return(
      <form className="add-item-form" onSubmit={(event)=>this.handleSubmit(event)}>
        
        <TextField 
          id="outlined-basic" 
          label="description" 
          variant="outlined"
          onChange={(event)=>this.handleChange(event, `description`)} 
          value={this.state.description}
          style={{marginBottom:"10px",marginTop:"40px",backgroundColor:"white"}}
        />
        <br />

        <TextField 
          id="outlined-basic" 
          label="image url" 
          variant="outlined"
          onChange={(event)=>this.handleChange(event, `image_url`)} 
          value={this.state.image_url}
          style={{marginBottom:"10px",backgroundColor:"white"}}
        />
        <br />

        <Button 
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Item
        </Button>

      </form>
    );
  }
}

export default connect()(AddItem);