# [ecleptic-web-weather-component](https://www.npmjs.com/package/ecleptic-web-weather-component)

--------------------------------------------------------------------------------

A Basic web component that pulls the weather from [openweathermap.org](https://openweathermap.org/api)

This was written for intended use in React libraries, but should work for everything. You place the zip and APIKEY as props into the component and it should pull the data and show the weather and city name.

--------------------------------------------------------------------------------

Required Props: `APIKEY`, `ZIP` Required Peer Dependencies: [![npm (scoped)](https://img.shields.io/npm/v/ecleptic-web-weather-component.svg)](https://www.npmjs.com/package/ecleptic-web-weather-component) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ecleptic-web-weather-component.svg)](https://www.npmjs.com/package/ecleptic-web-weather-component) [![install size](https://packagephobia.now.sh/badge?p=ecleptic-web-weather-component)](https://packagephobia.now.sh/result?p=ecleptic-web-weather-component)

Required props: `APIKEY`, `ZIP`

## Usage:

```javascript
import  'ecleptic-web-weather-component'

function App(){
  ...

  <ecleptic-web-weather-component zip={ZIP} APIKEY={APIKEY}></ecleptic-web-weather-component>

  ...
}
export default App
```

## [0.0.3] - 2019-04-28

### Updated Readme

- Added readme and API usage

## [0.0.2] - 2019-04-24

### Initial Public Commit

- Created Basic API Props needing ZIP & API token
