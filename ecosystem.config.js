module.exports = {
  apps: [
    {
      name: "haruda-web",
      script: "app.js",
      watch: true,
      "env_public-develop": {
        NODE_ENV: "public-develop",
        PORT: 8080,
      },
      // env_production: {
      //   NODE_ENV: "production",
      //   PORT: ,
      // }
    }
  ]
};