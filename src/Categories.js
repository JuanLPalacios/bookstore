import { useDispatch, useSelector } from 'react-redux';
import { checkCargory } from './redux/categories/categories';

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return <><button type="button" onClick={() => dispatch(checkCargory())}>{typeof categories === 'string' ? categories : 'Check status'}</button></>;
}
