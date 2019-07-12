import React from 'react';

import { connect } from 'react-redux'
import { increment, decrement} from './actions'

function Counter({count, increment, decrement}) {
  return (
    <div style={{display: 'flex', width: 200, justifyContent: 'space-between'}}>
      <button onClick={() => increment(11)}>+</button>
      <p>Contador: {count}</p>
      <button onClick={() => decrement(5)}>-</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: (value) => dispatch(increment(value)),
  decrement: (value) => dispatch(decrement(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
