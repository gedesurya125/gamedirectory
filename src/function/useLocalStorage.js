export const FAVOURITE_GAMES = "favouriteGames";

const useLocalStorage = () => {
  const getAllDataStorage = (strName) =>
    JSON.parse(localStorage.getItem(strName));

  // const getAllDataStorage = (strName) => localStorage.getItem(strName);

  const setDataToStorage = (dt, strName) =>
    localStorage.setItem(strName, JSON.stringify(dt));

  // const setDataToStorage = (dt, strName) =>
  //   localStorage.setItem(strName, dt);

  const deleteStorateItem = (id, strName) => {
    const storageData = getAllDataStorage(strName);
    const afterDelete = storageData.filter((data) => data.id !== id);
    setDataToStorage(afterDelete, strName);
  };
  const addStorageItem = (data, strName) => {
    const storageData = getAllDataStorage(strName);
    // console.log("LOCALSTORAGE", storageData);
    if (!storageData) {
      // console.log("this caled");
      setDataToStorage([data], strName);
    } else {
      storageData.push(data);
      setDataToStorage(storageData, strName);
    }
  };
  return {
    getAllDataStorage,
    setDataToStorage,
    deleteStorateItem,
    addStorageItem,
  };
};
export default useLocalStorage;
