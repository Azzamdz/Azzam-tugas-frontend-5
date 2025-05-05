import ProfileCard from "./component/ProfileCard";
import profiles from "./data/dummyProfile";

export default function App() {
  console.log(profiles);
  return (
    <main>
      <h1 className="text-2xl">
        <span>My Personal</span> <br />{" "}
        <span className="font-semibold">Contact Book</span>
      </h1>

      <div className="kumpulan-kontak">
        {profiles.map((profile) => (
          <ProfileCard
            className="card"
            name={profile.name}
            address={profile.address}
            pfp={profile.pfp}
            phone={profile.phone}
            bestie={profile.bestie}
          />
        ))}
      </div>
    </main>
  );
}
