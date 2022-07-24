import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000
});

export const subscribe = async (email = '') => {
    try {
        //Conexión con API
        console.log(email);
        Toast.fire({
            icon: 'success',
            title: 'Te avisaremos cuando todo esté listo.'
        });

        return true;
    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: 'Ocurrió un error, inténtelo de nuevo.'
        });

        return false;
    }
}