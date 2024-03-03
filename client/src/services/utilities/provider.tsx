import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BACKEND_URL } from "../api";
// import { LOCALHOST_URL } from "../api";
import {
  BiasResponse,
  ContextResponse,
  SurveyAnswerPayload,
  SurveyResponse,
  Bias,
} from "./types";

const token = localStorage.getItem("moral-token");

export class ApiService<T, P> {
  private BASE_URL: string;
  private ENDPOINT: string;
  private ADDITIONAL_URL: string | undefined;
  private TOKEN: string | null;

  constructor(endpoint: string, additionalUrl?: string) {
    this.BASE_URL = BACKEND_URL;
    this.ENDPOINT = endpoint;
    this.ADDITIONAL_URL = additionalUrl;
    this.TOKEN = token;
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
    let url: string;
    if (this.ADDITIONAL_URL) {
      url = `${this.BASE_URL}/${this.ENDPOINT}/${this.ADDITIONAL_URL}`;
    } else {
      url = `${this.BASE_URL}/${this.ENDPOINT}`;
    }

    return this.request<T>({
      method: "GET",
      url: url,
      headers: {
        "auth-token": this.TOKEN,
      },
    });
  }

  public async getById(id: string): Promise<T> {
    return this.request<T>({
      method: "GET",
      url: `${this.BASE_URL}/${this.ENDPOINT}/${id}`,
      headers: {
        "auth-token": this.TOKEN,
      },
    });
  }

  public async post(payload: P): Promise<T> {
    try {
      // Send the POST request using axios
      let url;
      if (this.ADDITIONAL_URL) {
        url = `${this.BASE_URL}/${this.ENDPOINT}/${this.ADDITIONAL_URL}`;
      } else {
        url = `${this.BASE_URL}/${this.ENDPOINT}`;
      }

      const response: AxiosResponse<T> = await axios.post<T>(url, payload);

      // Return the response data
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      // Handle errors appropriately
      throw new Error(`Failed to post data: ${error}`);
    }
  }

  public async put(payload: P): Promise<T> {
    try {
      // Send the POST request using axios
      let url;
      if (this.ADDITIONAL_URL) {
        url = `${this.BASE_URL}/${this.ENDPOINT}/${this.ADDITIONAL_URL}`;
      } else {
        url = `${this.BASE_URL}/${this.ENDPOINT}`;
      }

      const headers = {
        "auth-token": this.TOKEN,
      };

      const response: AxiosResponse<T> = await axios.put<T>(url, payload, {
        headers: headers,
      });

      // Return the response data
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      // Handle errors appropriately
      throw new Error(`Failed to post data: ${error}`);
    }
  }
}

export const biasService = new ApiService<BiasResponse, Bias[]>("bias");
export const contextService = new ApiService<ContextResponse, null>("context");
export const surveyUserService = new ApiService<
  SurveyResponse,
  SurveyAnswerPayload
>("surveyUser");
