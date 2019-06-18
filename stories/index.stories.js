import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import '../index'

storiesOf('Demo', module).add('Web', () => '<ecleptic-weather-component zip={process.env.ZIP} APIKEY={process.env.APIKEY} />')
