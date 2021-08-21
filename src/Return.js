import React from "react"
import './return.css';
import './Home.js'
import { Link } from 'react-router-dom';
import './App.css';
 
function Return(props) {
  return (
    <div id="return">
      <Link to="/index">&#x2190; Return to Main Content</Link>
    </div>
  )
}
 
export default Return;