import * as Engine from "../../../engine/engine.js"

export default  class StatsComponent extends Engine.Component {
  constructor(gameObject, hp, mp, att, def) {
    super(gameObject);
    this.hp = hp;
    this.mp = mp;
    this.att = att;
    this.def = def;
  }

  getHp() {
    return this.hp;
  }

  setHp(hp) {
    this.hp = hp;
  }

  getMp() {
    return this.mp;
  }

  setMp(mp) {
    this.mp = mp;
  }

  getAtt() {
    return this.att;
  }

  setAtt(att) {
    this.att = att;
  }

  getDef() {
    return this.def;
  }

  setDef(def) {
    this.def = def;
  }
}