import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <a
                href="#dashboard"
                className="block py-2.5 px-4 rounded hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#users"
                className="block py-2.5 px-4 rounded hover:bg-gray-700"
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="#analytics"
                className="block py-2.5 px-4 rounded hover:bg-gray-700"
              >
                Analytics
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="block py-2.5 px-4 rounded hover:bg-gray-700"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
            <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Users
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-4">1,234</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Sales
              </h3>
              <p className="text-3xl font-bold text-green-600 mt-4">$12,345</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Active Sessions
              </h3>
              <p className="text-3xl font-bold text-yellow-600 mt-4">456</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
