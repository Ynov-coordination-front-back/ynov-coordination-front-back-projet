import { Umzug, SequelizeStorage } from "umzug";
import sequelize from "./database";
import type { QueryInterface } from "sequelize";
import type { MigrationFn } from "umzug";

export type Migration = MigrationFn<QueryInterface>;

const migrator = new Umzug({
    migrations: {
        glob: ["../migrations/*.ts", { cwd: __dirname }],
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

export default migrator;