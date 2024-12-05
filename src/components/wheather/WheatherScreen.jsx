import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWheather } from "../../store/slices/wheatherSlice";

const WheatherScreen = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch()
  const {data,error , loading} = useSelector(state=>state.wheather)
  console.log(data);
  
  const handleSubmit = (e)=>{
    e.preventDefault ()
    if (city.trim()) {
      dispatch(fetchWheather(city.trim()))
    }
    setCity('')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name ..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none  focus:border-blue-500"
          />
               <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading?'Loading ...':'Search'}
          </button>
        </div>
      </form>
      {error &&  (
        <div className="p-4 bg-red-100 text-red-700  rounded-lg">
          {error}
        </div>
      )}
{
  data &&(

<div className="bg-white p-4 rounded-lg shadow">
<h3 className="text-xl font-semibold mb-2">{data.name}</h3>
<div className="grid grid-cols-2 gap-4">
  <div>
    <p className="text-gray-600">Temperature</p>
    <p className="text-2xl"> {Math.round(data.main.temp)}°C</p>
  </div>
  <div>
    <p className="text-gray-600">Wheather</p>
    <p className="text-2xl capitalize"> {data.weather[0].description}</p>
  </div>
  <div>
    <p className="text-gray-600">Humidity</p>
    <p className="text-2xl capitalize">{data.main.humidity} %</p>
  </div>
  <div>
    <p className="text-gray-600">Wind speed </p>
    <p className="text-2xl ">{data.wind.speed} m/s</p>
  </div>
  
</div>

</div>
  )
}

    </>
  );
};

export default WheatherScreen;
