import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import { port, host } from "./config";
import { search as giphySearch } from "./services/giphy";
import HttpError from "./errors/http-error";
import type { SearchResponse } from "../api";

const app = new Koa();
const router = new Router();

router.get("/search", async (ctx) => {
  const searchPhrase = ctx.request.query.q;
  try {
    const results: SearchResponse = {
      giphy: await giphySearch(searchPhrase),
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
