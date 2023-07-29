import { getProductsInCart, removeFromCart } from '../../utils/cartFunctions';

export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      // Assuming you have the 'user_id' from the query params
      const { user_id } = query;
      if (!user_id) {
        return res.status(400).json({ error: 'user_id parameter is missing' });
      }

      try {
        const cartItems = await getProductsInCart(user_id);
        return res.status(200).json({ carts: cartItems });
      } catch (error) {
        return res.status(500).json({ error: 'Something went wrong' });
      }

    case 'DELETE':
      // Assuming you have the 'id' from the query params
      const { id } = query;
      if (!id) {
        return res.status(400).json({ error: 'id parameter is missing' });
      }

      try {
        await removeFromCart(id);
        return res.status(200).json({ message: 'Item removed from cart' });
      } catch (error) {
        return res.status(500).json({ error: 'Something went wrong' });
      }

    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
