import React from 'react';

class UserMovieList extends React.Component {
  
  render () {
    return <p>{this.props.userName}&rsquo;s favorite movie is {this.props.movieName}</p>
  }
  
}

export default UserMovieList;