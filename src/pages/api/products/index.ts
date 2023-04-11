import prisma from '@/lib/prisma';
import handler from '../../../lib/handlers/routeHandler';

export default handler.get(async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        attributes: true,
        reviews: true,
        orders: true,
      },
    });
    return res.status(200).send({
      message: 'Products fetched successfully!',
      data: products,
    });
  } catch (err: any) {
    return res.status(500).send({
      message: err.message,
    });
  }
});
