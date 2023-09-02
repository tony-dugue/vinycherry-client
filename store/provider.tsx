"use client";

import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode;
}

const CustomProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
