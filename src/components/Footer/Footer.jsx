import s from './Footer.module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Button from 'components/Button/Button';

const Footer = () => {
  return (
    <div className="container">
      <div className={s.footer}>
        <Navigation />
        <Logo />
        <Button title="Purchase now" />
      </div>
    </div>
  );
};

export default Footer;
