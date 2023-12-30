import logo from "./extensions/pizzadalas.png";

const config = {
  head: {
    favicon: logo
  }
};

const bootstrap = (/** @type {any} */ app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
