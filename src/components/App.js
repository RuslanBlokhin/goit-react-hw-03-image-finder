import React from "react";
import Button from "./button/Button";
import Container from "./container/Container";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";
import PixabayApi from "../services/Pixabay.api";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    gallery: [],
    page: 1,
    largeImage: "",
    showModal: false,
    q: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      this.fetchGallery();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ q: query, page: 1, gallery: [], error: null });
  };

  fetchGallery = () => {
    const { q, page } = this.state;
    const options = { q, page };

    this.setState({ isLoading: true });
    PixabayApi.fetchPixabayImgs(options)
      .then(({ data }) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  imgClick = (largeImageURL) => {
    this.setState({
      largeImage: largeImageURL,
    });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, gallery, isLoading, error, largeImage } = this.state;
    const shouldShowLoadMoreBtn = gallery.length > 0 && !isLoading;
    return (
      <Container>
        {error && <h1>Try again!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery showGallery={gallery} onImgClick={this.imgClick} />

        {isLoading && <Loader />}
        {shouldShowLoadMoreBtn && (
          <Button text={"Load more"} onClick={this.fetchGallery} />
        )}

        {showModal && (
          <Modal onClose={this.imgClick}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  gallery: PropTypes.array,
  page: PropTypes.number,
  q: PropTypes.string,
  largeImage: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default App;
