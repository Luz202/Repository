module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["./steps/**/*.ts"],      // ✔ Carga steps
    paths: ["./features/**/*.feature"], // ✔ Carga features
    format: ["progress"],
    publishQuiet: true
  }
};
