const express = require('express')
let cors = require("cors");

const app = express()
var bodyParser = require('body-parser')

app.listen(7080, () => {
    console.log("Server open na porta 7080")
})

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Olá. Esta é a API para receber dados do SENAC")
})

app.get("/notas", (req, res) => {
    let notas = [
        {
            unidade: "UC01",
            notas: [
                {
                    materia: "Programação Web",
                    nota: 16
                },
                {
                    materia: "Programação Mobile",
                    nota: 16
                },
                {
                    materia: "Codificação",
                    nota: 17
                },
            ]
        },
        {
            unidade: "UC02",
            notas: [
                {
                    materia: "Programação Web",
                    nota: 16
                },
                {
                    materia: "Programação Mobile",
                    nota: 16
                },
                {
                    materia: "Codificação",
                    nota: 17
                },
            ]
        },
        {
            unidade: "UC03",
            notas: [
                {
                    materia: "Programação Web",
                    nota: 16
                },
                {
                    materia: "Programação Mobile",
                    nota: 16
                },
                {
                    materia: "Codificação",
                    nota: 17
                },
            ]
        }
    ]
    res.send(notas)
})

app.get("/horarios", (req, res) => {
    let horarios = [
        {
            dia: "Segunda-feira",
            horarios: [
                { materia: "Programação Web", inicio: "13:30" },
                { materia: "Programação Mobile", inicio: "15:30" },
                { materia: "Codificação", inicio: "16:30" },
            ]
        },
        {
            dia: "Terça-feira",
            horarios:
                [
                    { materia: "Programação Web", inicio: "13:30" },
                    { materia: "Codificação", inicio: "15:30" },
                    { materia: "Programação Mobile", inicio: "16:30" },

                ]
        },
        {
            dia: "Quarta-feira",
            horarios: [
                { materia: "Codificação", inicio: "13:30" },
                { materia: "Programação Web", inicio: "15:30" },
                { materia: "Programação Mobile", inicio: "16:30" },
            ]
        },
    ]
    res.send(horarios)
})

app.get("/professores", (req, res) => {
    let professores = [
        {
            nome: "Jorge Marcelo",
            curso: "Sistemas de Informação",
            email: "jorge10m@gmail.com",
            linkedin: "www.linkedin.com/in/jorge",
            foto: "https://site.sinpro-rio.org.br/wp-content/uploads/2018/09/birger-kollmeier-910261_960_720.jpg"
        },
        {
            nome: "Marcela Campos",
            curso: "Nutrição",
            email: "marcela201@gmail.com",
            linkedin: "www.linkedin.com/in/marcela",
            foto: "https://direcionalescolas.com.br/wp-content/uploads/2017/10/Do-professor-de-antes-ao-educador-atual.jpg"
        },
        {
            nome: "Dirceu Pereira",
            curso: "Administração",
            email: "dirceup421@gmail.com",
            linkedin: "www.linkedin.com/in/dirceu",
            foto: "https://provafacilnaweb.com.br/wp-content/uploads/2020/10/retencao-de-alunos-entenda-o-papel-do-professor-para-evitar-a-evasao-academica-capa-2048x1367-1.jpg"
        },
    ]
    res.send(professores)
})

app.get("/secretaria", (req, res) => {
    let secretaria = {
        documentos: [
            "Declaração de Matrícula",
            "Certidão de Conclusão",
            "Histórico de Notas"
        ],
        materiais: [
            "Apostila do Curso",
            "Atividades Extra"
        ]
    }
    res.send(secretaria)
})

app.get("/certificados", (req, res) => {
    let certificados = [
        {
            nome: "Pedro Santos",
            curso: "TI"
        },
        {
            nome: "Marcos Duarte",
            curso: "Sistemas"
        }
    ]
    res.send(certificados)
})

app.get("/tarefas", (req, res) => {
    let tarefas = [
        "Lavar a louça", "Arrumar a cama", "Varrer a casa", "Estudar", "Passear com o cachorro", "Cozinhar as marmitas", "Fazer Compras", "Arrumar o quarto", "Aspirar o chao", "Lavar o banheiro"
    ]
    res.send(tarefas)
})



app.post("/chamada", (req, res) => {
    var codigo = 300
    if (req.body.codigo == codigo) {
        console.log("Aluno: " + req.body.nome + " presente.")
        var nome = req.body.nome || ""
        res.send("Obrigado " + nome + ". Sua presença foi confirmada!")
    }
    else {
        res.send("Código incorreto.")
    }
})

app.post("/cadastrar/produto", (req, res) => {
        var precoFinal
        if (req.body.usado == true){
           precoFinal = req.body.preco * 0.9
        } 
        else{
            precoFinal = req.body.preco
        }
        console.log("Produto: " + req.body.nome + " criado. Valor: R$ " + precoFinal + ". Categoria: " + req.body.categoria)
        res.send("Produto " + req.body.nome + " cadastrado com sucesso!")
})
