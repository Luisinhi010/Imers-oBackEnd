import express from 'express'
import conectarAoBanco from './src/config/dbConfig.js';

await conectarAoBanco(process.env.STRING_CONN);

const posts = [
	{
		id: 1,
		descricao: "uma foto",
		imagem: "https://placecats.com/millie/300/150",
	},
	{
		id: 2,
		descricao: "Um vídeo divertido de um gato",
		imagem: "https://placecats.com/millie/300/150",
	},
	{
		id: 3,
		descricao: "Uma paisagem incrível",
		imagem: "https://picsum.photos/id/237/200/300",
	},
	{
		id: 4,
		descricao: "Um meme engraçado",
		imagem: "https://placecats.com/millie/300/150",
	},
	{
		id: 5,
		descricao: "Uma receita deliciosa",
		imagem: "https://loremflickr.com/320/240/food",
	},
	{
		id: 6,
		descricao: "Um gráfico sobre as vendas do mês",
		imagem: "https://placecats.com/millie/300/150",
	},
	{
		id: 7,
		descricao: "Uma citação inspiradora",
		texto: "O importante não é a vitória, mas a luta."
	}
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
	console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
	res.status(200).json(posts);
});

function buscarPostPorID(id) {
	return posts.findIndex((post) => {
		return post.id === Number(id);
	});
}

app.get('/posts/:id', (req, res) => {
	const index = buscarPostPorID(req.params.id)
	res.status(200).json(posts[index]);
});