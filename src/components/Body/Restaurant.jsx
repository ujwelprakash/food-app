const Restaurant = ({ img, res_name, rating, price }) => {
  return (
    <div className="restaurant_wrapper">
      <div className="img_wrapper">
        <img src={img} alt="" />
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
