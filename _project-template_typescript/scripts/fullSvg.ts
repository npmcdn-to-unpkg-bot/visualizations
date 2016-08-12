export class FullSvg{
    element: any;
    drawPadding: number;
    dimensions: number[];
    drawDimensions: number[];


    constructor(public container: string){
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
export { FullSvg };