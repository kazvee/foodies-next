import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error ('Failed to load meals data from database! 😿');
  return db.prepare('SELECT * FROM meals').all();
};

const getMeal = (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

const generateRandomString = () => {
  const randomChars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const randomString = Array.from(
    { length: 6 },
    () => randomChars[Math.floor(Math.random() * randomChars.length)]
  ).join('');
  return randomString;
};

const saveMeal = async (meal) => {
  meal.slug = slugify(`${meal.title}_${generateRandomString()}`, {
    lower: true,
  });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const randomString = generateRandomString();
  const fileName = `${meal.slug}_${randomString}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed! ☹️');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
    (title,  summary, instructions, creator, creator_email, image, slug)
    VALUES
    (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(meal);
};

export { getMeals, getMeal, saveMeal };
