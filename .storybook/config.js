import { configure } from "@storybook/html";

configure(require.context("../src/components", true, /\.s\.(js|tsx?)$/), module);
