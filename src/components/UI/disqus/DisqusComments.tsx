// src/components/DisqusComments.tsx
"use client";
import { DiscussionEmbed } from "disqus-react";

interface DisqusCommentsProps {
  slug: string; // Slug o identificador del artículo/recurso
  title: string; // Título del artículo
}

const DisqusComments = ({ slug, title }: DisqusCommentsProps) => {
  const disqusShortname = "garden-code"; // Reemplaza con tu shortname
  const disqusConfig = {
    url: `https://garden-code.vercel.app/resources/${slug}`, // La URL completa del artículo o recurso
    identifier: slug, // Un identificador único para cada artículo/recurso
    title: title, // El título del artículo o recurso
    language: "es_es",
  };

  return (
    <>
      <div className="disqus-comments">
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </>
  );
};

export default DisqusComments;
