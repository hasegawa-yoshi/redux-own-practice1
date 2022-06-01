import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction, signOutAction } from './reducks/users/actions';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state)

  console.log(selector);

  return (
    <div className="App">
      <h1>Redux学習</h1>
      <button onClick={ () => dispatch(signInAction({uid:"0000", username:"yoshi"}))}>
        Sign in
      </button>
      <br />
      <br />
      <button onClick={ () => dispatch(signOutAction())}>
        Sign out
      </button>
    </div>
  );
}

export default App;
