import generateUniqueId from '../../utils/generateUniqueId';
import connection from '../../database';

class OngsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('ongs').count();

    const ongs = await connection('ongs')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    res.header('X-Total-Count', count['count(*)']);

    return res.status(200).json({ ongs });
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(200).json({ id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const ong = await connection('ongs').where('id', id).first();

    if (id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    if (!ong) {
      return res.status(401).json({ error: 'Ong not found.' });
    }

    await connection('ongs').where('id', id).delete();

    return res.status(204).send();
  }
}

export default new OngsController();
