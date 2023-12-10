import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import ReviewCard from '../ReviewCard/ReviewCard';
import Form from './Form/Form';
import './ReviewsList.css';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 150, itemsToShow: 2 },
  { width: 368, itemsToShow: 3 },
  { width: 400, itemsToShow: 4 },
  { width: 500, itemsToShow: 5 },
];

function ReviewsList() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewsReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_REVIEWS' });
  }, [dispatch]);
  return (
    <>
      
      <div className="fon-otziva-main">
        <div className="fon-otziva-main-1">
          <span className="fon-otziva-span-left">Оставь свой отзыв</span>
          <p className="forma-otziva">
            Пожалуйста, расскажите, что вы о нас думаете.
            Это поможет нам улучшить качество работы!
          </p>

        </div>
        <div className="fon-otziva-main-2">
          <button onClick={() => setOpen(!open)} className="header-button-scale-1"><span className="button-text">Оставить отзыв</span></button>

        </div>
      </div>

      <div className="reviews">

        {open ? <Form onSubmit={() => setOpen(false)} /> : <></>}
      </div>

      {/*<center><h3 className="title-text">Отзывы</h3></center>*/}

      <div>
        <Carousel breakPoints={breakPoints}>

          {reviews.length ? reviews.map((review) => {
            if (review.status) {
              return <Item key={review.id}><ReviewCard key={review.id} review={review} /></Item>;
            }
          })
            : <p>Пусто</p>}
        </Carousel>
      </div>
    </>
  );
}

export default ReviewsList;
