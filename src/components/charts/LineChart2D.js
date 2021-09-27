export default class LineChart2D {
  
  constructor(canvasID, maxLines, colors, maxPoints = -1) {
    this.canvas = document.getElementById(canvasID);
	  this.context = this.canvas.getContext("2d");
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    if(maxPoints == -1) this.maxPoints = this.width/2;
    else this.maxPoints = maxPoints;
    this.maxLines = maxLines;
    if(this.maxLines > 0) {
      this.color1 = colors[0];
      this.yData1 = new Array(this.maxPoints).fill(0);
    }
    if (this.maxLines > 1) {
      this.color2 = colors[1];
      this.yData2 = new Array(this.maxPoints).fill(0);
    }
    if (this.maxLines > 2) {
      this.color3 = colors[2];
      this.yData3 = new Array(this.maxPoints).fill(0);
    }
    this.xStep = this.width;
   }

   addData = (y1, y2, y3) => {
    if(this.maxLines > 0 && y1 !== null) {
      this.yData1.push(y1);
      this.yData1.shift();
    }
    if (this.maxLines > 1 && y2 !== null) {
        this.yData2.push(y2);
        this.yData2.shift();
    }
    if (this.maxLines > 2 && y3 !== null) {
      this.yData3.push(y3);
      this.yData3.shift();
    }
    this.refresh();
   }
  
   refresh = () => {

    this.context.clearRect(0, 0, this.width, this.height);
    let yMin = 0;
    let yMax = 0;

    if(this.maxLines > 2) {
      yMin = Math.min.apply(null, this.yData1.concat(this.yData2).concat(this.yData3));
      yMax = Math.max.apply(null, this.yData1.concat(this.yData2).concat(this.yData3));
    }
    else if(this.maxLines > 1) {
      yMin = Math.min.apply(null, this.yData1.concat(this.yData2).concat(this.yData3));
      yMax = Math.max.apply(null, this.yData1.concat(this.yData2).concat(this.yData3));
    }
    else if(this.maxLines > 0) {
      yMin = Math.min.apply(null, this.yData1);
      yMax = Math.max.apply(null, this.yData1);
    }
    let yScale = this.height/(yMax-yMin)

    if(this.maxLines > 0) {
      this.xStep = this.width;
      if(this.yData1.length > 1) this.xStep = this.width / (this.yData1.length - 1);
      this.context.beginPath();
      this.context.strokeStyle = this.color1;
      let x = 0;
      let y = this.flipY((this.yData1[0]-yMin)*yScale);
      this.context.moveTo(x, y);
      for(let i=1; i<this.yData1.length; i++) {
        x += this.xStep;
        y = this.flipY((this.yData1[i]-yMin)*yScale);
        this.context.lineTo(x, y);
      }
      this.context.stroke();
    }

    if(this.maxLines > 1) {
      this.xStep = this.width;
      if(this.yData2.length > 1) this.xStep = this.width / (this.yData2.length - 1);
      this.context.beginPath();
      this.context.strokeStyle = this.color2;
      let x = 0;
      let y = this.flipY((this.yData2[1]-yMin)*yScale);
      this.context.moveTo(x, y);
      for(let i=1; i<this.yData2.length; i++) {
        x += this.xStep;
        y = this.flipY((this.yData2[i]-yMin)*yScale);
        this.context.lineTo(x, y);
      }
      this.context.stroke();
    }

    if(this.maxLines > 2) {
      this.xStep = this.width;
      if(this.yData3.length > 1) this.xStep = this.width / (this.yData3.length - 1);
      this.context.beginPath();
      this.context.strokeStyle = this.color3;
      let x = 0;
      let y = this.flipY((this.yData3[1]-yMin)*yScale);
      this.context.moveTo(x, y);
      for(let i=1; i<this.yData3.length; i++) {
        x += this.xStep;
        y = this.flipY((this.yData3[i]-yMin)*yScale);
        this.context.lineTo(x, y);
      }
      this.context.stroke();
    }
   }

   flipY = (y) => {
      return -y + this.height;
  }
}