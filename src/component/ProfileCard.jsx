export default function ProfileCard({ name, address, phone, pfp, bestie }) {
  return (
    <div
      className={`flex flex-col border border-[#efefef] p-8 rounded-lg max-w-md shadow-md mb-10  ${
        bestie ? "bg-green-50" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4 pb-3 mb-6">
        <img
          src={pfp}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="text-xl font-medium">{name}</p>

        {bestie && (
          <span className="text-xs font-medium text-black bg-green-400 px-4 py-2 rounded-[50px]">
            BEST FRIEND
          </span>
        )}
      </div>

      <hr className="my-3 border-t border-gray-300" />

      <div className="flex justify-between items-center mt-3 mb-6">
        <div className="flex items-center gap-3 flex-1">
          <img src="/icon/icon-l.png" alt="address" className="w-4 h-4" />
          <p className="text-sm text-gray-800">{address}</p>
        </div>

        <div className="flex items-center gap-3">
          <img src="/icon/icon-c.png" alt="phone" className="w-4 h-4" />
          <a
            href={`https://wa.me/${phone}`}
            className="text-sm text-blue-600 hover:underline"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
