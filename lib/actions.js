'use server';

import { saveMeal } from './meals';
import { redirect } from 'next/navigation';

const isInvalidText = (text) => {
  return !text || text.trim === '';
};

const ShareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error('Invalid input, please try again.');
  }

  await saveMeal(meal);
  redirect('/meals');
};

export default ShareMeal;
