import sequelize from "./config/database";
import migrator from "./config/migrator";

export async function bootstrap(): Promise<void> {
  await sequelize.authenticate();
  console.log("DB connected");

  await migrator.up();
  console.log("Migrations applied");
}

// CLI: npx tsx src/bootstrap.ts
if (require.main === module) {
  bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}