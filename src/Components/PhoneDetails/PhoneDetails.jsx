import { useLoaderData, useNavigate, useParams } from 'react-router';
import Button from '../ui/Button.jsx/Button';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const navigate = useNavigate();

  const singlePhone = data.find(phone => phone.id === parseInt(id));

  // console.log(Object.keys(singlePhone).join(','));
  const {
    brand,
    name,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone;

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116.97px)]">
      <div className=" bg-blue-200 p-40">
        <div className="flex p-4 shadow-2xl bg-blue-50 gap-4">
          <div className="flex items-center">
            <img className="rounded-xl" src={image} alt="" />
          </div>
          <div className="">
            <h2 className="text-4xl font-bold">{name}</h2>
            <div className="text-xl my-5 space-y-1">
              <h4>Model: {model}</h4>
              <p>Brand: {brand}</p>
              <p>Canara: {camera_info}</p>
              <p>Description: {description}</p>
            </div>
            <div className="flex justify-end items-end gap-2">
              <button>
                <Button label="Cart"></Button>
              </button>
              <button>
                <Button label="Favorite"></Button>
              </button>
              <button onClick={() => navigate(-1)}>
                <Button label="Back"></Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
