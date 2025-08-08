import Swal from "sweetalert2";

class MessageService {
    error(title, message = "") {
        Swal.fire({
            icon: "error",
            title,
            text: message,
        });
    }

    success(title, message = "") {
        Swal.fire({
            icon: "success",
            title,
            text: message,
        });
    }

    warning(title, message = "") {
        Swal.fire({
            icon: "warning",
            title,
            text: message,
        });
    }

    info(title, message = "") {
        Swal.fire({
            icon: "info",
            title,
            text: message,
        });
    }

    question(title, message, confirmText="Sim", cancelText="Não", onConfirm = () => {}, onCancel = () => {}) {
        return Swal.fire({
            icon: "question",
            title,
            text: message,
            showCancelButton: true,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                onCancel();
            }
        });
    }
}

export default new MessageService();
