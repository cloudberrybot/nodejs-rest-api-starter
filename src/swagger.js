"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'localhost:3000'
};
const outputFile = './swagger-output.json';
const routes = ['./routes/noteRoutes.ts'];
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
void (0, swagger_autogen_1.default)()(outputFile, routes, doc);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN3YWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRUFBNEM7QUFFNUMsTUFBTSxHQUFHLEdBQUc7SUFDVixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsUUFBUTtRQUNmLFdBQVcsRUFBRSxhQUFhO0tBQzNCO0lBQ0QsSUFBSSxFQUFFLGdCQUFnQjtDQUN2QixDQUFBO0FBRUQsTUFBTSxVQUFVLEdBQUcsdUJBQXVCLENBQUE7QUFDMUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRXpDO2lGQUNpRjtBQUVqRixLQUFLLElBQUEseUJBQWMsR0FBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3dhZ2dlckF1dG9nZW4gZnJvbSAnc3dhZ2dlci1hdXRvZ2VuJ1xuXG5jb25zdCBkb2MgPSB7XG4gIGluZm86IHtcbiAgICB0aXRsZTogJ015IEFQSScsXG4gICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbidcbiAgfSxcbiAgaG9zdDogJ2xvY2FsaG9zdDozMDAwJ1xufVxuXG5jb25zdCBvdXRwdXRGaWxlID0gJy4vc3dhZ2dlci1vdXRwdXQuanNvbidcbmNvbnN0IHJvdXRlcyA9IFsnLi9yb3V0ZXMvbm90ZVJvdXRlcy50cyddXG5cbi8qIE5PVEU6IElmIHlvdSBhcmUgdXNpbmcgdGhlIGV4cHJlc3MgUm91dGVyLCB5b3UgbXVzdCBwYXNzIGluIHRoZSAncm91dGVzJyBvbmx5IHRoZVxucm9vdCBmaWxlIHdoZXJlIHRoZSByb3V0ZSBzdGFydHMsIHN1Y2ggYXMgaW5kZXguanMsIGFwcC5qcywgcm91dGVzLmpzLCBldGMgLi4uICovXG5cbnZvaWQgc3dhZ2dlckF1dG9nZW4oKShvdXRwdXRGaWxlLCByb3V0ZXMsIGRvYylcbiJdfQ==