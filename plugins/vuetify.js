import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import es from 'vuetify/es5/locale/es'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  lang: {
    locales: { es },
    current: 'es'
  },
  theme: {
    primary: '#7C0FD1',
    secondary: '#E65100'
  },
  icons: {
    iconfont: 'md'
  }
})