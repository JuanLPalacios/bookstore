import { useDispatch } from 'react-redux';
import { checkCargory } from './redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  return <><button type="button" onClick={dispatch(checkCargory())}>Check status</button></>;
}
