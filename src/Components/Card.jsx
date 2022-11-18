const Card = (props) => {
  let prop = props.item;
  return (
    <main>
      <div className="img--cont">
        <img src={prop.imageUrl} />
      </div>
      <section className="main--section">
        <h3>
          {prop.location}
          <a href={prop.googleMapsUrl}>View on Google Maps</a>
        </h3>
        <h2>{prop.title}</h2>
        <div>
          <span>
            {prop.startDate} - {prop.endDate}
          </span>
        </div>
        <p>{prop.description}</p>
      </section>
    </main>
  );
};

export default Card;
