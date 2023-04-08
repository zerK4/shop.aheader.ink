import prisma from '../prisma';

export const getCategories = async () => {
  const data = await prisma.category.findMany({
    include: {
      subCategories: true,
    },
  });
  return data;
};

export const getCategoriesByName = async (name: any) => {
  try {
    const data = await prisma.category.findUnique({
      where: {
        name: name as string,
      },
      include: {
        subCategories: {
          include: {
            products: true,
          },
        },
        products: true,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
