import axios from 'axios'

// Merkezi axios instance: base URL ve default header'lar tek yerden yönetilir,
// component'lerin içine axios konfigürasyonu dağılmaz (Görev 6 - ileri düzey kriter).
const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1',
  },
  timeout: 10000,
})

export default axiosInstance
