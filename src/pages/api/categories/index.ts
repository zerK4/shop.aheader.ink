import prisma from '@/lib/prisma';
import handler from '../../../lib/handlers/routeHandler';

handler.get(async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subCategories: {
          include: {
            products: true,
          },
        },
        products: true,
      },
    });

    return res.status(200).send({
      categories: categories,
    });
  } catch (err) {
    console.log(`Get error fetching categories: ${err}`);
    return res.status(500).send({
      message: `Could not fetch categories: ${err}`,
    });
  }
});

export default handler;
