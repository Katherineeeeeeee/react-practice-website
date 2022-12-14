import Button from 'components/Button/Button';

import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroWrap}>
          <h1 className={s.heroTitle}>
            Introduce Your Product Quickly & Effectively
          </h1>

          <p className={s.heroTxt}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          <div className={s.heroBtnWrap}>
            <Button title="Purchase UI Kit" />
            <Button title="Learn More" light={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
