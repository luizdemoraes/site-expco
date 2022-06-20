import { CountUp } from '../countUp.min.js'

const numberClientes = document.getElementById('counterUpClientes');
const numberLeads = document.getElementById('counterUpLeads');
const numberReais = document.getElementById('counterUpReais');

new CountUp(numberClientes, 100, {
  enableScrollSpy: true,
  scrollSpyOnce: true,
  scrollSpyDelay: 500,
  duration: 2
});

new CountUp(numberLeads, 10000, {
  enableScrollSpy: true,  
  scrollSpyOnce: true,
  separator: '.',
  duration: 3
});

new CountUp(numberReais, 700000, {
  enableScrollSpy: true,
  scrollSpyOnce: true,
  decimalPlaces: 2,
  separator: '.',
  decimal: ',',
  prefix: 'R$ ',
  duration: 3
});
