import s from './SectionTemplate.module.css';

const SectionTemplate = ({ url, title, desc }) => {
  return (
    <div className="container">
      <div className={s.containerSection1}>
        <div>
          <img className={s.img} src={url} alt={title} />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.descItem}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTemplate;
