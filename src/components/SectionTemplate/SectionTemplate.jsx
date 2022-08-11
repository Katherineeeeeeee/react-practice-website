const SectionTemplate = ({ url, title, desc }) => {
    console.log('url :>> ', url);
  return (
    <div className="container">
      <div>
        <img src={url} alt={title} />
      </div>

      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SectionTemplate;
