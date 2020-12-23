import Vue from "vue";
import Vuex from "vuex";
import createPersiste from "vue-savedata";

import module1 from "./modules/module1";
import module2 from "./modules/module2";
import userModule from "./modules/user";
const persiste = createPersiste({
  ciphertext: false,
  mode: "LS",
  LS: [
    {
      module: module1,
      storePath: "custom"
    }
  ],
  SS: {
    module: module2,
    storePath: "module2"
  }
});
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    name: "saveData"
  },
  modules: {
    module2,
    custom: module1,
    user: userModule
  },
  plugins: [persiste]
});
