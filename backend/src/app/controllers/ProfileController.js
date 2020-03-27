import connection from '../../database';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    const { page = 1 } = req.query;

    if (!ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .limit(6)
      .offset((page - 1) * 6)
      .select('*');

    return res.status(200).json(incidents);
  }
}

export default new ProfileController();
