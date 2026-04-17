import PropertyCard from "./PropertyCard";
import { useProperties } from "../context/PropertyContext";

interface PropertyGridProps {
  searchQuery: string;
}

export default function PropertyGrid({ searchQuery }: PropertyGridProps) {
  const { properties: customProperties } = useProperties();

  const defaultProperties = [
    {
      id: 1,
      title: "Modern Apartment",
      location: "Toronto",
      price: 120,
      rating: 4.8,
      image:
        "https://picsum.photos/id/1018/1200/800",
      description: "A sleek and contemporary apartment in downtown Toronto, featuring modern amenities, city views, and easy access to local attractions."
    },
    {
      id: 2,
      title: "Beach House",
      location: "Vancouver",
      price: 200,
      rating: 4.9,
      image:
        "https://picsum.photos/id/1015/1200/800",
      description: "A charming beach house in Vancouver with stunning ocean views, perfect for a relaxing getaway with family or friends."
    },
    {
      id: 3,
      title: "Cozy Cottage",
      location: "Whistler",
      price: 150,
      rating: 4.7,
      image:
        "https://picsum.photos/id/1020/1200/800",
      description: "A cozy cottage nestled in the mountains of Whistler, ideal for skiing enthusiasts and nature lovers seeking a peaceful retreat."
    },
    {
      id: 4,
      title: "Luxury Villa",
      location: "Miami",
       price: 500,
      rating: 4.9,
      image:
        "https://picsum.photos/id/1024/1200/800",
      description: "An opulent luxury villa in Miami with private pool, beach access, and high-end furnishings for the ultimate vacation experience."
    },
    {
      id: 5,
      title: "Charming Bungalow",
      location: "Los Angeles",
      price: 300,
      rating: 4.6,
      image:
        "https://picsum.photos/id/1031/1200/800",
      description: "A charming bungalow in Los Angeles, blending vintage charm with modern comforts, located in a quiet neighborhood."
    },
    {
      id: 6,
      title: "Stylish Loft",
      location: "New York",
      price: 400,
      rating: 4.8,
      image:
        "https://picsum.photos/id/1043/1200/800",
      description: "A stylish loft in the heart of New York City, featuring industrial design, high ceilings, and proximity to cultural hotspots."
    },
    {
      id: 7,
      title: "Rustic Farmhouse",
      location: "Napa Valley",
      price: 250,
      rating: 4.5,
      image:
        "https://picsum.photos/id/1050/1200/800",
      description: "A rustic farmhouse in Napa Valley, surrounded by vineyards, offering a taste of countryside living with wine country amenities."
    },
    {
      id: 8,
      title: "Elegant Mansion",
      location: "Paris",
      price: 600,
      rating: 4.9,
      image:
        "https://picsum.photos/id/1057/1200/800",
      description: "An elegant mansion in Paris with classic architecture, spacious rooms, and a garden, perfect for a luxurious European stay."
    },
    {
      id: 9,
      title: "Seaside Retreat",
      location: "Malibu",
      price: 350,
      rating: 4.7,
      image:
        "https://picsum.photos/id/1060/1200/800",
      description: "A serene seaside retreat in Malibu, with direct beach access, sunset views, and a tranquil atmosphere for unwinding."
    },
    {
      id: 10,
      title: "Mountain Cabin",
      location: "Aspen",
      price: 450,
      rating: 4.8,
      image:
        "https://picsum.photos/id/1069/1200/800",
      description: "A cozy mountain cabin in Aspen, equipped for winter sports, with a fireplace and breathtaking alpine scenery."
    },
    {
      id: 11,
      title: "Urban Apartment",
      location: "Chicago",
      price: 220,
      rating: 4.6,
      image:
        "https://picsum.photos/id/1074/1200/800",
      description: "A modern urban apartment in Chicago, close to downtown attractions, with contemporary design and city conveniences."
    },
    {
      id: 12,
      title: "Countryside Villa",
      location: "Amalfi",
      price: 380,
      rating: 4.7,
      image:
        "https://picsum.photos/id/1080/1200/800",
      description: "A picturesque countryside villa in Amalfi, overlooking the sea, with traditional Italian charm and local cuisine nearby."
    },
    {
      id: 13,
      title: "Historic Castle",
      location: "Scotland",
      price: 700,
      rating: 5.0,
      image:
        "https://picsum.photos/id/1084/1200/800",
      description: "A historic castle in Scotland, steeped in history, with grand halls, towers, and expansive grounds for an unforgettable stay."
    },
    {
      id: 14,
      title: "Tropical Paradise",
      location: "Bali",
      price: 550,
      rating: 4.9,
      image:
        "https://picsum.photos/id/1081/1200/800",
      description: "A tropical paradise villa in Bali, with lush gardens, a private pool, and proximity to beaches and cultural sites."
    },
    {
      id: 15,
      title: "Chic Studio",
      location: "Barcelona",
      price: 300,
      rating: 4.6,
      image:
        "https://picsum.photos/id/109/1200/800",
      description: "A chic studio apartment in Barcelona, stylishly designed with modern art, near Gaudi's masterpieces and vibrant nightlife."
    },
    {
      id: 16,
      title: "Artistic Loft",
      location: "Berlin",
      price: 350,
      rating: 4.7,
      image:
        "https://picsum.photos/id/110/1200/800",
      description: "An artistic loft in Berlin, featuring creative spaces, exposed brick, and access to the city's renowned art scene."
    },
    {
      id: 17,
      title: "Modern Farmhouse",
      location: "Austin",
      price: 400,
      rating: 4.8,
      image:
        "https://picsum.photos/id/111/1200/800",
      description: "A modern farmhouse in Austin, blending rustic elements with contemporary design, set in the Texas Hill Country."
    },
    {
      id: 18,
      title: "Coastal Retreat",
      location: "Cape Cod",
      price: 450,
      rating: 4.9,
      image:
        "https://picsum.photos/id/112/1200/800",
      description: "A coastal retreat on Cape Cod, with oceanfront views, lighthouse nearby, and a perfect spot for beachcombing."
    },
    {
      id: 19,
      title: "Elegant Apartment",
      location: "Lisbon",
      price: 320,
      rating: 4.6,
      image:
        "https://picsum.photos/id/113/1200/800",
      description: "An elegant apartment in Lisbon, with traditional Portuguese architecture, tiled floors, and views of the Tagus River."
    },
    {
      id: 20,
      title: "Luxury Condo",
      location: "Dubai",
      price: 600,
      rating: 4.9,
      image:
        "https://picsum.photos/id/114/1200/800",
      description: "A luxury condo in Dubai, with futuristic design, Burj Khalifa views, and access to world-class shopping and dining."
    },
  ];

  const allProperties = [...defaultProperties, ...customProperties];

  const filteredProperties = searchQuery
    ? allProperties.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProperties;

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {filteredProperties.map((p) => (
        <PropertyCard key={p.id} property={p} className="text-black" />
      ))}
    </div>
  );
}
