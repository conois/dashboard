/* Servicio para traer información de los hoteles */
import HTTP_METHODS from './Utils/httpMethods';

const url_get_hotels = "https://app.fakejson.com/q/Ny9dg9SL?token=YJGgd00fu0-O0by_WVZMmg";

const getHotels = async () => {
    const resp = await fetch(`${url_get_hotels}`, { method: HTTP_METHODS.GET });
    return await resp.json();
};

export { getHotels };