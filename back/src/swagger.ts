import swaggerJsdoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const PORT = process.env.PORT || 3000;

const options: Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "Express TypeScript API with Swagger",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ["./src/routes/*.ts"], // path to route files
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;