"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const node_path_1 = __importDefault(require("node:path"));
const fastify_1 = __importDefault(require("fastify"));
const view_1 = __importDefault(require("@fastify/view"));
const eta_1 = require("eta");
/**
 * Builds the AgentClinic Fastify app: view engine + routes, no network listen.
 * Kept separate from `index.ts` so tests can `inject` without binding a port.
 */
function buildApp() {
    const app = (0, fastify_1.default)({
        logger: true,
    });
    // Server-side rendering via Eta, with a shared base layout.
    app.register(view_1.default, {
        engine: { eta: new eta_1.Eta() },
        root: node_path_1.default.join(__dirname, 'views'),
        layout: 'layout.eta',
    });
    // Home: the minimal AgentClinic front desk.
    app.get('/', (_request, reply) => __awaiter(this, void 0, void 0, function* () {
        return reply.view('home.eta', {
            title: 'AgentClinic — relief for over-prompted agents',
        });
    }));
    // Health: is the clinic open?
    app.get('/health', () => __awaiter(this, void 0, void 0, function* () {
        return { status: 'ok' };
    }));
    return app;
}
