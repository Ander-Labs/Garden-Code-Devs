// src/components/UI/resource/web/FormPost/Tags.tsx
import { useGetTags } from "@/hooks/db/tags/useGetTags";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";

const CommandTheme = dynamic(() => import("./CommandTheme"), {
  loading: () => <p>Loading...</p>,
});

export default function Tags({
  selectedTags,
  onSelectTags,
}: {
  selectedTags: string[];
  onSelectTags: (selectedTags: string[]) => void;
}) {
  const { tags, loading, error } = useGetTags();

  const handleTagChange = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    onSelectTags(updatedTags); // Pasar los tags actualizados al padre
  };

  if (loading) return <p>Cargando tags...</p>;
  if (error) return <p>{error}</p>;

  return (
    <CommandTheme title="Tags">
      {tags.map((tag) => (
        <div key={tag} className="flex items-center space-x-2 py-2">
          <Checkbox
            id={tag}
            checked={selectedTags.includes(tag)}
            onCheckedChange={() => handleTagChange(tag)}
          />
          <Label htmlFor={tag}>{tag}</Label>
        </div>
      ))}
    </CommandTheme>
  );
}
