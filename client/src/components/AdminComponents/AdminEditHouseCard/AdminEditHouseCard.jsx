import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';

export function AdminEditHouseCard() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();
  const { homes } = useSelector((state) => state.homesReducer);
  const { admin } = useSelector((state) => state.adminReducer);
  const curHome = homes.find((home) => home.id === +id);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const handlerUpdate = (e) => {
    e.preventDefault();
    const updateHouse = {
      id: `${id}`,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    };
    dispatch({ type: 'FETCH_PUT_HOMES', payload: updateHouse });
    navigate(reactRouter.admin.allHouses);
  };

  return (
    <>
      {admin?.email
        ? (
          <div className="app-container">
            <div className="go_back">
              <h1 className="arrow_back" onClick={() => navigate(reactRouter.admin.main)}>&#8678;</h1>
              <h1 className="title-text">Обновление домика</h1>
            </div>
            <form onSubmit={handlerUpdate} className="app-container">
              <div>
                <input className='formItem' defaultValue={curHome.name} ref={nameRef} />
                <br />
                <textarea className='text-area formItem' defaultValue={curHome.description} ref={descriptionRef} />
                <br />
                <input className='formItem' defaultValue={curHome.price} ref={priceRef} />
                <br />
              </div>
              <button className="waves-effect waves-light btn">Обновить</button>
            </form>
          </div>
        ) : <NotFound />}
      
    </>
  );
}
