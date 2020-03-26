import crypo from 'crypto';
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

    const id = crypo.randomBytes(4).toString('HEX');

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

  async update(req, res) {
    return res.json({ ok: true });
  }

  async delete(req, res) {
    return res.json({ ok: true });
  }
}

export default new OngsController();
