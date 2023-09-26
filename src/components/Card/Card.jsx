import "./Card.css"

export default function Card(props) {
    console.log(props);
    const item = props.item;
    
    return <div className="card">
    <h2>{item.nome}</h2>
    <tag>World Tour</tag>
    <tag>No more tickets</tag>
    <p><tag>Available</tag></p>
    <p></p>
    <img src={item.imagemUrl} />
    
  </div>
}