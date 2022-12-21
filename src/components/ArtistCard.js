function ArtistCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img alt="artists" src={props.image} />
      <p>Songs:{props.famousSong}</p>
    </div>
  );
}

export default ArtistCard;
