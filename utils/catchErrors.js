function catchErrors(error, displayError) {
  let errorMsg;

  if (error.response) {
    // Request was made and the server responded with a status code that is not 2xx
    errorMsg = error.response.data;
    console.error('Error response', errorMsg);

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // Request was made, but no response was received
    errorMsg = error.request;
    console.error('Error response', errorMsg);
  } else {
    // Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error('Error message', errorMsg);
  }

  displayError(errorMsg);
}

export default catchErrors;
