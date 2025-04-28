export default function ProfileCard({ name, address, phone, pfp }) {
  return (
    <div className="card">
      <div className="item">
        <img src={pfp} alt="" />
        <p>{name}</p>
      </div>

      <div className="desc">
        <div className="almt">
          <img src="/icon/icon-l.png" alt="" className="icon" />
          <p>{address}</p>
        </div>

        <div className="phone">
          <img src="/icon/icon-c.png" alt="" className="icon" />
          <a href={`https://wa.me/${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
