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
  VideoData,
} from "../../app/data/videoSlice";
import {database} from '../../api/DatabaseManager';

export const useGallerySettings=()=>{

    const [toggleVideos, setToggleVideos] = useState<boolean>(true)
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

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
        database.dangerousDropDatabase();
        toggleModal()
    }

    const handleShowDemoVideos=()=>{
        setToggleVideos(!toggleVideos);
        dispatch(showDemoVideos());
    }

    const handleShowMyVideos=()=>{
        setToggleVideos(!toggleVideos);
        database.getAllObjects<(result: VideoData[]) => void>(
          "videos",
          (videos) => {dispatch(showMyVideos(videos));}
        );
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
      modal,
      toggleModal,
    };
}