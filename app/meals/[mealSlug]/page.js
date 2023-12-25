// import Image from 'next/image';
import classes from './page.module.css';

const MealDetailsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          {/* <Image fill /> */}
        </div>
        <div className={classes.headerText}>
          <h1>TITLE</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${'EMAIL'}`}>NAME</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: 'Instructions' }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
