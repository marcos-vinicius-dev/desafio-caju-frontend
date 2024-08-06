export default interface HttpClient {
  get(url: string, config?: any): Promise<any>
  post(url: string, data?: any, config?: any): Promise<any>
  patch(url: string, data?: any): Promise<any>
  put(url: string, data?: any, config?: any): Promise<any>
  delete(url: string, config?: any): Promise<any>
}
