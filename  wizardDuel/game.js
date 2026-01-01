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

class FireWizard extends Wizard {
  castSpell(target) {
    const cost = 20;
    const damage = 30;

    if (!this.spendMana(cost)) {
      console.log(`${this.name} tried to cast Fireball but has no mana!`);
      return;
    }

    console.log(`${this.name} casts Fireball at ${target.name}! 🔥`);
    target.takeDamage(damage);
  }
}

class IceWizard extends Wizard {
  castSpell(target) {
    const cost = 10;
    const damage = 15;

    if (!this.spendMana(cost)) {
      console.log(`${this.name} tried to cast Ice Spike but has no mana!`);
      return;
    }

    console.log(`${this.name} casts Ice Spike at ${target.name}! ❄️`);
    target.takeDamage(damage);
  }
}




