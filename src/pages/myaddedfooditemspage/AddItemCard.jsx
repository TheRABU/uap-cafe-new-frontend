const AddItemCard = ({ item, handleDeleteRequestedItem }) => {
  const { foodName, _id, description, name } = item;
  return (
    <div className="h-auto">
      <div className="card h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>Description: {description}</p>
          <h3>Request made by {name}</h3>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleDeleteRequestedItem(_id);
              }}
              className="btn btn-error"
            >
              Delete Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemCard;
