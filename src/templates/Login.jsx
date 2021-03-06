import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push('/'))}>
        ログイン
      </button>
    </div>
  )
}

export default Login;