import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const TopicManagement = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTopic = () => {
    if (newTopic.trim() !== "") {
      setTopics([...topics, newTopic]);
      setNewTopic("");
    }
  };

  const deleteTopic = (index) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(topics[index]);
  };

  const saveEdit = (index) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = editText;
    setTopics(updatedTopics);
    setEditingIndex(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Topic Management</h2>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Enter new topic"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <Button onClick={addTopic}>
          <FaPlus className="mr-2" /> Add
        </Button>
      </div>
      <div className="grid gap-4">
        {topics.map((topic, index) => (
          <Card key={index} className="flex justify-between items-center p-4">
            {editingIndex === index ? (
              <div className="flex gap-2">
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <Button onClick={() => saveEdit(index)}>Save</Button>
              </div>
            ) : (
              <CardContent>{topic}</CardContent>
            )}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => startEditing(index)}>
                <FaEdit />
              </Button>
              <Button variant="destructive" onClick={() => deleteTopic(index)}>
                <FaTrash />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopicManagement;
