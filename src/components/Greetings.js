import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/slice/greetingSlice';

function Greetings() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  return (
    <div>
      <h1>Greetings from component</h1>
      <p>{greeting.message}</p>
    </div>
  );
}

export default Greetings;
