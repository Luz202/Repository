module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["./steps/**/*.ts"],          // Carga todos los steps
    paths: ["./features/**/*.feature"],     // Carga todos los features
    format: ["progress"],
    publishQuiet: true
  }
};
