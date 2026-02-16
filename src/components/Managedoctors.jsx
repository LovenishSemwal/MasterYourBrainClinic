import { useState } from "react";
import { Plus, Search, Edit2, Trash2, X } from "lucide-react";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: "1",
      name: "Dr. Priya Sharma",
      specialization: "Anxiety & Depression",
      experience: "15+ years",
      contact: "+91 98765 00001",
      availability: "Mon–Fri, 9AM–5PM",
      profileImage: ""
    },
    {
      id: "2",
      name: "Dr. Rahul Verma",
      specialization: "Mood Disorders & PTSD",
      experience: "12+ years",
      contact: "+91 98765 00002",
      availability: "Mon–Sat, 10AM–6PM",
      profileImage: ""
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    contact: "",
    profileImage: "",
    availability: ""
  });

  const emptyDoctor = {
    name: "",
    specialization: "",
    experience: "",
    contact: "",
    profileImage: "",
    availability: ""
  };

  const filtered = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialization.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setForm(emptyDoctor);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (d) => {
    setForm({
      name: d.name,
      specialization: d.specialization,
      experience: d.experience,
      contact: d.contact,
      profileImage: d.profileImage,
      availability: d.availability
    });
    setEditingId(d.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setDoctors((prev) => prev.filter((d) => d.id !== id));
  };

  const handleSave = () => {
    if (!form.name.trim()) return;

    if (editingId) {
      setDoctors((prev) =>
        prev.map((d) => (d.id === editingId ? { ...d, ...form } : d))
      );
    } else {
      setDoctors((prev) => [...prev, { ...form, id: crypto.randomUUID() }]);
    }
    setShowForm(false);
  };

  const formFields = [
    { key: "name", label: "Doctor Name" },
    { key: "specialization", label: "Specialization" },
    { key: "experience", label: "Experience" },
    { key: "contact", label: "Contact Info" },
    { key: "profileImage", label: "Profile Image URL (optional)" },
    { key: "availability", label: "Availability" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Doctors</h1>
          <p className="text-sm text-gray-500">{doctors.length} doctors registered</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Doctor
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search doctors…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* Form Card */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {editingId ? "Edit Doctor" : "Add Doctor"}
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formFields.map(({ key, label }) => (
                <div key={key} className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type="text"
                    value={form[key] || ""}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
            >
              {editingId ? "Update" : "Add"} Doctor
            </button>
          </div>
        </div>
      )}

      {/* Table Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Specialization
                </th>
                <th className="hidden lg:table-cell px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Experience
                </th>
                <th className="hidden lg:table-cell px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Availability
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">{d.name}</td>
                  <td className="hidden md:table-cell px-4 py-4 text-sm text-gray-700">
                    {d.specialization}
                  </td>
                  <td className="hidden lg:table-cell px-4 py-4 text-sm text-gray-700">
                    {d.experience}
                  </td>
                  <td className="hidden lg:table-cell px-4 py-4 text-sm text-gray-700">
                    {d.availability}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => openEdit(d)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(d.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No doctors found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;