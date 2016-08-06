import _ from 'lodash';
console.log('lodash version:', _.VERSION);

import {Person} from './person';

let person = new Person();
console.log(person.name);