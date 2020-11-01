// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import ImageViewer from 'vue2-viewer';
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import vuePicturePreview from 'vue-picture-preview'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(ImageViewer);
Vue.use(preview);
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});
Vue.use(vuePicturePreview);

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
