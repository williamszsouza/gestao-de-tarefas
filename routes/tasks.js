import express from 'express';
const router = express.Router();
import db from '../server.js';

// CREATE
router.post('/', (req, res) => {
  const { nametask, infotask, datetask } = req.body;
  db.query(
    'INSERT INTO tasks (nametask, infotask, datetask) VALUES (?, ?, ?)',
    [nametask, infotask, datetask],
    (err, result) => {
      if (err) return res.status(500).json({ err });
      res.json({ message: 'Tarefa criada com sucesso' });
    }
  );
});

// READ
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ err });
    res.json(results);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { nametask, infotask, datetask } = req.body;
  const { id } = req.params;
  db.query(
    'UPDATE tasks SET nametask = ?, infotask = ?, datetask = ? WHERE id = ?',
    [nametask, infotask, datetask, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Atualizado com sucesso' });
    }
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ err });
    res.json({ message: 'Deletado com sucesso' });
  });
});

//search function
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    db.query('SELECT * FROM tasks where id =?',[id], (err,result) =>{
    if (err) return res.status(500).json({err});
    res.json({result})
    })
})



export default router;
