import '../App.css';

function Card({children, img}) {

    let im = !img? 'card-none':'card-img-top';
  return (
    <div className="card">
      <img src={img} className={im} alt="..."></img>  
      <div>{children}</div>
        <a href="#" className="btn btn-primary">recipe</a>
    </div>
  );
}

export default Card;
