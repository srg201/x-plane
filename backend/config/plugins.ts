module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      sizeLimit: 250 * 1024 * 1024,
    },
  },
});
