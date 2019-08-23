import {PtsCanvas} from 'react-pts-canvas';
import {Pt, Group, Line, Const} from 'pts';

class Collinear extends PtsCanvas {

  constructor() {
    super();
    this.pairs = [];
  }

  _create() {
    // this.space.bindMouse().bindTouch().play();
    let r = this.space.size.minValue().value/2;
    for(let x=0; x< 50; x++){
      let ln = new Group(Pt.make(2, r, true), Pt.make(2, -r, true));
      ln.moveBy(this.space.center).rotate2D(x*Math.PI/50, this.space.center);
      this.pairs.push(ln);
    }
  }
  
  
  // Override PtsCanvas' animate function
  animate(time, ftime) {
    // console.log('animate');
    for(let x=0, y=this.pairs.length; x<y; x++){
      let ln = this.pairs[x];
      ln.rotate2D(Const.one_degree/10, this.space.center);
      let collinear = Line.collinear(ln[0], ln[1], this.space.pointer, 0.1);
      if(collinear){
        this.form.stroke("#fff").line(ln);
      }else{
        let side = Line.sideOfPt2D(ln, this.space.pointer);
        this.form.stroke( (side<0) ? "rgba(0,135,199,.25)" : "rgba(240,114,12,.25)" ).line( ln );
      }
      this.form.fillOnly("rgba(255,255,255,0.8").points( ln, 0.5);
    }
  }
  
  // Override PtsCanvas' start function
  start(space, bound) {
    this._create();
  }
}

export default Collinear;