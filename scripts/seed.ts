import { PrismaClient, Prisma } from '@prisma/client';

export const generateId = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateRandomNumBetween = (min = 0, max = 100) => {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

export const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

export const CURRENCIES = [
  'NZD',
  'USD',
  'GBP',
  'AUD',
  'CAD',
  'EUR',
  'JPY',
  'RUB',
  'CNY',
];

const PaymentStatus = [
  'PENDING',
  'PROCESSING',
  'COMPLETED',
  'FAILED'
];

const client = new PrismaClient();
const CT = 100;

type ITable = 'Payment' | 'Others';

const clearTable = async (table: ITable) => {
  switch (table) {
    case 'Payment':
      await client.payment.deleteMany({}).then(
        () => console.log(`✅ Cleared ${table} table`),
      );
  }
}

const seedPayments = async () => {
  for (let i = 0; i < CT; i++) {
    const data: Prisma.PaymentCreateInput = {
      amount: generateRandomNumBetween(100, 10000),
      currency: CURRENCIES[generateRandomNumBetween(0, CURRENCIES.length)],
      dateOfPayment: randomDate(new Date('1970-01-01'), new Date()),
      from: `Sender-${generateRandomNumBetween(0, 10)}`,
      to: `Receiver-${generateRandomNumBetween(0, 10)}`,
      status: PaymentStatus[generateRandomNumBetween(0, PaymentStatus.length)],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      await client.payment.create({ data });
      console.log(`${i+1} row of payment created`);
    } catch (error) {
      throw error;
    }
  }
}
const seed = async () => {
  seedPayments();
  client.$disconnect();
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
