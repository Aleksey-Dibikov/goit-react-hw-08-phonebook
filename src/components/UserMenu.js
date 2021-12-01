import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/auth-selector';
import { logOut } from '../redux/auth/auth-operation';
import s from './Style.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>Welcome, { name }</span>
      <button type="button"
        className={s.logOut_button}
        onClick={() => dispatch(logOut())}
      >
        Exit
      </button>
    </div>
  );
}