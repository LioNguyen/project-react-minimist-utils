export const DOWNLOAD_LINK_SAMPLE =
  "https://download.microsoft.com/download/1/4/E/14EDED28-6C58-4055-A65C-23B4DA81C4DE/Financial%20Sample.xlsx";

/**
 * @description handle download a file from specific url
 */
export function downloadFile(downloadUrl: string, fileName: string = "file") {
  const a = document.createElement("a");

  a.setAttribute("href", downloadUrl);
  a.setAttribute("download", fileName);
  a.setAttribute("target", "_blank");
  document.body.appendChild(a);

  a.click();
  window.URL.revokeObjectURL(downloadUrl);
  a.remove();
}
