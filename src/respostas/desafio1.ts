// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}


/*const Employee = {
    code: 222,
    name: 'Jonatas'
};

const Employee2: {code: number, name: string} = {
    code: 223,
    name: 'Paul'
}

interface Employee { 
    code: number,
    name: string
};

const EmployeeObj = {} as Employee;
EmployeeObj.code = 222;
EmployeeObj.name = 'Jonatas';

const EmployeeObj2: Employee = {
    code: 222,
    name: 'Jonatas'8*/