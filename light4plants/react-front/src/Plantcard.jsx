import "./Plantcard.css"

function Plantcard({plant}) {

const { name, latin_name, image, description, light_level, light_type, rareness, difficulty } = plant;

  return (
    <div className="plantcard">
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-subtitle">{latin_name}</h3>
        <img src={image} alt={name} className="card-image" />

        <div className="card-description">
        <dl>
            <dt>Light Level: </dt>
            <dd>{light_level.length > 1 ? `${light_level[0]} to ${light_level[light_level.length - 1]}` : light_level[0]}</dd>
            <dt>Light Type:  </dt><dd>{light_type}</dd>
            <dt>Rareness:  </dt><dd>{rareness}</dd>
            <dt>Care Difficulty: </dt><dd>{difficulty.length > 1 ? `${difficulty[0]} +` : difficulty[0]}</dd>
        </dl>
        <p>{description}</p>
        </div>
    </div>
    </div>
  )
}

export default Plantcard