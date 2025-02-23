module.exports = {
  "petstore-file": {
    input: "https://petstore.swagger.io/v2/swagger.json",
    output: {
      target: "./src/data-access/petstore.ts",
      schemas: "./src/data-access/models",
      baseUrl: "https://petstore.swagger.io/v2",
      client: "fetch",
    },
  },
};
