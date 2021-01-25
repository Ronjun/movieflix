import "./styles.scss";
import { ReactComponent as Image } from "./image 2.svg";

export default function MovieCard() {

  return (
    <div className="card-container" >
      <Image className="card-image" />
      <div className='pl-3 pt-2'>
        <h3 className="card-title"> O retorno do rei</h3>
        <h4 className="card-year">2013</h4>
        <p className="card-subtitle">o olho do inimigo está se movendo</p>
      </div>
    </div>
  );
}
