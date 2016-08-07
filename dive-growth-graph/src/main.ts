import _ from 'lodash';
console.log('lodash version:', _.VERSION);

// import {Person} from './person';
// let person = new Person();
// console.log(person.name);

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


//make scales
var columnScale = d3.scaleLinear()
    .domain([0,2])
    .range([svg.drawPadding, svg.drawDimensions[0]]);

var publicationScaleVertical = d3.scaleLinear()
    .domain([0,10])
    .range([svg.drawPadding, svg.drawDimensions[1]]);



console.log(publicationScaleVertical);
console.log(publicationScaleVertical(0));
console.log(publicationScaleVertical(1));
console.log(publicationScaleVertical(2));



//var columnScaleOrdinal =
