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
  const data = await prisma.category.findUnique({
    where: {
      name: name,
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
};
