import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddItem from '../AddItem/AddItem';

import ShelfItem from '../ShelfItem/ShelfItem';

class InfoPage extends Component{

  render(){
    return(
<<<<<<< HEAD
      <div>
        {/* {this.props.shelf.map(item => <ShelfItem item={item} />)} */}
        {JSON.stringify(this.props.reduxState)}
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input type="text" onChange={(event)=>this.handleChange(event, `description`)} value={this.state.description} placeholder="description" />
          <input type="text" onChange={(event)=>this.handleChange(event, `image_url`)} value={this.state.image_url} placeholder="image url" />
          <button type="submit">Add Item</button>
        </form>
      </div>
=======
      <>
        <AddItem />
      </>
>>>>>>> a05a52e7892324f77252f668a1924d26e201061a
    );
  }
}

export default connect(reduxState=>reduxState)(InfoPage);
