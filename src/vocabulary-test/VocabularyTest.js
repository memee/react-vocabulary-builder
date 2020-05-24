import React from "react";
import { useParams } from "react-router-dom";
import {
  useVocabularyTestStore,
  useVocabularyStore,
} from "../persistence/persistence";

export default function VocabularyTest() {
  const { id } = useParams();
  const { list } = useVocabularyStore();
  const { taken, available } = useVocabularyTestStore(id, list);
  return <div>TEEST</div>;
}
