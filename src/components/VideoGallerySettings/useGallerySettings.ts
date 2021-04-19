import { SyntheticEvent,useState} from 'react';
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
import {
  deleteAll,
  showDemoVideos,
  selectMaxPage,
  showMyVideos,
} from "../../app/data/videoSlice";

export const useGallerySettings=()=>{

    const [toggleVideos, setToggleVideos] = useState<boolean>(true)

    const dispatch = useDispatch()
    const displayMethod=useSelector(selectDisplayMethod);
    const page=useSelector(selectPage)
    const elementsOnPage=useSelector(selectElementsOnPage)
    const sortMethod=useSelector(selectSortBy);
    const maxPage=useSelector(selectMaxPage)

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
        if(page<maxPage){
            dispatch(nextPage());
        }
    }

    const handleSortChange = (ev: SyntheticEvent<HTMLSelectElement>) => {
        const target = ev.target as HTMLSelectElement;
        const newSortMethod = target.value;
        dispatch(changeSortBy(newSortMethod as possibleSortMethods));
    };

    const deleteVideosFromUi=()=>{
        dispatch(deleteAll());
    }

    const handleDeleteAll=()=>{
        deleteVideosFromUi();
        //TODO: delete from DB
    }

    const handleShowDemoVideos=()=>{
        setToggleVideos(!toggleVideos);
        dispatch(showDemoVideos());
    }

    const handleShowMyVideos=()=>{
        setToggleVideos(!toggleVideos);
        //get Data from DB and push it to state
        dispatch(showMyVideos());
    }

    return {
      page,
      maxPage,
      displayMethod,
      elementsOnPage,
      sortMethod,
      handleDisplayMethodChange,
      handleElementsOnPageChange,
      handlePrevPage,
      handleNextPage,
      handleSortChange,
      handleDeleteAll,
      handleShowDemoVideos,
      handleShowMyVideos,
      toggleVideos,
    };
}