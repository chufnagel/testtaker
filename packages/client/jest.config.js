const jestBase = require("tools/jest.config.js");

module.exports = {
  ...jestBase,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/testSetup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileMock.js",
  },
};
