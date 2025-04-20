const Restaurant = ({ img_id, res_name, rating, price }) => {
  const imageRes =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    img_id;

  return (
    <div className="restaurant_wrapper">
      <div className="img_wrapper">
        <img src={imageRes} alt="" />
      </div>

      <div className="desc_wrapper">
        <p>{res_name}</p>
        <p>{rating}</p>
        <p>{price}</p>

        <p>300 for two</p>
      </div>
    </div>
  );
};
export default Restaurant;
