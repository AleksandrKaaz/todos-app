import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../presentation/stores/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;