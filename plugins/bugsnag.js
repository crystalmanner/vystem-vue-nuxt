import Vue from 'vue'
import bugsnag from '@bugsnag/js'
import bugsnagVue from '@bugsnag/plugin-vue'

const bugsnagClient = bugsnag('c3525569bdcbd8770173d2fcb0152654')
bugsnagClient.use(bugsnagVue, Vue)