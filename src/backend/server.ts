import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import { port, host } from "./config";
import { search as giphySearch } from "./services/giphy";
import { search as pixabaySearch } from "./services/pixabay";
import HttpError from "./errors/http-error";
import type { SearchResponse } from "../api";

const app = new Koa();
const router = new Router();

router.get("/search", async (ctx) => {
  const searchPhrase = ctx.request.query.q;
  try {
    const [giphyResults, pixabayResults] = await Promise.all([
      giphySearch(searchPhrase),
      pixabaySearch(searchPhrase),
    ]);
    const results: SearchResponse = {
      giphy: giphyResults,
      pixabay: pixabayResults,
    };
    ctx.body = results;
  } catch (err) {
    if (err instanceof HttpError) {
      ctx.status = 502;
      ctx.body = "There was an error fetching search results from Giphy";
    }
  }
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, host);
