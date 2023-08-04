import { useCallback, useState } from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { activitySlice } from "../../store/activitySlice";
import useBottomSheet from "../BottomSheet/HookBottomSheet";

const useHookActivity = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const dataActivity = useSelector((state) => state.activityItems);

  const { bottomSheetModalRef, snapPoints } = useBottomSheet();

  const deviceHeight = Dimensions.get("window").height;
  const devicewidth = Dimensions.get("window").width;

  const selectedActivity = useSelector(
    (state) => state.activityItems.selectedActivity
  );
  // callbacks
  const handlePresentModalPress = useCallback(async (item) => {
    dispatch(activitySlice.actions.setSelectedActivity(item.id));
    await bottomSheetModalRef.current?.present({ item });
  }, []);

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
    selectedActivity: selectedActivity,
    bottomSheetModalRef: bottomSheetModalRef,
    snapPoints: snapPoints,
    handlePresentModalPress: handlePresentModalPress,
    onRefresh: onRefresh,
    dataActivity: dataActivity,
  };
};

export default useHookActivity;
