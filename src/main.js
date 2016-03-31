import App from './App'

import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
/* 工具栏和标题栏 */
import UtilBar from './components/UtilBar/UtilBar'
import UitlBarList from './components/UtilBar/UtilBarList'
import TitleBar from './components/UtilBar/TitleBar'
import LinkBar from './components/UtilBar/LinkBar'
import BtnBar from './components/UtilBar/BtnBar'
import UtilBtm from './components/UtilBar/UtilBtm'
import DocBtm from './components/UtilBar/DocBtm'
import MultiBar from './components/UtilBar/MultiBar'

import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Tab from './components/Tab/Tab'
import Dialog from './components/Dialog/Dialog'
import OTable from './components/OperationTable/OperationTable'
import Calendar from './components/Calendar/Calendar'
import Picker from './components/Picker/Picker'
import Slide from './components/Slide/Slide'
import PictureBox from './components/PictureBox/PictureBox'
import Icons from './components/Icons/Icons'

Vue.use(Router)

/* 路由设置 */
var router = new Router()
router.map({
  '/': {
    name: 'Home',
    component: Home
  },
  '/UtilBar': {
    name: 'UtilBar',
    component: UtilBar,
    subRoutes: {
      '/': {
        name: 'list',
        component: UitlBarList
      },
      '/titleBar': {
        name: 'titleBar',
        component: TitleBar
      },
      '/linkBar': {
        name: 'linkBar',
        component: LinkBar
      },
      '/btnBar': {
        name: 'btnBar',
        component: BtnBar
      },
      '/utilBtm': {
        name: 'utilBtm',
        component: UtilBtm
      },
      '/docBtm': {
        name: 'docBtm',
        component: DocBtm
      },
      '/multiBar': {
        name: 'multiBar',
        component: MultiBar
      }
    }
  },
  '/Button': {
    name: 'Button',
    component: Button
  },
  '/Form': {
    name: 'Form',
    component: Form
  },
  '/Tab': {
    name: 'Tab',
    component: Tab
  },
  '/Dialog': {
    name: 'Dialog',
    component: Dialog
  },
  '/OTable': {
    name: 'OTable',
    component: OTable
  },
  '/Calendar': {
    name: 'Calendar',
    component: Calendar
  },
  '/Picker': {
    name: 'Picker',
    component: Picker
  },
  '/Slide': {
    name: 'Slide',
    component: Slide
  },
  '/PictureBox': {
    name: 'PictureBox',
    component: PictureBox
  },
  '/Icons': {
    name: 'Icons',
    component: Icons
  }
})

router.start(App, '#app')
