import React, {useReducer} from 'react'

const ACTIONS = {
  SET_FIELD: 'Set_Field',
  RESET: 'Reset',
  SET_ERRORS: 'Set_Errors'
}
const initialState = { 
    username: '', 
    email: '', 
    errors: {}, 
    submitted: false, 
};

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.SET_FIELD:
       return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' }
      };
    case ACTIONS.RESET:
      return initialState;
    case ACTIONS.SET_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}


export default function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SET_FIELD, field: e.target.name, value: e.target.value });
  };
  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!state.username.trim()) errors.username = 'Username is required';
    dispatch({ type: ACTIONS.SET_ERRORS, errors });
   
    if (Object.keys(state.errors).length === 0) {
      console.log(`Form submitted successfully!\nUsername: ${state.username}\nEmail: ${state.email}`);
    }
  };
  return (
    <div>
      <h1>Reducer Form</h1>
      <hr/>
      <form onSubmit={handleSubmit} noValidate>
      <>
        <label>Username:</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </>
        <>
        <label>Email:</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </>
        <button type="submit" style={{ marginRight: '10px', padding: '8px 12px' }}>
          Submit
        </button>
        <button type="button" onClick={handleReset} style={{ padding: '8px 12px' }}>
          Reset
        </button>
      </form>
      <div style={{ color: 'red', marginTop: '10px' }}>
        {Object.values(state.errors).map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>

    </div>
  )
}
