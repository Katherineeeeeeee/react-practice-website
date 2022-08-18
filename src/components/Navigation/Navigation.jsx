import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.classList}>
        <li className={s.navTxt}>Home</li>
        <li className={s.navTxt}>About</li>
        <li className={s.navTxt}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
