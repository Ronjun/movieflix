import './styles.scss';

export default function Review(){
  return(
    <div className="reviews-container">
      <h4 className="reviews-author">⭐ John Doe</h4>
      <div className="reviews-content-container">
        <p className="reviews-text">Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  )
}