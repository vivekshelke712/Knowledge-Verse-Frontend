import React, { useState, useEffect, useMemo } from "react";

import { useSelector } from "react-redux";
import {
  useAddResourceMutation,
  useDeleteResourceMutation,
  useGetResourcesQuery,
  useUpdateResourceMutation,
} from "../../redux/api/resourceApi";

const ResourcesPage = () => {
  const { user } = useSelector((state) => state.user);
  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    userId: user.userId,
  });
  console.log(newResource);
  console.log(user);
  const userId = useMemo(() => user?.userId, [user]);

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const {
    data: resources,
    error,
    isLoading,
  } = useGetResourcesQuery(userId, {
    skip: !userId,
  });

  const [addResource, { isLoading: isAdding }] = useAddResourceMutation();
  const [updateResource, { isLoading: isUpdating }] =
    useUpdateResourceMutation();
  const [deleteResource] = useDeleteResourceMutation();

  useEffect(() => {
    if (editMode && resources) {
      const resourceToEdit = resources.find((res) => res._id === editId);
      if (resourceToEdit) {
        setNewResource({
          title: resourceToEdit.title,
          description: resourceToEdit.description,
          image: resourceToEdit.image,
          link: resourceToEdit.link,
        });
      }
    }
  }, [editMode, editId, resources]);

  const handleChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = async () => {
    const { title, description, image, link } = newResource;
    if (!title || !description || !image || !link) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      if (editMode) {
        await updateResource({
          userId,
          resourceId: editId,
          updatedData: newResource,
        });
      } else {
        await addResource({ userId, resource: newResource });
      }
    } catch (err) {
      console.error("Error:", err);
    }

    setNewResource({ title: "", description: "", image: "", link: "" });
    setEditMode(false);
    setEditId(null);
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this resource?"
    );
    if (!confirm) return;

    try {
      await deleteResource({ userId, resourceId: id });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEdit = (resource) => {
    setEditMode(true);
    setEditId(resource._id);
    setShowModal(true);
  };

  if (!userId) return <p>Loading user...</p>;
  if (isLoading) return <p>Loading resources...</p>;
  if (error) return <p>Error loading resources.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2 tracking-tight">
          📚 Resources Vault
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Save, discover, and explore high-quality tech resources to level up
          your skills.
        </p>

        <button
          className="mb-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
          onClick={() => {
            setEditMode(false);
            setNewResource({ title: "", description: "", image: "", link: "" });
            setShowModal(true);
          }}
        >
          ➕ Add New Resource
        </button>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-xl">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {editMode ? "Edit Resource" : "Add New Resource"}
              </h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newResource.title}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newResource.description}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newResource.image}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="link"
                placeholder="Link"
                value={newResource.link}
                onChange={handleChange}
                className="w-full mb-5 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setEditMode(false);
                    setNewResource({
                      title: "",
                      description: "",
                      image: "",
                      link: "",
                      userId: user.userId,
                    });
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddOrUpdate}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                  disabled={isAdding || isUpdating}
                >
                  {editMode
                    ? isUpdating
                      ? "Updating..."
                      : "Update"
                    : isAdding
                    ? "Adding..."
                    : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}

        {resources?.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No resources found. Add some to get started! 🚀
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res) => (
              <div
                key={res._id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {res.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {res.description}
                  </p>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:opacity-90 transition"
                  >
                    🔗 Visit Resource
                  </a>
                  <div className="flex justify-between mt-4 text-sm font-medium">
                    <button
                      onClick={() => startEdit(res)}
                      className="text-blue-600 hover:underline"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(res._id)}
                      className="text-red-500 hover:underline"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
