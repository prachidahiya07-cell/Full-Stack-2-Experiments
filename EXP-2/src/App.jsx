import "./styles.css";

import AddPost from "./components/AddPost";
import PlatformSelector from "./components/PlatformSelector";
import PostList from "./components/PostList";

function App() {

  return (

    <div className="container">

      <header>

        <h1>📱 Social Media Post Manager</h1>

        <p>
          Manage your social media posts using Redux Toolkit
        </p>

      </header>

      <div className="dashboard">

        <AddPost />

        <PostList />

      </div>

      <PlatformSelector />

    </div>

  );

}

export default App;