import { Response } from "node-fetch";

export class HttpError extends Error {
  response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

export default HttpError;
