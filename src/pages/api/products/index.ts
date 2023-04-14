import prisma from '@/lib/prisma';
import handler from '../../../lib/handlers/routeHandler';

export default handler
  .get(async (req, res) => {
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
  })
  .post(async (req, res) => {
    console.log(req.body);
    const { product, category, subCat, attributes } = req.body;

    try {
      const data = await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
          image: 'asdasdsadsasdsa',
          category: {
            connect: {
              id: category.id,
            },
          },
          subCategory: {
            connect: {
              id: subCat.id,
            },
          },
          attributes: {
            create: attributes,
          },
        },
      });
      return res.status(200).send({
        data: data,
        message: 'Product created successfully',
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send({
        message: 'The product was not create!',
      });
    }
  });
