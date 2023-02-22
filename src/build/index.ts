import ts from "typescript";
import * as runner from "ts-node";

async function main(): Promise<void> {
    const { config } = ts.readConfigFile(
        __dirname + "/../../tsconfig.json", 
        ts.sys.readFile
    );

    const program: ts.Program = ts.createProgram([], config);
    runner.register({
        emit: false,
        compiler: 'ttypescript',
        compilerOptions: config.compilerOptions,
    });

    await import(__dirname + "/../../src/controllers/BbsArticlesController.ts");
}
main().catch((exp) => {
    console.log(exp);
    process.exit(-1);
});