import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BACKEND_URL } from "../api";
// import { LOCALHOST_URL } from "../api";
import {
  BiasResponse,
  ContextResponse,
  SurveyAnswerPayload,
  SurveyResponse,
} from "./types";

class ApiService<T> {
  private BASE_URL: string;
  private ENDPOINT: string;

  constructor(endpoint: string) {
    this.BASE_URL = BACKEND_URL;
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

  // public async post(payload: SurveyAnswerPayload): Promise<T> {
  //   return this.request<T>({
  //     method: "POST",
  //     body: payload,
  //     url: `${this.BASE_URL}/${this.ENDPOINT}`,
  //   });
  // }

  public async post(payload: SurveyAnswerPayload): Promise<T> {
    try {
      // Send the POST request using axios
      const response: AxiosResponse<T> = await axios.post<T>(
        `${this.BASE_URL}/${this.ENDPOINT}`,
        payload
      );

      // Return the response data
      return response.data;
    } catch (error) {
      console.log(error);
      // Handle errors appropriately
      throw new Error(`Failed to post data: ${error.message}`);
    }
  }
}

export const biasService = new ApiService<BiasResponse>("bias");
export const contextService = new ApiService<ContextResponse>("context");
export const surveyUserService = new ApiService<SurveyResponse>("surveyUser");
