// example interfaces that can be use
// TIP: the types mentioned in the interfaces must be fulfilled in order to solve the problem.
interface TemperatureReading {
  time: Date
  temperature: number
  city: string
}
interface TemperatureSummary {
  first: number
  last: number
  high: number
  low: number
  average: number
}


const dateTest = new Date('1/1/2021');

const allTemperature = [
	{
		time: new Date('1/1/2021'),
		temperature: 10,
		city: 'Utah',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 9,
		city: 'Utah',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 11,
		city: 'Utah',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 3,
		city: 'New York',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 2,
		city: 'New York',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 7,
		city: 'New York',
	},
];

const sumary : TemperatureSummary = { 
  first: 0,
  last: 0,
  high: 0,
  low: 0,
  average: 0,
}



export function processReadings(readings: TemperatureReading[]): void {
  // add here your code
  if(readings.length > 0) {

    sumary.first = readings[0].temperature,
    sumary.last = readings[(readings.length) -1].temperature,
    
    readings.sort(function(a, b){return a.temperature - b.temperature})
    sumary.high = readings[(readings.length) -1].temperature,
    sumary.low = readings[0].temperature;
  
    sumary.average = readings.reduce((acum ,obj) => acum + obj.temperature ,0),
    
    console.log(sumary)
    }  else{
    console.log(null)
    }
}

export function getTemperatureSummary(
  date: Date,
  city: string,
): TemperatureSummary | null {
  const myFilters = {
    date,
    city
  }
  const filtered : TemperatureReading[] = allTemperature.filter(temp => temp.time.getTime() == myFilters.date.getTime() && temp.city == myFilters.city)

  processReadings(filtered)
  
  //add here your code
  return null
}

getTemperatureSummary( dateTest, 'Utah');

exports.processReadings = processReadings
exports.getTemperatureSummary = getTemperatureSummary