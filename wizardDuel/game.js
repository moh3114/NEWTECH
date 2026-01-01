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

class Duel {
  constructor(wizardA, wizardB) {
    this.wizardA = wizardA;
    this.wizardB = wizardB;
  }

  start() {
    console.log(`Duel starts between ${this.wizardA.name} and ${this.wizardB.name}!`);

    let attacker = this.wizardA;
    let defender = this.wizardB;

    while (this.a.isAlive() && this.b.isAlive()) {
      attacker.castSpell(defender);

      if (!defender.isAlive()) break;

      [attacker, defender] = [defender, attacker]; // swap wizards
    }

    const winner = this.wizardA.isAlive() ? this.wizardA : this.wizardB;
    console.log(`${winner.name} wins the duel!`);
  }
}

const fireWiz = new FireWizard("Firo", 100, 60);
const iceWiz = new IceWizard("Ico", 120, 80);

const duel = new Duel(fireWiz, iceWiz);
duel.start();




