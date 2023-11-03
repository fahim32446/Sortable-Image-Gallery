import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Photo } from "./Photo";

interface SortablePhotoProps {
  key: string;
  url: string;
  index: number;
  selected: string[];
}

export const SortablePhoto: React.FC<SortablePhotoProps> = (props) => {
  const sortable = useSortable({ id: props.url });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // const handleDeleteClick = () => {
  //   setItems((prevItems) => prevItems.filter((url) => !selected.includes(url)));
  //   setSelected([]); // Clear the selected array after deletion
  // };

  return (
    <Photo
      ref={setNodeRef}
      style={style}
      currentItemUrl={props.selected}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
