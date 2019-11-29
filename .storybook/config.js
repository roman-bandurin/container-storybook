import { configure } from "@storybook/html";

configure(require.context("../src/", true, /^.*\.s\.ts$/), module);
