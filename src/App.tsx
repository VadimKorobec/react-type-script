import { useState } from "react";
import NewPost from "./components/NewPost/NewPost";
import PostsList from "./components/PostsList/PostsList";
import Modal from "./components/Modal/Modal";
import MainHeader from "./components/MainHeader/MainHeader";

const App = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setToggleModal((prevState) => !prevState);
  };

  return (
    <>
      <MainHeader onToggleModal={handleToggleModal}  />
      <main>
        {toggleModal && (
          <Modal onToggleModal={handleToggleModal}>
            <NewPost onToggleModal={handleToggleModal} />
          </Modal>
        )}
        <PostsList />
      </main>
    </>
  );
};

export default App;
