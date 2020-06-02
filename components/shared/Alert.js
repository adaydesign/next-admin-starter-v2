import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

export default function Alert(props, thenHandle) {
    if (thenHandle) {
        MySwal.fire({
            ...props
        }).then(result => {
            thenHandle(result)
        })
    } else {
        MySwal.fire({
            ...props
        })
    }
}
