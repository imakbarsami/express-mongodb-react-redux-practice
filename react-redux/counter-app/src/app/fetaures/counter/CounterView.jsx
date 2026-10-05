import { useDispatch, useSelector } from "react-redux"
import { countByAmount, decrement, increment, reset } from "./counterSlice"

const CounterView = () => {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  console.log(count);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Counter</h2>

        <div className="count-value">{count}</div>

        <div className="button-group">
          <button
            className="btn increment-btn"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="btn decrement-btn"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            className="btn reset-btn"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>

          <button
            className="btn amount-btn"
            onClick={() => dispatch(countByAmount(5))}
          >
            +5
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounterView