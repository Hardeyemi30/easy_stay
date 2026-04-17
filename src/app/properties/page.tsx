import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Find your perfect stay 🏡
      </h1>

      <SearchBar onSearch={function (query: string): void {
              throw new Error("Function not implemented.");
          } } />
      <PropertyGrid searchQuery={""} />
    </div>
  );
}