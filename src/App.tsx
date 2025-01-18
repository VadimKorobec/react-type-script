import NewPost from "./components/NewPost/NewPost";
import PostsList from "./components/PostsList/PostsList";
import Modal from "./components/Modal/Modal";
import MainHeader from "./components/MainHeader/MainHeader";
import { useSelector } from "react-redux";
import { RootState } from "./components/redux/store";

const App = () => {
  const isOpenModal = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <>
      <MainHeader />
      <main>
        {isOpenModal && (
          <Modal>
            <NewPost />
          </Modal>
        )}
        <PostsList />
      </main>
    </>
  );
};

export default App;
