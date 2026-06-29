"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = Number((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
const host = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '0.0.0.0';
const app = (0, app_1.buildApp)();
app
    .listen({ port, host })
    .then((address) => {
    app.log.info(`🩺 AgentClinic is open at ${address}`);
})
    .catch((err) => {
    app.log.error(err);
    process.exit(1);
});
