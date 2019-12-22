import Vue from 'vue'
import {
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Divider,
    Carousel,
    CarouselItem,
    Card,
    Drawer,
    Form,
    FormItem,
    Input,
    Radio,
    RadioGroup,
    RadioButton,
    Message,
    Tabs,
    TabPane
} from 'element-ui'

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Divider);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Drawer);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.prototype.$message = Message;