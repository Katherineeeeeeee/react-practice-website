import s from './Footer.module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Button from 'components/Button/Button';
import SocialLinks from 'components/SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.topFooter}>
          <p> ©2020 Yourcompany</p>
          <Logo />
          <Button title="Purchase now" />
        </div>
        <span className={s.line}></span>

        <div className={s.downFooter}>
          <Navigation />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
