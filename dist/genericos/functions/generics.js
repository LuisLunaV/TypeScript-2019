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
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericaTres = exports.genericaDos = exports.genericaUno = void 0;
const genericaUno = (arg) => {
    return arg;
};
exports.genericaUno = genericaUno;
const genericaDos = (arg) => {
    return arg;
};
exports.genericaDos = genericaDos;
const url = 'https://backend-pizzeria-remolo-production.up.railway.app/api/categorias';
const genericaTres = () => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield fetch(url);
    const { categoria } = yield resp.json();
    return categoria;
});
exports.genericaTres = genericaTres;
//# sourceMappingURL=generics.js.map