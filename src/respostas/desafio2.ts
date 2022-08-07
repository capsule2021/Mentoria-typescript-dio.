
/*enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}
*/




enum Job {
    Vigilant,
    Secretary
}

type Client = {
    name: string,
    age: number,
    occupation: Job
}

let client1: Client = {
    name: 'Mary',
    age: 29,
    occupation: Job.Secretary
};

let client2: Client = {
    name: 'Bob',
    age: 19,
    occupation: Job.Vigilant
};

let client3: Client = {
    name: 'Alex',
    age: 32,
    occupation: Job.Secretary
};

let client4: Client = {
    name: "carl",
    age: 19,
    occupation: Job.Vigilant
}