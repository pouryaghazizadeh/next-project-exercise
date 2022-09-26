// import todoData from "../../db/todo"
// export default async function handler(req, res) {
//     console.log(req);

//     switch (req) {
//         case req.method === "GET":
//             todoData
//         case req.method === 'DELETE':
//             todoData.filter((todoCard) => todoCard.id === req.body.id)
//         case req.method === 'Post':
//             todoData.push(req.body.todo)
//         default:
//             res.status(405).end(`Method ${req.method} Not Allowd`)
//             break;
//     }
// }