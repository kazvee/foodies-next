import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you!</span> 🤩
        </h1>
        <p>Choose your favourite recipe and cook it yourself! 😃</p>
        <p className={classes.cta}>
          <Link href="/meals/share">✨ Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>⌛ Fetching Meals... ⏳</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
