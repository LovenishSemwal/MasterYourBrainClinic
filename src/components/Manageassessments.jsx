import { useState } from "react";
import { Plus, Edit2, Trash2, X, ChevronDown, ChevronUp } from "lucide-react";

const questionTypeLabels = {
  multiple_choice: "Multiple Choice",
  yes_no: "Yes / No",
  scale: "Scale (1–5)",
};

const ManageAssessments = () => {
  const [assessments, setAssessments] = useState([
    {
      id: "1",
      title: "Anxiety Screening",
      description: "Quick anxiety level assessment",
      questions: [
        { id: "q1", text: "Do you often feel nervous?", type: "yes_no" },
        { id: "q2", text: "Rate your stress level", type: "scale" },
      ],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  // Question form state
  const [qText, setQText] = useState("");
  const [qType, setQType] = useState("multiple_choice");
  const [qOptions, setQOptions] = useState("");
  const [editingQId, setEditingQId] = useState(null);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setQuestions([]);
    setEditingId(null);
    setShowForm(false);
    resetQForm();
  };

  const resetQForm = () => {
    setQText("");
    setQType("multiple_choice");
    setQOptions("");
    setEditingQId(null);
  };

  const openAdd = () => {
    resetForm();
    setShowForm(true);
  };

  const openEdit = (a) => {
    setTitle(a.title);
    setDescription(a.description);
    setQuestions([...a.questions]);
    setEditingId(a.id);
    setShowForm(true);
  };

  const handleDeleteAssessment = (id) => {
    setAssessments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSaveAssessment = () => {
    if (!title.trim()) return;

    const data = {
      id: editingId || crypto.randomUUID(),
      title,
      description,
      questions,
    };

    if (editingId) {
      setAssessments((prev) => prev.map((a) => (a.id === editingId ? data : a)));
    } else {
      setAssessments((prev) => [...prev, data]);
    }
    resetForm();
  };

  const addOrUpdateQuestion = () => {
    if (!qText.trim()) return;

    const q = {
      id: editingQId || crypto.randomUUID(),
      text: qText,
      type: qType,
      options:
        qType === "multiple_choice"
          ? qOptions
              .split(",")
              .map((o) => o.trim())
              .filter(Boolean)
          : undefined,
    };

    if (editingQId) {
      setQuestions((prev) => prev.map((x) => (x.id === editingQId ? q : x)));
    } else {
      setQuestions((prev) => [...prev, q]);
    }
    resetQForm();
  };

  const editQuestion = (q) => {
    setQText(q.text);
    setQType(q.type);
    setQOptions(q.options?.join(", ") || "");
    setEditingQId(q.id);
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Assessments</h1>
          <p className="text-sm text-gray-500">
            {assessments.length} assessments created
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Create Assessment
        </button>
      </div>

      {/* Assessment Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {editingId ? "Edit Assessment" : "New Assessment"}
            </h2>
            <button
              onClick={resetForm}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Questions list */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Questions ({questions.length})
              </h3>
              <div className="space-y-2 mb-4">
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2"
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        {i + 1}. {q.text}
                      </span>
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800 border border-teal-200">
                        {questionTypeLabels[q.type]}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => editQuestion(q)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => deleteQuestion(q.id)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add question mini-form */}
              <div className="border border-gray-300 rounded-lg p-4 space-y-3">
                <p className="text-sm font-medium text-gray-900">
                  {editingQId ? "Edit Question" : "Add Question"}
                </p>
                <input
                  type="text"
                  placeholder="Question text"
                  value={qText}
                  onChange={(e) => setQText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <div className="flex gap-2 flex-wrap">
                  {["multiple_choice", "yes_no", "scale"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setQType(t)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        qType === t
                          ? "bg-teal-500 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {questionTypeLabels[t]}
                    </button>
                  ))}
                </div>
                {qType === "multiple_choice" && (
                  <input
                    type="text"
                    placeholder="Options (comma-separated)"
                    value={qOptions}
                    onChange={(e) => setQOptions(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                )}
                <button
                  onClick={addOrUpdateQuestion}
                  className="px-3 py-1.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
                >
                  {editingQId ? "Update Question" : "Add Question"}
                </button>
              </div>
            </div>

            <button
              onClick={handleSaveAssessment}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
            >
              {editingId ? "Update" : "Create"} Assessment
            </button>
          </div>
        </div>
      )}

      {/* Assessment list */}
      <div className="space-y-3">
        {assessments.map((a) => (
          <div key={a.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{a.title}</h3>
                  <p className="text-sm text-gray-500">
                    {a.description} · {a.questions.length} questions
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openEdit(a);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAssessment(a.id);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                  {expandedId === a.id ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            {expandedId === a.id && (
              <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 space-y-2">
                {a.questions.map((q, i) => (
                  <div
                    key={q.id}
                    className="bg-gray-50 rounded-lg px-4 py-2 text-sm"
                  >
                    <span className="font-medium text-gray-900">
                      {i + 1}. {q.text}
                    </span>
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800 border border-teal-200">
                      {questionTypeLabels[q.type]}
                    </span>
                    {q.options && (
                      <p className="text-gray-600 mt-1">
                        Options: {q.options.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAssessments;