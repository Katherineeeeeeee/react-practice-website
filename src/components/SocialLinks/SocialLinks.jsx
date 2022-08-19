import s from './SocialLinks.module.css';

import { ReactComponent as Facebook } from '../../pics/svg/facebook.svg';
import { ReactComponent as Linkedin } from '../../pics/svg/linkedin.svg';
import { ReactComponent as Twitter } from '../../pics/svg/twitter.svg';
import { ReactComponent as Youtube } from '../../pics/svg/youtube.svg';
import { ReactComponent as Instagram } from '../../pics/svg/instagram.svg';

const SocialLinks = () => {
  return (
    <ul className={s.list}>
      <li>
        <a href="https://www.facebook.com/" target="_blanked">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" target="_blanked">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blanked">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/" target="_blanked">
          <Youtube />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blanked">
          <Instagram />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
