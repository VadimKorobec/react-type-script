import { useSelector } from "react-redux";
import { RootState } from "./components/redux/store";

import NewPost from "./components/NewPost/NewPost";
import PostsList from "./components/PostsList/PostsList";
import Modal from "./components/Modal/Modal";


const App = () => {
  const isOpenModal = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <>
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
