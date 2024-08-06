import axios from 'axios'
import HttpClient from './HttpClient'

export default class AxiosAdapter implements HttpClient {
  async get<T>(url: string, config?: any): Promise<T> {
    const response = await axios.get(url, config)
    return response.data
  }

  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    const response = await axios.post(url, data, config)
    return response.data
  }

  async patch<T>(url: string, data: T): Promise<T> {
    const response = await axios.patch<T>(url, data)
    return response.data
  }

  async put<T>(url: string, data?: any, config?: any): Promise<T> {
    const response = await axios.put(url, data, config)
    return response.data
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    const response = await axios.delete(url, config)
    return response.data
  }
}
