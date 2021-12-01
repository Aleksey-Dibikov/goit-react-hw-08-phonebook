import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth/auth-selector';
import s from './Style.module.css'

export default function AppBar() {
  const isAuth = useSelector(authSelectors.getIsAuth);
  return (
    <header className={s.header}>
      <Navigation />
      {isAuth  ? <UserMenu /> : <AuthNav />}
    </header>
  );
}