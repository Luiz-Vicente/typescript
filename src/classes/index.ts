export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = []; // class is considered type in typescript
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const colaborador of this.collaborators) {
      console.log(colaborador);
    }
  }
}

export class Collaborator {
  // this is a short form
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}

const Udemy = new Company('Udemy', '11.111.111/0001-11');
const luiz = new Collaborator('Luiz', 'Vicente');
const maria = new Collaborator('Maria', 'Joaquina');
const cirilo = new Collaborator('Cirilo', 'Júnior');

Udemy.addCollaborator(luiz);
Udemy.addCollaborator(maria);
Udemy.addCollaborator(cirilo);

console.log('\n***************************** Udemy Company\n');
console.log(Udemy);
console.log('\n***************************** Udemy Company Collaborators\n');
Udemy.showCollaborators();
