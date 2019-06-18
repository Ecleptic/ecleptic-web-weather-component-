'use strict'
// import getIcons from './utils'
const getIcons = require('./utils')

const tagName = 'ecleptic-weather-component'
class Weather extends HTMLElement {
	constructor() {
		super()
		this.weatherDetails = null

		console.log(this.getAttribute('ZIP'))
		this.getWeather = this.getWeather.bind(this)
	}

	async connectedCallback() {
		this.zip = this.getAttribute('ZIP')
		this.APIKEY = this.getAttribute('APIKEY')
		this.endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.APIKEY}`
		let weather = await this.getWeather()
		this.weatherDetails = weather
		this.initShadowDom()
	}
	initShadowDom() {
		let shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.innerHTML = this.template
	}
	attributeChangedCallback(attrName, oldValue, newValue) {
		// called whenever one of the element constructor’s observedAttributes are updated.
		if (newValue !== oldValue) {
			this[attrName] = this.hasAttribute(attrName)
		}
	}
	get style() {
		console.log({ props })
		return `
			<style>
				.eclepticWeather {
					display: flex;
					align-items: center;
					flex-direction: ${props.orderFlipped ? 'row-reverse' : 'row'}
				}
				.eclepticWeather > h4 {
					padding: 10px;
					margin: 0;
				}
			</style>
		`
	}
	get template() {
		let weather = this.weatherDetails
		if (weather) {
			return this.style + this.weatherTemplate(weather)
		} else {
			// error
			return `<div>ERROR</div>`
		}
	}
	async getWeather() {
		return await fetch(this.endpoint, { mode: 'cors' }).then(res => res.json())
	}
	weatherTemplate(weather) {
		return `
			<div class="eclepticWeather">
				<h4>${weather.name}</h4>
        ${getIcons(weather.weather[0].icon)}
        </div>
        `
	}
}

customElements.define(tagName, Weather)
