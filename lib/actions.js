'use server';

const ShareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_emaiL: formData.get('email'),
  };

  console.log('🍛 Meal:', meal);
};

export default ShareMeal;
