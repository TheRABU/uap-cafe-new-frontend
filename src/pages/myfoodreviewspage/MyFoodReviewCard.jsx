const MyFoodReviewCard = ({ oneReview, handleDeleteReview }) => {
  const { _id, foodName, userEmail, review, reviewRatings } = oneReview;
  return (
    <>
      <div className="h-auto">
        <div className="card h-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{review}</h2>
            <h3>Food name: {foodName}</h3>
            <h3>Request made by {userEmail}</h3>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  handleDeleteReview(_id);
                }}
                className="btn btn-error"
              >
                Delete Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFoodReviewCard;
