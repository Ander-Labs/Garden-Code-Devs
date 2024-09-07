// src/components/UI/resource/web/FormPost/Category.tsx
import { useGetCategories } from "@/hooks/db/category/useGetCategory";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";

const CommandTheme = dynamic(() => import("./CommandTheme"), {
  loading: () => <p>Loading...</p>,
});

export default function Category({
  selectedCategories,
  onSelectCategories,
}: {
  selectedCategories: string[];
  onSelectCategories: (selectedCategories: string[]) => void;
}) {
  const { categories, loading, error } = useGetCategories();

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    onSelectCategories(updatedCategories); // Pasar las categorías actualizadas al padre
  };

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>{error}</p>;

  return (
    <CommandTheme title="Categorías">
      {categories.map((category) => (
        <div key={category} className="flex items-center space-x-2 py-2">
          <Checkbox
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
          />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </CommandTheme>
  );
}
