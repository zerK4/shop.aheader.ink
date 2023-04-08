import prisma from '../prisma';

export const createMeta = async (data: any) => {
  const { title } = data;

  try {
    const meta = await prisma.meta.upsert({
      where: {
        title: title,
      },
      update: data,
      create: data,
    });
    await prisma.$disconnect();

    return meta;
  } catch (error) {
    console.error(error);
    return error;
  }
};
