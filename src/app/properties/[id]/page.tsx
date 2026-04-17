export default function PropertyDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img
        src="https://source.unsplash.com/800x500/?house"
        className="rounded-2xl"
      />

      <div>
        <h1 className="text-2xl font-bold">Luxury Villa</h1>
        <p className="text-gray-500">Vancouver</p>

        <p className="mt-4">
          Beautiful modern villa with ocean view.
        </p>

        <div className="mt-6 text-xl font-bold text-blue-600">
          $250 / night
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Book Now
        </button>
      </div>
    </div>
  );
}