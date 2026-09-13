import Swal, { type SweetAlertIcon } from 'sweetalert2';

export const mostrarAlerta = (
    titulo: string, texto: string, icone: SweetAlertIcon, corDoBotao: string = '#3f51b5'
) => {
    Swal.fire({
        title: titulo, text: texto, icon: icone, confirmButtonColor: corDoBotao
    });
};
