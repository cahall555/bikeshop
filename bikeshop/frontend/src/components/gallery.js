import React, { Component } from 'react';
import './gallery.css';


class Gallery extends React.Component {
    render() {
      return <div className='gallery'> {this.props.children}</div>;
    }
  }
export default Gallery;  