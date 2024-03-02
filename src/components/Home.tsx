import Profile from "./Profile";

interface HomeProps {
  extendArrow: boolean;
  extendProfile: () => void;
}

const Home = ({ extendArrow, extendProfile }: HomeProps ) => {
  return (
    <main className="pt-16 bg-gradient-to-b from-[#C2B0A1] to-[#897765]">
      <Profile
        extendArrow={extendArrow}
        extendProfile={extendProfile}
      />
    </main>
  );
};
export default Home
