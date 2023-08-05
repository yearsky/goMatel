import { useCallback, useState } from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { nopolSlice } from "../../store/nopolSlice";
import useBottomSheet from "../BottomSheet/HookBottomSheet";

const useHookNopol = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const dataNopol = useSelector((state) => state.nopol);

  const { bottomSheetModalRef, refB, snapPoints } = useBottomSheet();

  const deviceHeight = Dimensions.get("window").height;
  const devicewidth = Dimensions.get("window").width;

  // callbacks
  const handlePresentModalPress = useCallback(async (item) => {
    // dispatch(nopolSlice.actions.setSelectedNopol(item.id));
    await bottomSheetModalRef.current?.present({ item });
  }, []);

  const handleAddModal = useCallback(async () => {
    await refB.current?.present();
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return {
    refreshing: refreshing,
    deviceHeight: deviceHeight,
    devicewidth: devicewidth,
    bottomSheetModalRef: bottomSheetModalRef,
    refB: refB,
    snapPoints: snapPoints,
    handlePresentModalPress: handlePresentModalPress,
    onRefresh: onRefresh,
    dataNopol: dataNopol,
    handleAddModal: handleAddModal,
  };
};

export default useHookNopol;
