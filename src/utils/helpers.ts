export const startDownload = async (src: string) => {
  const target = await fetch(src);
  const imageBlog = await target.blob();
  const imageURL = URL.createObjectURL(imageBlog);
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = imageBlog.type;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadVideo = (src: string): void => {
  const link = document.createElement('a');
  link.href = src;
  link.download = 'video';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
