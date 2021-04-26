import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messageError } from '../utils';

const styleOptions =  {
    borderRadius: '20px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    width: '270px',
}
export const toastMessageError = (msgError) => {

    return toast.error(messageError(msgError.message), {
        autoClose: 3000,
        style: styleOptions,
    })
}