import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectNumberValue,
  selectStringValue,
} from "../../redux/sample/sample.selectors";

import { sampleActions } from "../../redux/sample/sample.slice";

const SamplePage = () => {
  const dispatch = useDispatch();
  const stringValue = useSelector(selectStringValue);
  const numberValue = useSelector(selectNumberValue);

  const [values, setValues] = useState({
    stringValue,
    numberValue,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitStringValue = (event) => {
    event.preventDefault();

    dispatch({
      type: sampleActions.submitStringValue.type,
      payload: values.stringValue,
    });
  };

  const submitNumberValue = (event) => {
    event.preventDefault();

    dispatch({
      type: sampleActions.submitNumberValueByAmount.type,
      payload: parseInt(values.numberValue, 10),
    });
  };

  const increment = () => {
    dispatch({
      type: sampleActions.increment.type,
    });
  };

  const decrement = () => {
    dispatch({
      type: sampleActions.decrement.type,
    });
  };

  return (
    <div>
      <h1>Redux Sample Page</h1>
      <div>
        String Value: <span>{stringValue ? stringValue : "Empty String"}</span>
        <div>
          <form onSubmit={submitStringValue}>
            <input
              name="stringValue"
              type="text"
              value={values.stringValue}
              onChange={handleChange}
            />
            <button>Submit String</button>
          </form>
        </div>
      </div>
      <div>
        Number Value: <span>{numberValue}</span>
        <div>
          <form onSubmit={submitNumberValue}>
            <input
              name="numberValue"
              type="number"
              value={values.numberValue}
              onChange={handleChange}
            />
            <button>Submit Number</button>
          </form>
        </div>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
