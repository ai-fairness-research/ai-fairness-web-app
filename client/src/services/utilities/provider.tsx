import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { BACKEND_URL } from "../api";
import { LOCALHOST_URL } from "../api";
import { BiasResponse, ContextResponse } from "./types";

class ApiService<T> {
  private BASE_URL: string;
  private ENDPOINT: string;

  constructor(endpoint: string) {
    this.BASE_URL = LOCALHOST_URL;
    this.ENDPOINT = endpoint;
  }

  private async request<R>(config: AxiosRequestConfig): Promise<R> {
    try {
      const response: AxiosResponse<R> = await axios(config);
      return response.data;
    } catch (error) {
      // Handle error (e.g., log, throw, etc.)
      throw new Error("Failed to fetch data");
    }
  }

  public async getAll(): Promise<T> {
    return this.request<T>({
      method: "GET",
      url: `${this.BASE_URL}/${this.ENDPOINT}`,
    });
  }

  public async getById(id: string): Promise<T> {
    return this.request<T>({
      method: "GET",
      url: `${this.BASE_URL}/${this.ENDPOINT}/${id}`,
    });
  }
}

export const biasService = new ApiService<BiasResponse>("survey");
export const contextService = new ApiService<ContextResponse>("context");
