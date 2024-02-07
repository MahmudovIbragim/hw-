import scss from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.Content}></div>
      </div>
    </div>
  );
};

export default HomePage;
