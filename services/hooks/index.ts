import { useMemo } from "react";
import {
  useGetBankInformationQuery,
  useCreateDonateMutation,
} from "@/services/bank";

export const useBank = () => {
  const { data, refetch, isLoading, fulfilledTimeStamp } =
    useGetBankInformationQuery("");
  const [
    createDonate,
    {
      isSuccess: isDonateSuccess,
      isLoading: isDonateLoading,
      isError: isDonateError,
    },
  ] = useCreateDonateMutation();

  return useMemo(() => {
    return {
      data,
      fetchBank: refetch,
      isLoading,
      createDonate,
      isDonateLoading,
      isDonateSuccess,
      isDonateError,
      lastUpdatedAt: fulfilledTimeStamp,
    };
  }, [
    data,
    refetch,
    isLoading,
    createDonate,
    isDonateLoading,
    isDonateSuccess,
    isDonateError,
    fulfilledTimeStamp,
  ]);
};
