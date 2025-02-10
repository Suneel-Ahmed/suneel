module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
