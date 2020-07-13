/* Servicio para traer información de los hoteles */
import HTTP_METHODS from './Utils/httpMethods';

/* const url_get_hotels = "https://app.fakejson.com/q/Ny9dg9SL?token=YJGgd00fu0-O0by_WVZMmg";
 */const url_get_hotels = "http://localhost:3001/hotels";


const getHotels = async () => {
    const resp = await fetch(`${url_get_hotels}`, { method: HTTP_METHODS.GET });
    console.log(resp);
    return resp;
};

export { getHotels };