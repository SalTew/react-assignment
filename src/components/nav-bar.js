import React, { Component } from 'react';
import './nav-bar.css';


class Navigation extends Component {

  render() {
    return (
      <nav className="product-filter">

        <h5>T-shirts</h5>

        <div className="sort">
          <div className="collection-sort">
            <label>FILTER BY:</label>
            <select>
              <option value="/">All Jackets</option>
            </select>
          </div>

          <div className="collection-sort">
            <label>SORT BY:</label>
            <select>
              <option value="/">Featured</option>
            </select>
          </div>

        </div>

      </nav>
    )
  }
}

export default Navigation