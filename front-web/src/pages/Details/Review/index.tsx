import { UserReview } from "../../../types";
import "./styles.scss";

type Props = {
  review: UserReview;
};
export default function Review({ review }: Props) {
  return (
    <div className="reviews-container">
      <h4 className="reviews-author">⭐ {review.userName}</h4>
      <div className="reviews-content-container">
        <p className="reviews-text">{review.text}</p>
      </div>
    </div>
  );
}
