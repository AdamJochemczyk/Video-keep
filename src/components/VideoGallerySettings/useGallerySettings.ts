import { SyntheticEvent} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {
    selectPage,
    selectDisplayMethod,
    selectElementsOnPage,
    selectSortBy,
    prevPage,
    nextPage,
    changeDisplayMethod,
    changeElementsOnPage,
    changeSortBy,
    possibleDisplayMethodType,
    possibleElementsOnPage,
    possibleSortMethods
}from '../../app/data/gallerySettingsSlice';

export const useGallerySettings=()=>{

    const dispatch = useDispatch()
    const displayMethod=useSelector(selectDisplayMethod);
    const page=useSelector(selectPage)
    const elementsOnPage=useSelector(selectElementsOnPage)
    const sortMethod=useSelector(selectSortBy);

    const handleDisplayMethodChange = (ev: SyntheticEvent<HTMLSelectElement>) => {
      const target = ev.target as HTMLSelectElement;
      const newDisplayMethod = target.value.toLowerCase();
      dispatch(changeDisplayMethod(newDisplayMethod as possibleDisplayMethodType));
    };

    const handleElementsOnPageChange = (
      ev: SyntheticEvent<HTMLSelectElement>
    ) => {
        const target = ev.target as HTMLSelectElement;
        const newNumberOnPage=parseInt(target.value);
        dispatch(changeElementsOnPage(newNumberOnPage as possibleElementsOnPage))
    };

    const handlePrevPage=()=>{
        if(page>1){
            dispatch(prevPage())
        }
    }

    const handleNextPage=()=>{
        //max page check
        dispatch(nextPage());
    }

    const handleSortChange = (ev: SyntheticEvent<HTMLSelectElement>) => {
        const target = ev.target as HTMLSelectElement;
        const newSortMethod = target.value;
        dispatch(changeSortBy(newSortMethod as possibleSortMethods));
    };

    return {
      page,
      displayMethod,
      elementsOnPage,
      sortMethod,
      handleDisplayMethodChange,
      handleElementsOnPageChange,
      handlePrevPage,
      handleNextPage,
      handleSortChange,
    };
}