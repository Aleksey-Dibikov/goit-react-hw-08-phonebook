import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth/auth-selector';
import s from './Style.module.css';

export default function AppBar() {
  const isAuth = useSelector(authSelectors.getIsAuth);

  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute('page_id', '102675375879599');
  chatbox.setAttribute('attribution', 'biz_inbox');

  window.fbAsyncInit = function () {
    window.FB.init({
      xfbml: true,
      version: 'v14.0',
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  return (
    <div>
      <header className={s.header}>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </header>

      <div>
        <div id="fb-root"></div>
        <div id="fb-customer-chat" class="fb-customerchat"></div>
      </div>
    </div>
  );
}
