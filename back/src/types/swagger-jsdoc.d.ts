declare module "swagger-jsdoc" {
  export type Options = {
    definition: Record<string, unknown>;
    apis: string[];
  };

  export default function swaggerJsdoc(options: Options): Record<string, unknown>;
}
