import Profile from "./Profile";

const Home = (props: any) => {
  return (
    <main className="pt-16 bg-gradient-to-b from-[#C2B0A1] to-[#897765]">
      <Profile
        extendArrow={props.extendArrow}
        extendProfile={props.extendProfile}
      />
    </main>
  );
};

export default Home;
