const mapStoreToProps = (reduxState) => {
  return {
    // reduxState properties bound to "props.store"
    // ---------
    store: reduxState,
    auth: reduxState.auth,
  };
};

export default mapStoreToProps;
