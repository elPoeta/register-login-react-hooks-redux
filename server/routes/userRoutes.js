import express from 'express';

const router = express.Router();

router.route('/register').post((req, res) => {
  res.json({ data: "OK" });
});

export default router;