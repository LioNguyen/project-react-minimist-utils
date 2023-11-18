/**
 * @param requestCallback compulsory
 * @param successCallback optional
 * @param failureCallback optional
 * @param getLoadingState optional to get loading state when call api
 * @param showLog optional to show log when call api
 * @description utilizes fetch data method from api
 */
export const fetchData = async ({
  requestCallback,
  successCallback,
  failureCallback,
  getLoadingState,
  showLog = false,
}: {
  requestCallback: () => Promise<Response>;
  successCallback?: (res: any) => void;
  failureCallback?: (error: any) => void;
  getLoadingState?: (state: boolean) => void;
  showLog?: boolean;
}) => {
  try {
    getLoadingState && getLoadingState(true);

    const res = await requestCallback();
    showLog && console.log("🚀 @log ~ fetchData ~ res:", res);

    if (!!successCallback) {
      successCallback(res);
    }
  } catch (error: any) {
    showLog && console.log("🚀 @log ~ fetchData ~ error:", error?.response);

    if (!!failureCallback) {
      failureCallback(error?.response);
    }
  } finally {
    getLoadingState && getLoadingState(false);
  }
};
