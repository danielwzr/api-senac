const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.listen(7080, () => {
    console.log("Server open na porta 7080")
})

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Olá. Esta é a API para receber dados do SENAC")
})

app.get("/notas", (req,res) => {
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
            foto: ""
        },
        {
            nome: "Marcela Campos",
            curso: "Nutrição",
            email: "marcela201@gmail.com",
            linkedin: "www.linkedin.com/in/marcela",
            foto: ""
        },
        {
            nome: "Dirceu Pereira",
            curso: "Administração",
            email: "dirceup421@gmail.com",
            linkedin: "www.linkedin.com/in/dirceu",
            foto: ""
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
            nome: "Jonathan Santos",
            curso: "Engenharia Civil"
        },
        {
            nome: "Marcos Duarte",
            curso: "Sistemas"
        }
    ]
    res.send(certificados)
})


app.post("/chamada", (req, res) => {
    console.log(req.body)
    var nome = req.body.nome || ""
    res.send("Obrigado " + nome + ". Sua presença foi confirmada!")
})