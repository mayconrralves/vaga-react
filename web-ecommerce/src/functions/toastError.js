import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messageError } from '../utils';

const styleOptions =  {
    borderRadius: '20px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    width: '270px',
}
export const toastMessageError = msgError => {
    return toast.error(
                        msgError.message 
                        ? 
                        messageError(msgError.message)
                        :
                        msgError, {
                            autoClose: 3000,
                            style: styleOptions,
                          }
                )
}

export const toastMessageSuccess = msg => {

    return toast.success(msg, {
        autoClose: 3000,
        style: styleOptions,
    });
}