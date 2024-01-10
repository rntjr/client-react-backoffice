import {create} from '@storybook/theming/create'
import { addons } from '@storybook/manager-api';

const createTheme = create({
    base: 'dark',
    brandTitle: 'Design System',
    brandUrl: '',
    brandImage: '',
    brandTarget: '_self'
})

addons.setConfig({theme: createTheme})