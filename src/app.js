"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./swagger-output.json"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
/* Middlewares */
app.use(express_1.default.json());
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
/* Routes */
app.use('/api/notes', noteRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLHFFQUE0QztBQUM1Qyw0RUFBMEM7QUFDMUMsZ0ZBQStDO0FBRS9DLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFBO0FBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRXZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVqQixpQkFBaUI7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLENBQUMsNkJBQVcsQ0FBQyxDQUFDLENBQUE7QUFFL0QsWUFBWTtBQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLG9CQUFVLENBQUMsQ0FBQTtBQUVqQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgbm90ZVJvdXRlcyBmcm9tICcuL3JvdXRlcy9ub3RlUm91dGVzJ1xuaW1wb3J0IHN3YWdnZXJVaSBmcm9tICdzd2FnZ2VyLXVpLWV4cHJlc3MnXG5pbXBvcnQgc3dhZ2dlckZpbGUgZnJvbSAnLi9zd2FnZ2VyLW91dHB1dC5qc29uJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpXG5cbmNvbnN0IHBvcnQgPSAzMDAwXG5cbi8qIE1pZGRsZXdhcmVzICovXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZSgnL2RvY3MnLCBzd2FnZ2VyVWkuc2VydmUsIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyRmlsZSkpXG5cbi8qIFJvdXRlcyAqL1xuYXBwLnVzZSgnL2FwaS9ub3RlcycsIG5vdGVSb3V0ZXMpXG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIHJ1bm5pbmcgb24gcG9ydCAke3BvcnR9YClcbn0pXG4iXX0=