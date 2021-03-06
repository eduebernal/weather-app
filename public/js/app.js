const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        } else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast.summary + ' It is currently ' + data.forecast.temperature + ' ºC out. There is a ' + data.forecast.precipitation*100 + '% chance of rain. The high is ' + data.forecast.temperatureHigh + ' ºC and the low is ' + data.forecast.temperatureLow + ' ºC.'
        }
    })
})
})