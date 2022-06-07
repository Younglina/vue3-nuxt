import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: '',
}

class Http {
  constructor() {
    this.httpInterceptorRequest()
    this.httpInterceptorReponse()
  }

  private static axiosInstance = axios.create(defaultConfig)

  private httpInterceptorRequest() {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, (error) => {
      return Promise.reject(error)
    })
  }

  private httpInterceptorReponse() {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, (error) => {
      return Promise.reject(error)
    })
  }

  public httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.get(url, { params }).then(res => res.data).catch()
  }

  public httpPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.post(url, { params }).then(res => res.data).catch()
  }
}

export const http = new Http()
