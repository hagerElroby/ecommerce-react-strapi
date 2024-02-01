import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + "5f0643c1f2aa662e1aac198097b8c8223247c53d647d0cc51502052b6aca4d2c168924d02cbac418da5f0b6905b0ed8221394e3e75b82e5855553dfc4c31f8579cd7290c0ad7772f6e982f66041e2a27e20403faac073d8ebea4da2eac3ecb1f61374f32eeb412cb8859d6f24cbef9c86453f700ad10e9aadcc65a4b0a6d555d",
  },
});
