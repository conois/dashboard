/* Servicio para traer información de los hoteles */
import HTTP_METHODS from './Utils/httpMethods';

const url_get_messages = "https://jsonplaceholder.typicode.com/posts/1/comments";
const url_get_messages_todo = "https://jsonplaceholder.typicode.com/comments";


const getMessages = async () => {
    const resp = await fetch(`${url_get_messages}`, { method: HTTP_METHODS.GET });
    return await resp;
};

const getAllMessages = async () => {
    const resp = await fetch(`${url_get_messages_todo}`, { method: HTTP_METHODS.GET });
    return await resp;
};

export {
    getMessages,
    getAllMessages,
};


