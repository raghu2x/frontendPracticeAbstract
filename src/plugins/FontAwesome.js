import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faArrowRight, faBars, faUserSecret, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faCircleQuestion, faArrowRight, faBars, faXmark);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
