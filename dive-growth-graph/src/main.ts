import _ from 'lodash';
console.log('lodash version:', _.VERSION);

// import {Person} from './person';
// let person = new Person();
// console.log(person.name);

//data
var sData = [
    {
        year: 2012,
        subscribers: 500,
        publications: ['Construction Dive'],
        employees: 3,
        office: 'Grocery Store'
    },
    {
        year: 2013,
        subscribers: 7500,
        publications: ['Construction Dive', 'Utility Dive', 'CIO Dive'],
        employees: 6,
        office: 'Grocery Store'
    }
]


var vData = [];
//end data



//classes (should be able to use in dive-vis repo
class FullSvg {
    element: number;
    drawPadding: number;
    dimensions: number[];
    drawDimensions: number[];


    constructor(public container){
        //noinspection TypeScriptUnresolvedVariable
        this.element = d3.select(container).append('svg');
        this.container = this.element.node().parentNode;
        console.log(this.container);
        console.log(this.container.clientWidth);

        this.drawPadding = 20;
        this.setDimensions();
    }

    setDimensions(){
        this.dimensions = this.getContainerDimensions();
        this.element
            .style('width', this.dimensions[0])
            .style('height', this.dimensions[1]);

        this.computeDrawDimensions();
    }

    getContainerDimensions(){
        var dimensions = [];
        dimensions.push(this.container.clientWidth);
        dimensions.push(this.container.clientHeight);
        console.log(dimensions);

        return dimensions;
    }

    computeDrawDimensions(){
        var padding = this.drawPadding;
        this.drawDimensions = _.map(this.dimensions, function(x){return x - (padding * 2);});
    }

}

var svg = new FullSvg('body');
console.log(svg);


//make line scales
var lineScaleX = d3.scaleLinear()
    .domain([2012, 2016])
    .range([svg.drawPadding, svg.drawDimensions[0]]);

var lineScaleY = d3.scaleLinear()
    .domain([0, d3.max(sData, function(d){return d.year;})])


//make other scales
var columnScale = d3.scaleLinear()
    .domain([0,2])
    .range([svg.drawPadding, svg.drawDimensions[0]]);

var publicationScaleVertical = d3.scaleLinear()
    .domain([0,10])
    .range([svg.drawPadding, svg.drawDimensions[1]]);




