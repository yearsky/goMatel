import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { Animated } from "react-native";
import { useDispatch } from "react-redux";
import { nopolSlice } from "../../store/nopolSlice";
import Toast from "react-native-toast-message";

const useAddHook = () => {
  const dispatch = useDispatch();
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const { dismiss, dismissAll } = useBottomSheetModal();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("aktif");
  const widthAnimation = useRef(new Animated.Value(0)).current;
  const totalViews = 3;
  const [items, setItems] = useState([
    { label: "Aktif", value: "aktif" },
    { label: "Tidak Aktif", value: "tidakAktif" },
  ]);

  const handleNextButton = () => {
    if (currentViewIndex === 3) {
      const newId = Math.floor(Math.random() * 1000000);
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      for (const key in formValues) {
        if (!formValues[key]) {
          alert("Data tidak boleh kosong!");
          return;
        }
      }
      const newData = {
        ...formValues,
        id: newId,
        date: currentDate,
      };

      dispatch(nopolSlice.actions.addNewData(newData));
      dismiss();
      Toast.show({
        type: "success",
        text2: "Yay! Data Berhasil Ditambahkan 🥳",
      });
    } else {
      setCurrentViewIndex(currentViewIndex + 1);
      Animated.timing(widthAnimation, {
        toValue: (currentViewIndex + 1) / totalViews,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  const handlePreviousButton = () => {
    setCurrentViewIndex(currentViewIndex - 1);
    Animated.timing(widthAnimation, {
      toValue: (currentViewIndex - 1) / totalViews,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const [formValues, setFormValues] = useState({
    namaLeasing: "",
    cabangLeasing: "",
    barang: "",
    plat: "",
    model: "",
    namaPemilik: "",
    nomorRangka: "",
    nomorMesin: "",
    sisaHutang: "",
    overDue: "",
    note: "",
    status: value,
  });

  const handleInputChange = (name, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    handleNextButton: handleNextButton,
    handlePreviousButton: handlePreviousButton,
    totalViews: totalViews,
    items: items,
    value: value,
    handleInputChange: handleInputChange,
    open: open,
    formValues: formValues,
    setFormValues: setFormValues,
    setValue: setValue,
    setOpen: setOpen,
    setItems: setItems,
    currentViewIndex: currentViewIndex,
    widthAnimation: widthAnimation,
  };
};

export default useAddHook;
