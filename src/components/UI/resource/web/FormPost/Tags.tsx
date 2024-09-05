// src/components/UI/resource/web/FormPost/Tags.tsx
import { useGetTags } from "@/hooks/db/tags/useGetTags";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import dynamic from "next/dynamic";

const CommandTheme = dynamic(() => import("./CommandTheme"), {
  loading: () => <p>Loading...</p>,
});

export default function Tags({
  onSelectTags,
}: {
  onSelectTags: (selectedTags: string[]) => void;
}) {
  const { tags, loading, error } = useGetTags();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedTags = selectedTags.includes(category)
      ? selectedTags.filter((c) => c !== category)
      : [...selectedTags, category];

    setSelectedTags(updatedTags);
    onSelectTags(updatedTags);
  };

  if (loading) return <p>Cargando tags...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <CommandTheme title="Tags">
        {tags.map((tag) => (
          <div key={tag} className="flex items-center space-x-2 py-2">
            <Checkbox
              id={tag}
              checked={selectedTags.includes(tag)}
              onCheckedChange={() => handleCategoryChange(tag)}
            />
            <Label htmlFor={tag}>{tag}</Label>
          </div>
        ))}
      </CommandTheme>
    </>
  );
}
