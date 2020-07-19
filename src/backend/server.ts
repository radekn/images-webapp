import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";

const app = new Koa();
const router = new Router();

router.get("/hello", (ctx) => {
  ctx.body = "Hello there!";
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(process.env.PORT ?? 8000);
