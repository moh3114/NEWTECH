`use strict`

class Wizard {
  #health = 1000;
  #mana = 1000;

  constructor(name) {
    this.name = name;
    this.#health = health;
    this.#mana = mana;
    this.alive = true;
  }

  getHealth() {
    return this.#health;
  }

  getMana() {
    return this.#mana;
  }

  isAlive() {
    return this.alive;
  }

  #setHealth(amount) {
    this.#health = Math.max(0, amount);
    if (this.#health === 0) this.alive = false;
  }

  #setMana(amount) {
    this.#mana = Math.max(0, amount);
  }

  spendMana(cost) {
    if (this.#mana < cost) return false;
    this.#setMana(this.#mana - cost);
    return true;
  }

  takeDamage(amount) {
    if (!this.isAlive()) return;
    this.#setHealth(this.#health - amount);
  }

  castSpell(target) {
    throw new Error(`${this.name} has no spell defined!`);
  }
}


