import axios from "axios";

const MyOrderCard = ({ orders, handleDeleteOrder }) => {
  const {
    _id,
    FoodName,
    FoodImage,
    orderQuantity,
    Price,
    name,
    email,
    date,
    status,
  } = orders;

  return (
    <div className="h-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          {FoodImage ? (
            <img src={FoodImage} alt="Shoes" />
          ) : (
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          )}
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">{FoodName}</h2>
            <p>Quantity {orderQuantity}</p>
          </div>
          <div className="text-center">
            <div className="text-left">
              <ul>
                <li>Name: {name}</li>
              </ul>
              <ul>
                <li>Email: {email}</li>
              </ul>

              <ul>
                <li>Order Placed in: {date}</li>
              </ul>
            </div>
            <div className="block text-left">
              <ul>
                <li>Price: {Price}</li>
              </ul>
              <ul>
                <li>Status: {status}</li>
              </ul>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-error"
            >
              Delete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
