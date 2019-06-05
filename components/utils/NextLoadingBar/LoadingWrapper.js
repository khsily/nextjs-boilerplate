import withLoading from './withLoading';

const LoadingWrapper = ({ children }) => {
  return children;
}

export default withLoading(LoadingWrapper);