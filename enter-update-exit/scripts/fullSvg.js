define(["require", "exports"], function (require, exports) {
    "use strict";
    var FullSvg = (function () {
        function FullSvg(container) {
            this.container = container;
            //noinspection TypeScriptUnresolvedVariable
            this.element = d3.select(container).append('svg');
            this.container = this.element.node().parentNode;
            console.log(this.container);
            console.log(this.container.clientWidth);
            this.drawPadding = 20;
            this.setDimensions();
        }
        FullSvg.prototype.setDimensions = function () {
            this.dimensions = this.getContainerDimensions();
            this.element
                .style('width', this.dimensions[0])
                .style('height', this.dimensions[1]);
            this.computeDrawDimensions();
        };
        FullSvg.prototype.getContainerDimensions = function () {
            var dimensions = [];
            dimensions.push(this.container.clientWidth);
            dimensions.push(this.container.clientHeight);
            console.log(dimensions);
            return dimensions;
        };
        FullSvg.prototype.computeDrawDimensions = function () {
            var padding = this.drawPadding;
            this.drawDimensions = _.map(this.dimensions, function (x) { return x - (padding * 2); });
        };
        return FullSvg;
    }());
    exports.FullSvg = FullSvg;
    exports.FullSvg = FullSvg;
});
