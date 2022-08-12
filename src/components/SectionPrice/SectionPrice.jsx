import s from './SectionPrice.module.css';
import Button from 'components/Button/Button';
import GlobalStyles from 'GlobalStyles/GlobalStyles.module.css';

const SectionPrice = () => {
  return (
    <div className="container">
      <div className={s.container}>
        <h2 className={`title ${s.title}`}>A Price To Suit Everyone</h2>
        <p className={`txt ${s.txt}`}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <p className={s.price}>$40</p>
        <p className={s.priceDesc}>UI Design Kit</p>
        <p className={s.priceSee}>See, One price. Simple.</p>
        <Button title="Purchase Now" />
      </div>
    </div>
  );
};

export default SectionPrice;
