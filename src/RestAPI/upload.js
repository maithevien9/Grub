const UploadAPI = async (formData) => {
  var url = 'http://192.168.71.119:8001/upload';

  return await fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.json());
};

export default UploadAPI;
