export const config = {
  getPort() {
    return process.env.PORT ?? 3001;
  },
  getNytApiKey() {
    return process.env.NYT_API_KEY;
  },
};
