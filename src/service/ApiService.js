import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  timeout: 10000,
});

instance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    if (error.response?.status === 500) {
      console.error(
        "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde."
      );
      return Promise.reject(error);
    } else if (error.response?.status === 404) {
      console.error(
        "Recurso não encontrado. Verifique a URL e tente novamente."
      );
      return Promise.reject(error);
    } else if (error.response?.status === 400) {
      console.error("Requisição inválida. Verifique os dados enviados.");
      return Promise.reject(error);
    } else if (error.response?.status === 401) {
      console.error("Não autorizado. Verifique suas credenciais.");
      return Promise.reject(error);
    } else if (error.response?.status === 403) {
      console.error("Acesso proibido. Você não tem permissão para acessar este recurso.");
      return Promise.reject(error);
    } else {
      console.error("Ocorreu um erro desconhecido: ", error.message);
      return Promise.reject(error);
    }
  }
);

class ApiService {
  get(url) {
    return instance.get(url);
  }
  post(url, data) {
    return instance.post(url, data);
  }

  postFile(url, data) {
    return instance.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  patch(url, data) {
    return instance.patch(url, data);
  }

  delete(url) {
    return instance.delete(url);
  }
}

export default new ApiService();