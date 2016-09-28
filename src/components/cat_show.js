import React from 'react';
import {connect} from 'react-redux';

function CatShow(props) {
  return(
    <div>
      {props.cat.name}
    </div>
  )
}

// export default CatShow;

function mapStateToProps(state, ownProps) {
  const cat = state.cats.find((cat) => {return cat.id == ownProps.params.id}) // Don't use '==='
  return {cat: cat}
}

// connect(MapStateToProps)(CatShow)

const componentCreator = connect(mapStateToProps);
export default componentCreator(CatShow);
