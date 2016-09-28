import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// export default function CatsIndex() {
function CatsIndex(props) { // changed w/ MapStateToProps addition below...
  return (
    <div className='cats-index'>
      {/* LOTS OF CATS */}
      <Link to="/cats/new" >Add Cat</Link>
      <ul>
        {props.cats.map(cat => <Link to={`/cats/${cat.id}`}><li key={cat.id}> {cat.name} </li></Link>)}
      </ul>
      {props.children}
    </div>
  )
}

function MapStateToProps(state){
  return {
    cats: state.cats
  }
}

const componentCreator = connect(MapStateToProps);
export default componentCreator(CatsIndex);
