import { CountUp } from '../countUp.min.js'

const numberClientes = document.getElementById('counterUpClientes');
const numberLeads = document.getElementById('counterUpLeads');
const numberReais = document.getElementById('counterUpReais');

const clientes = new CountUp(numberClientes, 100, {
  enableScrollSpy: true,
  // scrollSpyOnce: true,
  scrollSpyDelay: 500,
  duration: 3
});

const leads = new CountUp(numberLeads, 10000, {
  enableScrollSpy: true,  
  // scrollSpyOnce: true,
  separator: '.',
  duration: 5
});

const reais = new CountUp(numberReais, 700000, {
  enableScrollSpy: true,
  // scrollSpyOnce: true,
  decimalPlaces: 2,
  separator: '.',
  decimal: ',',
  prefix: 'R$ ',
  duration: 5
});

clientes.start();
leads.start();
reais.start();